import React from 'react';
import '../components/Statics/styles/map.css'

function GoogleMap() {
        return (
        <div className = "map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7193016767164!2d-74.17557805369536!3d4.644076253307302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9dff29097b57%3A0x4531ebff46ac29b2!2sFundaci%C3%B3n%20La%20Roca%20De%20Sion!5e0!3m2!1ses!2sco!4v1685653508965!5m2!1ses!2sco"
                        width="" 
                        height=""
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        title="Mapa de la fundacion"
                        className="map-iframe">
                </iframe>
        </div>
        );
}

export default GoogleMap;
