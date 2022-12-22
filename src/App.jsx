import '@styles/global.scss';
import '@styles/variables.css';
import Login from './components/organisms/Login';
import CardsWrapper from '@organisms/CardsWrapper';
import Contact from './components/organisms/Contact';
import Layout from './layout';

import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<CardsWrapper />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
