import './App.scss';
import Container from './components/Container';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Container>
        <Hero />
        <Main />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
