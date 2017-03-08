import React from 'react';
import HelloPage from '../pages/HelloPage';
import ReactBaseController from './ReactBaseController';

class HelloController extends ReactBaseController {
  constructor() {
    super();
    this.title = 'Hello Page';
  }

  index() {
    this.renderPage(<HelloPage />, 'Hello Page');
  }
}

export default HelloController;
