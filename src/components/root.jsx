import React from 'react';
import render from '../index';

function Root() {
  return (
    <React.Fragment>
      <h1>Hello, welcome to our test ap</h1>
      <a href="about">About  </a>
      <a href="blog">Blog</a>
    </React.Fragment>
  );
}

export default () => render(Root);
