import React from 'react';
//import { Link } from 'react-router-dom';
import '../components/Statics/styles/Hablar.css'
import Formulario from '../components/Formulario';

function Hablar(props) {
  return (
    <React.Fragment>
        <div class="Hablar" id='habla'>
            <label className="over_title"><h1>¡Habla con nosotros!</h1></label>
            <Formulario/>
            <table className='contact_info'>
              <tr>
                <td className='icon'>
                  <span class="material-symbols-rounded">call</span>
                </td>
                <td className="text">{props.telefono}</td>
              </tr>
              <tr>
                <td className='icon'>
                  <span class="material-symbols-rounded">mail</span>
                </td>
                <td className="text" id='correo'>{props.correo}</td>
              </tr>
            </table>
        </div>
    </React.Fragment>
  );
}

export default Hablar;