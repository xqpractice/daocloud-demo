import React from 'react';
import NotFoundPage from './../pages/NotFoundPage';
import ReactBaseController from './ReactBaseController';

class NotFoundController extends ReactBaseController {
  constructor() {
    super();
    this.title = 'Not Found';
  }

  index() {
    this.renderPage(<NotFoundPage />, 'NotFound Page');
  }
}

export default NotFoundController;
