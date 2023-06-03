import React from 'react';
import '../components/Statics/styles/InfoSection.css'

function InfoSection(props) {
  return (
    <React.Fragment>
        <div className='info_sec'>
            <h1>{props.titulo}</h1>
            <p className='text'>{props.descripcion}</p>
        </div>
    </React.Fragment>
  );
}

export default InfoSection;