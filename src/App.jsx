import Header from './components/Header';
import Nav from './components/NavTabs';
import Footer from './components/Footer';
import Page from './components/Page';
import { useLocation } from 'react-router-dom';

export default function App() {
  const currentPage = useLocation().pathname;

  return (
    <div>
      <Header>
        <Nav currentPage={currentPage} />
      </Header>
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}