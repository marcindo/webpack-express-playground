import path from "path";
import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import config from "./webpack.config.js";
import addRoutes from './src/routes';
import { renderToString } from 'react-dom/server';
import React from 'react';
import template from './src/template.js'


const app = express();
const DIST = path.join(__dirname, "src");
const DEFAULT_PORT = 3000;
const compiler = webpack(config);

const port = (process.env.PORT || DEFAULT_PORT);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

addRoutes(app);

app.use(function(req, res, next) {
  const { component, initialState } = res.locals;
  if (!component) {
    return next();
  }
  const filename = path.join(DIST, 'index.ejs');
  const appString = renderToString(React.createElement(component));
  res.set('content-type', 'text/html');
  res.send(template({
    body: appString,
    title: 'Hello World from the server'
  }));
  res.end();
});

app.listen(port);
console.log(`Listening at http://localhost:${port}`)
