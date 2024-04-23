import{ Routes, Route } from 'react-router-dom'

import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PatnersPage from './pages/PatnersPage';



function App() {
  return (
    <div>
      <NavbarComponent/>

      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/event' Component={EventPage} />
        <Route path='/about' Component={AboutPage} />
        <Route path='/patners' Component={PatnersPage} />
        <Route path='/contact' Component={ContactPage} />
      </Routes>

      <FooterComponent/>
  </div>
  );
}

export default App
