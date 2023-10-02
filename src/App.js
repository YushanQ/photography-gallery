import './App.scss';
import HeroSection from "../src/components/HeroSection"
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { ImagesCollection } from './components/ImagesCollection';
import { InformationSection } from './components/InformationSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';


function App() {
  const [navbarOpen, setNavbarOpen] =  useState(false);
  return (
    <div className='App'>
      <Container>
        <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
        <Menu navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
        <HeroSection/>
        <InformationSection/>
        <ImagesCollection/>
        <AboutSection/>
        <Footer/>
      </Container>
    </div>
  );
}

export default App;
