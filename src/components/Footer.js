import React from 'react'
import '../components/Statics/styles/Footer.css'
import { BsFacebook, BsInstagram } from "react-icons/bs";

function Footer() {
    return (
    <React.Fragment>
        <footer className="footer">
            <section className="container">
                <div className="box">
                    <h6>Redes Sociales</h6>
                    <br/>
                    <div className='container-redes' >
                        <a href="https://www.facebook.com/fundacionrocadesionp" target="_blank" rel='noreferrer'>
                            <i className= "icon-redes"><BsFacebook /></i>
                            <span className= "texto-redes"> fundacionrocadesion</span>
                        </a>
                        <br/>
                        <a href="https://www.instagram.com/fundacionlaroca/" target="_blank" rel='noreferrer'>
                            <i className= "icon-redes"><BsInstagram/></i>
                            <span className= "texto-redes"> fundacionlaroca</span>
                        </a>
                    </div>
                </div>
                <div className="box">
                    <h6>Contacto</h6>
                    <br/>
                    <p>+57 310 878 0765</p>
                    <p>+57 323 650 7990</p>
                    <p>fundacionlarocadesion@hotmail.com</p>
                </div>
            </section>
        </footer>
    </React.Fragment>
);
}

export default Footer;
