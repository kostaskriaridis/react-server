import React from 'react';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import reducer from './reducers';
import App from './containers/app';

const preloadedState = window.__REDUX_PRELOADED_STATE__;

delete window.__REDUX_PRELOADED_STATE__;

const store = createStore(
    reducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({ name: 'TODO_APP' })
);

ReactDOM.hydrate(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
