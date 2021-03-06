import React, { useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
  const [steps, setSteps] = useState(0);
  
  const increaseSteps = () => {
    const newStepsCount = steps + 1;

    setSteps(newStepsCount)
  }
  const decreaseSteps = () => {
    const newStepsCount = steps - 1;

    setSteps(newStepsCount);
  };
  return (
    <div style={{backgroundColor:'black' ,color:'red', margin:'30px'}}>
      <h2>this is my smart Watch</h2>
      <h2>my Courrent Steps : {steps}</h2>
      <button onClick={increaseSteps}>De Dour......</button>
      <button onClick={decreaseSteps}>Dour Debina......</button>
      <Display name="germen" steps={steps}></Display>
    </div>
  );
};

export default Watch;