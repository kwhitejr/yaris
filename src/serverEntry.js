/* eslint-disable no-console */
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './containers/App/App.js';

function handleRender(req, res) {
  const html = ReactDOMServer.renderToString(
    <App name="World" />
  );
  fs.readFile('./index.html', 'utf8', (err, file) => {
    if (err) {
      return console.log(err);
    }
    const document = file.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`);
    return res.send(document);
  });
}

export default handleRender;