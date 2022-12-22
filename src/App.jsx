import '@styles/global.scss';
import '@styles/variables.css';
import LoginPage from '@pages/Login';
import CardsWrapper from '@organisms/CardsWrapper';
import Layout from './layout';

import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<CardsWrapper />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
