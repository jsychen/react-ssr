import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import App from '../src/App';
import { StaticRouter } from 'react-router-dom';
import store from '../src/store/store';
import { Provider } from 'react-redux';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url}>{App}</StaticRouter>
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
                <script src="/bundle.js"></script>
            </body>
        </html>
    `)
})
app.listen(3000, () => {
    console.log('3000端口自监听完毕');
})

