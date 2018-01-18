import path from 'path';
import Index from './index';
import Blog from './components/blog';
import About from './components/about';
import Root from './components/root';


export default function addRoutes(app) {
  app.get('/', (req, res, next) => {
    res.locals.component = Root;
    next();
  });

  app.get('/blog', (req, res, next) => {
    res.locals.component = Blog;
    next();
  });

  app.get('/about', (req, res, next) => {
    res.locals.component = About;
    next();
  });
}
