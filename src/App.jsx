import './App.css'
import { Container } from "./component/index";
import { Header, Footer, Hero, Mostpopular } from "./component/sections/index";
const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <Mostpopular />
      </Container>
      <Footer />
    </>
  );
};

export default App;
