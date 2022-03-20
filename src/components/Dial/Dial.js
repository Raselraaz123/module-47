import React from 'react';

const Dial = (props) => {
  return (
    <div style={{
      backgroundColor: 'peru',
      border: '5px solid gold',
      color:'white'
    }}>
      <h3>this is dial</h3>

      <p>steps so far :{props.steps}</p>
    </div>
  );
};

export default Dial;