import React, { Component } from 'react';
import HomeView from './../views/HomeView';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-page">
        <HomeView />
      </div>
    );
  }
}

export default HomePage;
