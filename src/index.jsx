import React from 'react';


export default function render(RootComponent) {
  if (module.hot) {
    module.hot.accept();
  }
  return <RootComponent />;
}
