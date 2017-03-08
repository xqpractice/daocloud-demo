import React from 'react';
import HomePage from '../pages/HomePage';
import ReactBaseController from './ReactBaseController';

class HomePageController extends ReactBaseController {
  constructor() {
    super();
    this.title = 'Home Page';
  }

  index() {
    this.renderPage(<HomePage />, 'HomePage');
  }
}

export default HomePageController;
