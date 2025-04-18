import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome.js';
import Contacto from './pages/contact.js';
import Profile from './pages/profile.js';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/contact">Contacto</Link>
                </li>
                <li>
                  <Link to="/profile">Perfil</Link>
                </li>
              </ul>
            </div>
            <Routes>
              <Route path='/contact' element={<Contacto></Contacto>}></Route>
              <Route path="/profile/:name" element={<Profile name="Sergio"></Profile>}></Route>
            </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
