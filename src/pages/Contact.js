import React from 'react';
import Navbar from '../components/Navbar';
import Hablar from '../components/Hablar';
import Visita from '../components/Visita';
import Redes from '../components/Redes';

function Contact() {
  return (
    <React.Fragment>
      <Navbar/>
      <Hablar
        telefono="310 878 0765 - 323 650 7990"
        correo ="fundacionlarocadesion@hotmail.com"
      />
      <Visita/>
      <Redes/>
    </React.Fragment>
  );
}

export default Contact;