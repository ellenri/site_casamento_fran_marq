import './App.css'
import { createGlobalStyle } from 'styled-components'
import Home from './components/Home'
import OurStory from './components/OurStory'
import EventSchedule from './components/EventSchedule'
import CerimonyLocation from './components/CerimonyLocation'

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

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
      <OurStory />
      <EventSchedule />
      <CerimonyLocation />
    </>
  )
}

export default App
