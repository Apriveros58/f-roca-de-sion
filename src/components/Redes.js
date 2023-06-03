import React from 'react';
import { BsFacebook, BsInstagram } from "react-icons/bs";
import '../components/Statics/styles/Redes.css'

function Redes() {
  return (
    <React.Fragment>
        <div class="Hablar" id='redesS'>
            <label className="over_title"><h1>¡Síguenos!</h1></label>
            <div className="redes">
               <table>
                <tr>
                    <td className="icon_content">
                        <i className= "icon-redes"><BsFacebook /></i>
                    </td>
                    <td class="text">fundacionrocadesion</td>
                    <td className="espacio">.</td>
                    <td className="icon_content">
                        <i className= "icon-redes"><BsInstagram /></i>
                    </td>
                    <td class="text">@fundacionlaroca</td>
                </tr>
               </table>
            </div>
        </div>
    </React.Fragment>
  );
}

export default Redes;