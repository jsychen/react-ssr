import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import routes from '../src/App';
import { StaticRouter, matchPath, Route } from 'react-router-dom';
import { getServerStore } from '../src/store/store';
import { Provider } from 'react-redux';
import Header from '../src/component/Header';

const app = express();

const store = getServerStore();

app.use(express.static('public'));
app.get('*', (req, res) => {
    const promises = [];
    routes.some( route => {
        const match = matchPath(req.path, route);
        if(match) {
            const { loadData } = route.component;
            if(loadData) {
                promises.push(loadData(store))
            }
        }
    });
    Promise.all(promises.map( p => p.catch(err => console.log(err)))).then( () => {
        const content = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url}>
                    <Header />
                    {routes.map( route => <Route {...route}/>)}
                </StaticRouter>
            </Provider>
        );
        res.send(`
            <html>
                <head>
                    <meta charset="utf-8"/>
                    <title>开课吧</title>
                </head>
                <body>
                    <div id="root">${content}</div>
                    <script>
                        window.__context = ${JSON.stringify(store.getState())}
                    </script>
                    <script src="/bundle.js"></script>
                </body>
            </html>
        `);
    }).catch( err => res.send('报错页面'));
    
})
app.listen(3000, () => {
    console.log('3000端口自监听完毕');
})