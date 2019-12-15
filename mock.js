const express = require('express');
const app = express();

app.get('/course/list', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Content-Type', 'application/json;chartset=utf-8');

    res.json({
        code: 0,
        list: [
            { id: 1, name: 'javascript从入门到精通' },
            { id: 2, name: 'vue.js实战' },
            { id: 3, name: 'react native 移动开发实战' },
            { id: 4, name: 'Node.js 实战' }
        ]
    })
});

app.get('/user/info', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Content-Type', 'application/json;chartset=utf-8');

    res.json({
        code: 0,
        data: {
            title: '开课吧',
            name: '大圣'
        }
    })
});

app.listen(3001, () => {
    console.log('mock启动完毕');
});