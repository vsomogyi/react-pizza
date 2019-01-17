import React from 'react';
import { branch, renderComponent } from 'recompose';

export default (propName = 'data') =>
  branch(
    props => props[propName] && props[propName].loading,
    renderComponent(() => <div>Loading...</div>),
  );
