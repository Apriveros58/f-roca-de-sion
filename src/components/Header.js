import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Statics/styles/Header.css'
//Componentes Internos
import Button from '../components/Button';
import Collage from '../components/Statics/img/Collage.png'

function Header() {
  return (
    <React.Fragment>
      <div className='Header'>
        <figure>
          <img src={Collage} alt="Fondo"/>
          <div className='capa'>
            <div className='inside'>
              <h1>Trabajamos para que tengan una vida digna</h1>
              <button className='light_action'>
                <Link to={"/Contacto"}>
                  <Button contenido="Contáctanos"/>
                </Link>
              </button>
            </div>
          </div>
        </figure>
      </div>
    </React.Fragment>
  );
}

export default Header;