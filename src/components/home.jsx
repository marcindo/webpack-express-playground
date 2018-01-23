import React from 'react';
import {
  Link,
} from 'react-router-dom';

export default function Home() {
  return (
    <React.Fragment>
      <h1>Hello, welcome to our test app hello</h1>
      <Link to="/about" href="about">About  </Link>
      <Link to="/blog" href="blog">Blog</Link>
    </React.Fragment>
  );
}
