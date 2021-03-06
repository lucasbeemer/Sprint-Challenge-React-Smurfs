import React from 'react';
import '../App.css';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3 className="name">{props.name}</h3>
      <strong>{props.height} cm tall</strong>
      <p>{props.age} smurf years old</p>
      <button
        onClick={() => {
          props.removeSmurf(props.id);
        }}
      >
        Delete {props.name}
      </button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

