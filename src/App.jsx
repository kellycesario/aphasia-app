import '@styles/global.scss';
import '@styles/variables.css';
import { ContactPage, HomePage, LoginPage } from '@templates';

import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
