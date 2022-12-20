import '@styles/global.scss';
import '@styles/variables.css';
import LoginPage from '@pages/Login';
import CardsWrapper from '@organisms/CardsWrapper';
import Layout from './layout';
function App() {
  return (
    <Layout>
      <CardsWrapper />
    </Layout>
  );
}

export default App;
