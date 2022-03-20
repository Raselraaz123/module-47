import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
  return (
    <div style={{ border: "2px solid pink", margin: "13px", color: "green" }}>
      <h2>Name : {props.name}</h2>
      <p>so far strps today : {props.steps}</p>
      <Dial steps={props.steps}></Dial>
    </div>
  );
};

export default Display;