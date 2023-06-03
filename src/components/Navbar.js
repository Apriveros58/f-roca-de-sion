import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Statics/styles/Navbar.css'
import logo from '../components/Statics/img/LogoFundacion.png'

function Navbar() {
  return (
    <React.Fragment>
      <nav>
        <Link to={"/"}>
            <div className='home'>
              <img src={logo} alt="Logo"/>
              <h1>Fundación La Roca de Sión</h1>
            </div>
        </Link>
        <div className='nav_pages'>
            <ul>
                <li><Link to={"/Nosotros"} className='text'>Sobre Nosotros</Link></li>
                <li><Link to={"/Contacto"} className='text'>Contacto</Link></li>
            </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;