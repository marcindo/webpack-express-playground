import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'components/root';
import { Route } from 'react-router';


function render(RootComponent) {
  ReactDOM.render(<RootComponent />, document.querySelector('#root'));
}

render(Root);
