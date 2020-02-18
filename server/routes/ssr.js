import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../src/reducers';
import App from '../../src/containers/App';
import { renderTemplate } from './template';

const router = express.Router();

router.get('/', async (req, res) => {
    const store = createStore(reducer);

    const html = ReactDOMServer.renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );
    const preloadedState = store.getState();

    res.send(renderTemplate({
        title: 'My page',
        html,
        preloadedState
    }));
});

export default router;
