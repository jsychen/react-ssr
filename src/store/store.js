// 存出入口
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import indexReducer from './index.js';

const reducer = combineReducers({
    index: indexReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;