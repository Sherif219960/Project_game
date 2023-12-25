import './App.css'
import { Container } from "./component/index";
import { Header, Footer, Hero, Mostpopular } from "./component/sections/index";
import { data } from './data'
import { useState, createContext } from 'react'

export const cardContext = createContext()

const App = () => {
  const [cardData, setCardData] = useState(data)


  return (
    <>
      <Header />
      <Container>
        <Hero />
        <cardContext.Provider value={cardData}>
          <Mostpopular />
        </cardContext.Provider>

      </Container>
      <Footer />
    </>
  );
};

export default App;
