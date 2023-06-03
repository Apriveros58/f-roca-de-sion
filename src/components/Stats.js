import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Statics/styles/Stats.css'
import Button from '../components/Button';

function Stats() {
  return (
    <React.Fragment>
      <div className='stats'>
        <table>
          <tr>
              <td><h2>206.000</h2></td>
              <td>
                <ul>
                  <li><h3>niños de 5 años</h3></li>
                  <li className='text2'>no tienen educación preescolar en Colombia</li>
                  <li className='cita'><a href="https://www.elcolombiano.com/colombia/eudcacion-preescolar-hay-206000-ninos-de-5-anos-sin-estudiar-en-colombia-KI18019267#:~:text=El%20sistema%20educativo%20colombiano%20tiene,en%20Colombia%2C%20seg%C3%BAn%20el%20Dane." target="_blank" rel='noreferrer'>*El Colombiano, 2022</a></li>
                </ul>
              </td>
              <td><h2>1/4</h2></td>
              <td>
                <ul>
                  <li><h3>de hogares en Colombia</h3></li>
                  <li className='text2'>consumen menos de 3 comidas al día</li>
                  <li className='cita'><a href="https://www.larepublica.co/economia/uno-de-cada-cuatro-hogares-en-colombia-consume-menos-de-tres-comidas-cada-dia-3371214#:~:text=Hacienda-,Uno%20de%20cada%20cuatro%20hogares%20en%20Colombia,de%20tres%20comidas%20cada%20d%C3%ADa&text=En%202021%2C%20la%20econom%C3%ADa%20nacional,recuperaci%C3%B3n%20de%202%2C8%25.." target="_blank" rel='noreferrer'>*La República, 2022</a></li>
                </ul>
              </td>
            </tr>
            <tr>
            <td><h2>27% menos</h2></td>
              <td>
                <ul>
                  <li className='text2'>gana una madre soltera</li>
                  <li><h3>en comparación con padres solteros</h3></li>
                  <li className='cita'><a href="https://www.bluradio.com/economia/bolsillo/mamas-solteras-ganan-en-general-un-27-menos-que-los-padres-solteros-dane-rg10" target="_blank" rel='noreferrer'>*Blu Radio, 2022</a></li>
                </ul>
              </td>
              <td><h2>2.4%</h2></td>
              <td>
                <ul>
                  <li><h3>de los niños menores de 5 años</h3></li>
                  <li className='text2'>son reportados con denutrición aguda en el Sisben</li>
                  <li className='cita'><a href="https://saludata.saludcapital.gov.co/osb/index.php/datos-de-salud/seguridad-alimentaria-y-nutricional/desnutricionexcesospesonmenores5anios/" target="_blank" rel='noreferrer'>*Secretaría de Salud, 2022</a></li>
                </ul>
              </td>
          </tr>
        </table>
        <button className='dark_action' id='help_button'>
          <Link to={"/Contacto"}>
            <Button contenido="Ayúdanos a disminuir estos casos"/>
          </Link>
        </button>
      </div>
    </React.Fragment>
  );
}

export default Stats;