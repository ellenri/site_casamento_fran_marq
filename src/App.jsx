import './App.css'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import Home from './components/Home'
import OurStory from './components/OurStory'
import EventSchedule from './components/EventSchedule'
import WeddingReception from './components/WeddingReception'
import PhotoGallery from './components/PhotoGallery'
import CerimonyLocation from './components/CerimonyLocation'
import GiftList from './components/GiftList'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
// Estilo global para garantir que não haja rolagem horizontal em toda a aplicação
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body, #root {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }
  
  #root {
    display: block;
    position: relative;
  }
`;

// Container para controlar a ordem dos componentes
const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// Componentes para desktop e mobile com ordens diferentes
const DesktopSection = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileSection = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;



function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Função para verificar se é mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Verificar inicialmente
    checkIfMobile();
    
    // Adicionar event listener para redimensionamento
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <>
      <GlobalStyle />
      {/* Versão Desktop */}
      {!isMobile && (
        <>
          <Home />
          <OurStory />
          <PhotoGallery />
          <EventSchedule />
          <CerimonyLocation />
          <WeddingReception />
          <GiftList />
          <Footer />
        </>
      )}
      
      {/* Versão Mobile */}
      {isMobile && (
        <>
          <Home />
          <OurStory />
          <EventSchedule />
          <CerimonyLocation />
          <WeddingReception />
          <GiftList />
          <PhotoGallery />
          <Footer />
        </>
      )}
    </>
  )
}

export default App
