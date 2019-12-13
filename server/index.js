import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import App from '../src/App';

const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
    // const Page = <App/> 
    const content = renderToString(App);
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
    console.log('监听完毕');
    
})

