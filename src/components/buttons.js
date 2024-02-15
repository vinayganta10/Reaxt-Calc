import React from 'react';

function Buttons (props) {
  return (
    <>
      <button type="button" onClick={props.handleInput}>1</button>
      <button type="button" onClick={props.handleInput}>2</button>
      <button type="button" onClick={props.handleInput}>3</button>
      <button type="button" onClick={props.handleClear}>Clear</button>
      <button type="button" onClick={props.handleDelete}>Delete</button>
      <button type="button" onClick={props.handleInput}>4</button>
      <button type="button" onClick={props.handleInput}>5</button>
      <button type="button" onClick={props.handleInput}>6</button>
      <button type="button" onClick={props.handleInput}>+</button>
      <button type="button" onClick={props.handleInput}>-</button>
      <button type="button" onClick={props.handleInput}>7</button>
      <button type="button" onClick={props.handleInput}>8</button>
      <button type="button" onClick={props.handleInput}>9</button>
      <button type="button" onClick={props.handleInput}>*</button>
      <button type="button" onClick={props.handleInput}>/</button>
      <button type="button" onClick={props.handleInput}>0</button>
      <button type="button" onClick={props.handleEqual}>=</button>
    </>
  );
}

export default Buttons;
