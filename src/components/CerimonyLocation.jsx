import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import igreja from '../assets/igreja_do_santissimo_redentor.jpg';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const CerimonyContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  position: relative;
  overflow-x: hidden;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
`;

const CerimonyContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CerimonyTitle = styled.h2`
font-family: 'Dancing Script', cursive;
    color: #c45824; /* Cor terracota */
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
  
  @media (min-width: 1366px) {
    font-size: 4rem;
  }
`;

const CerimonyText = styled.p`
   font-family: 'Montserrat', sans-serif;
  color: #8B4513;
  text-align: center;
  font-size: 1.2rem; 
  font-weight: 500;
  
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;


const LocationSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0rem;
  margin-top: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const LocationImage = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
  
  @media (min-width: 768px) {
    width: 40%;
    height: 400px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const LocationInfo = styled.div`
  width: 100%;
  padding: 1rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (min-width: 768px) {
    padding: 2rem 3rem;
    text-align: left;
    height: 400px;
  }
`;

const LocationTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: 500;
`;

const LocationDetails = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: #666;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 1rem;
  position: relative;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;



const CerimonyLocation = () => {
  return (
    <>
      <GlobalStyle />
      <CerimonyContainer id="local">
        <CerimonyContent>
          <CerimonyTitle>Cerimônia Religiosa</CerimonyTitle>
          <CerimonyText>
            Não percam esse momento lindo e emocionante das nossas vidas. 
          </CerimonyText>
          <CerimonyText>
            Contamos com você para ser ainda mais especial!
          </CerimonyText>
          
          
          
          <LocationSection>
            <LocationImage>
              <img src={igreja} alt="Igreja do Santíssimo Redentor" />
            </LocationImage>
            
            <LocationInfo>
              <LocationTitle>Igreja do Santíssimo Redentor</LocationTitle>
              <LocationDetails>
                26 de julho de 2025 às 16:30<br />
                A Igreja unida será abençoada para sempre diante dos olhos de Deus.<br /> 
                E para nós, é uma honra ter pessoas tão queridas vivenciando esse momento ao nosso lado.
              </LocationDetails>
              
              <MapContainer>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.7999183362767!2d-49.48483092414126!3d-16.66831666735063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e5d9f32ab80bb%3A0xd32ce4ab8b8e627a!2sIgreja%20do%20Sant%C3%ADssimo%20Redentor!5e0!3m2!1spt-BR!2sbr!4v1717905668!5m2!1spt-BR!2sbr" 
                  allowFullScreen="" 
                  loading="lazy" 
                  width="100%"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Igreja do Santíssimo Redentor"
                ></iframe>
              </MapContainer>
              
            </LocationInfo>
          </LocationSection>
        </CerimonyContent>
      </CerimonyContainer>
    </>
  );
};

export default CerimonyLocation;
