import React from 'react'
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import App from './app.jsx';
import reducers from './../reducers/index';

const middleware = applyMiddleware(promise(), thunk, createLogger());
const store = createStore(reducers, middleware);


ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('app'));
