import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter'
import { Provider } from 'react-redux'
import store from './store/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.scss';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
