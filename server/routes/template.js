/**
 * Render html for our page
 *
 * @param {Object} config
 * @param {string} config.title
 * @param {string} config.html
 * @param {Object} config.preloadedState
 *
 * @returns {string}
 */
export function renderTemplate({
    title,
    html,
    preloadedState
}) {
    return `
        <html>
            <head>
                <title>${title}</title>
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
