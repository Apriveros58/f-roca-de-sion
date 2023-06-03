import React from 'react';
// Componentes:
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import FBcomponent from '../components/FBcomponent';
import Footer from '../components/Footer';
//import GoogleMap from '../components/GoogleMap';
import Stats from '../components/Stats';

function Home() {
  return (
    <React.Fragment>
      <Navbar/>
      <Header/>
      <Stats/>
      <label><h1 className='hometitle'>¡Conócenos!</h1></label>
      <iframe id="video" width="560" height="500" src="https://www.youtube.com/embed/tVVvwJPOm2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <FBcomponent/>
      {/*<div className='map'><GoogleMap/></div> */}
      <Footer/>
    </React.Fragment>
  );
}

export default Home;