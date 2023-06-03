import React from 'react';
import '../components/Statics/styles/Button.css'

function Button(props) {

  return (
    <React.Fragment>
        <h1>{props.contenido}</h1>
    </React.Fragment>
  );
}

export default Button;