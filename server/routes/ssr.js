import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../src/reducers';
import App from '../../src/containers/App';

const router = express.Router();

/**
 * Render html for our page
 *
 * @param {string} html
 * @param {Object} preloadedState
 *
 * @returns {string}
 */
function renderFullPage(html, preloadedState) {
    return `
        <html>
            <head>
                <title>React SSR</title>
            </head>
            <body>
                <div id="app">${html}</div>
                <script>
                    window.__REDUX_PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};
                </script>
                <script src="/app.js" charset="utf-8"></script>
                <script src="/vendor.js" charset="utf-8"></script>
            </body>
        </html>
    `;
}

router.get('/', async (req, res) => {
    const store = createStore(reducer);

    const html = ReactDOMServer.renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );
    const preloadedState = store.getState();

    res.send(renderFullPage(html, preloadedState));
});

export default router;
