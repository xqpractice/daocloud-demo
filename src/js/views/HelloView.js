import React, { Component } from 'react';
import Hello from './../components/Hello';

class HelloView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Hello message={ 'xqcao' }/>
      </div>
    );
  }
}

export default HelloView;
