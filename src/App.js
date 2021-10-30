import React, {useState} from 'react';
import About from './components/About';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';



function App() {
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Navbar
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Navbar>
     {<main className="content">
        {!contactSelected ? (
          <>
          <About></About>
          <Portfolio></Portfolio>
          <Resume></Resume>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
    
        </main>}

        <Footer></Footer>
        </div>
  );
}

export default App;
