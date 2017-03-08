import React, { PropTypes } from 'react';

const Hello = ({ message }) => (
  <div className="hello">
    Hello: { message }
  </div>
);

Hello.propTypes = {
  message: PropTypes.string.isRequired
};

export default Hello;
