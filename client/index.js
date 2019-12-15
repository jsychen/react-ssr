import React from 'react';
import ReactDom from 'react-dom';
import routes from '../src/App';
import { getClientStore } from '../src/store/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../src/component/Header';

// 客户端入口
const Page = (
<Provider store={getClientStore()}>
    <BrowserRouter>
        <Header />
        {routes.map( route => <Route {...route}/>)}
    </BrowserRouter>
</Provider>);
ReactDom.hydrate(Page, document.getElementById('root'));