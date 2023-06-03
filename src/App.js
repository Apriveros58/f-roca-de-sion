import { BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom';
// Paginas
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route
              exact path='/'
              element={<Home/>}>
        </Route>
        <Route
              exact path='/Nosotros'
              element={<About/>}>
        </Route>
        <Route
              exact path='/Contacto'
              element={<Contact/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
