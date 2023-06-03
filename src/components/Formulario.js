import React from 'react';
//import { Link } from 'react-router-dom';
import '../components/Statics/styles/Formulario.css'
//Componentes internos:
import Button from '../components/Button';

function Formulario() {
  return (
    <React.Fragment>
        <div className="Formulario">
            <form>
                <label for="Nombre">
                    <ul className="ul_Up">
                        <li className='text'><strong>Nombre:</strong></li>
                        <li>
                            <input type="text" nombre="Nombre" placeholder="Nombre o Institución"className='text'required/>
                        </li>
                        <br/>
                        <li className='text'><strong>Correo:</strong></li>
                        <li>
                            <input type="email" nombre="Correo" placeholder="E-mail de contacto" className='text' required/>
                        </li>
                    </ul>
                    <ul className="ul_Down">
                        <li className='text'><strong>Mensaje:</strong></li>
                        <li>
                            <textarea name="Mensaje" id="" cols="30" rows="10" placeholder="Escribe aquí lo que quieres contarnos" className="text" required></textarea>
                        </li>
                    </ul>
                    <button className='light_action'><Button contenido="Enviar"/></button>
                </label>
            </form>
        </div>
    </React.Fragment>
  );
}

export default Formulario;