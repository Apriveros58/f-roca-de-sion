import React from 'react';
import '../components/Statics/styles/Visita.css'
import GoogleMap from '../components/GoogleMap';

function Visita() {
  return (
    <React.Fragment>
        <div class="Hablar" id='visita'>
            <label className="over_title"><h1>¡Visítanos!</h1></label>
            <div className="location_info">
                <table>
                    <tr>
                        <td><span class="material-symbols-rounded" id="location_icon">location_on</span></td>
                        <td><h2>Cra. 94 B # 40 Sur 15</h2></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><h3>Bogotá D.C, Colombia</h3></td>
                    </tr>
                </table>
                <GoogleMap/>
            </div>
        </div>
    </React.Fragment>
  );
}

export default Visita;