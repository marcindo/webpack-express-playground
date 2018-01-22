import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';


const app = express();
const DIST = path.join(__dirname, 'src');
const DEFAULT_PORT = 3000;
const compiler = webpack(config);

const port = (process.env.PORT || DEFAULT_PORT);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));

app.get('*', (_, res) => {
  const indexPath = path.join(__dirname, 'src', 'index.ejs');
  res.sendFile(indexPath);
});

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
