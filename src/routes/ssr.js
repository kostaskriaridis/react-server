import express from 'express';
import App from '../components/app';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const router = express.Router();

router.get('/', async (req, res) => {
    const reactAppHtml = ReactDOMServer.renderToString(<App />);
    const html = `
        <html>
            <head>
                <title>React SSR</title>
            </head>
            <body>
                <div id="app">${reactAppHtml}</div>
                <script src="/app.js" charset="utf-8"></script>
                <script src="/vendor.js" charset="utf-8"></script>
            </body>
        </html>
    `

    res.send(html);
});

export default router;
