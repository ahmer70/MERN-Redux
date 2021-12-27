import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducers from 'redux-root-reducer';
import thunk from 'redux-thunk';
import { applyMiddleware } from "redux"
// const store = createStore(rootReducers, applyMiddleware(thunk));
import {store} from './context/notes/store'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
  </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

