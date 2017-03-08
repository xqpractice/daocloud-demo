import React, { Component } from 'react';
import HelloView from './../views/HelloView';

class HelloPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hello-page">
        <HelloView />
      </div>
    );
  }
}

export default HelloPage;
