import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'components/root';


function render(RootComponent) {
  ReactDOM.render(<RootComponent />, document.querySelector('#root'));
}
if (module.hot) {
  module.hot.accept();
}


render(Root);
