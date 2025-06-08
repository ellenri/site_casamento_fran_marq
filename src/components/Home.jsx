import React from 'react';
import styled from 'styled-components';
import noivadoImage from '../assets/noivado.jpg';
import casamentoImage from '../assets/casamento.jpg';
import roupaPretaImage from '../assets/roupa_preta_violao.jpg';
import violaoImage from '../assets/violao.png';
import churchImage from '../assets/igreja.png';


// Styled components for the home section
const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #c45824; /* terracota-primary from the color palette */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2rem 4rem;
  position: relative;
  overflow-x: hidden;
  box-sizing: border-box;
  margin: 0 auto;
  
  /* Mobile - Small */
  @media (min-width: 360px) and (max-width: 389px) {
    padding: 1rem;
    align-items: center;
    justify-content: flex-start;
    height: auto;
    min-height: 100vh;
  }
  
  /* Mobile - Medium */
  @media (min-width: 390px) and (max-width: 767px) {
    padding: 1.25rem;
    align-items: center;
    justify-content: flex-start;
    height: auto;
    min-height: 100vh;
  }
  
  /* Tablet */
  @media (min-width: 768px) and (max-width: 810px) {
    padding: 1.5rem 2rem;
  }
  
  /* Tablet - Large */
  @media (min-width: 811px) and (max-width: 1365px) {
    padding: 2rem 3rem;
  }
  
  /* Desktop */
  @media (min-width: 1366px) and (max-width: 1919px) {
    padding: 2rem 5%;
    justify-content: center;
    max-width: 1366px;
  }
  
  /* Desktop - Large */
  @media (min-width: 1920px) {
    padding: 2rem 10%;
    justify-content: center;
    max-width: 1800px;
  }
`;

const CoupleNames = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
  z-index: 2;
  max-width: 50%;
  
  @media (min-width: 1600px) {
    max-width: 40%;
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
    align-items: center;
    margin-bottom: 0.5rem;
  }
`;

const NameText = styled.h1`
  font-family: 'Dancing Script', cursive;
  font-size: 4rem;
  color:rgb(240, 236, 229); /* cream from the color palette */
  text-align: center;
  line-height: 1.2;
  margin: 0;
  
  @media (min-width: 1600px) {
    font-size: 5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const WeddingDate = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  color: #ffcba4; /* warm-white from the color palette */
  margin-bottom: 2rem;
  text-align: left;
  z-index: 2;
  
  @media (min-width: 1600px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 768px) {
    text-align: center;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;


const PhotosContainer = styled.div`
  position: absolute;
  top: 15%;
  right: 15%;
  width: 450px;
  height: 650px;
  z-index: 1;
  
  /* Mobile - Small */
  @media (min-width: 360px) and (max-width: 389px) {
    position: relative;
    top: auto;
    right: auto;
    margin: 0.75rem auto;
    width: 100%;
    max-width: 280px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
  
  /* Mobile - Medium */
  @media (min-width: 390px) and (max-width: 767px) {
    position: relative;
    top: auto;
    right: auto;
    margin: 1rem auto;
    width: 100%;
    max-width: 320px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  /* Tablet */
  @media (min-width: 768px) and (max-width: 1365px) {
    right: 10%;
    width: 400px;
    height: 600px;
  }
  
  /* Desktop */
  @media (min-width: 1366px) and (max-width: 1919px) {
    right: 15%;
    width: 500px;
    height: 700px;
  }
  
  /* Desktop - Large */
  @media (min-width: 1920px) {
    right: 20%;
    width: 550px;
    height: 750px;
  }
  
  /* Extra Large */
  @media (min-width: 2000px) {
    right: 25%;
    width: 600px;
    height: 800px;
  }
`;

const PhotoFrame = styled.div`
  width: ${props => {
    if (props.position === 'middle') return '350px';
    return props.size === 'small' ? '250px' : '300px';
  }};
  height: ${props => {
    if (props.position === 'middle') return '350px';
    return props.size === 'small' ? '250px' : '300px';
  }};
  background-color:rgb(240, 236, 229); /* cream from the color palette */
  padding: 1rem;
  transform: ${props => props.rotate || 'rotate(0deg)'};
  border: 2px solid #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: absolute;
  overflow: hidden;
  
  ${props => props.position === 'top' && `
    top: -80px;
    right: 350px;
    z-index: 3;
  `}
  
  ${props => props.position === 'middle' && `
    top: 100px;
    left: 130px;
    z-index: 2;
  `}
  
  ${props => props.position === 'bottom' && `
    top: 400px;
    right: 370px;
    z-index: 1;
  `}
  
  @media (min-width: 1600px) {
    width: ${props => {
      if (props.position === 'middle') return '400px';
      return props.size === 'small' ? '300px' : '350px';
    }};
    height: ${props => {
      if (props.position === 'middle') return '400px';
      return props.size === 'small' ? '300px' : '350px';
    }};
    
    ${props => props.position === 'top' && `
      top: -100px;
      right: 400px;
    `}
    
    ${props => props.position === 'middle' && `
      top: 120px;
      left: 150px;
    `}
    
    ${props => props.position === 'bottom' && `
      top: 450px;
      right: 400px;
    `}
  }
  
  @media (max-width: 768px) {
    position: relative;
    width: ${props => {
      if (props.position === 'middle') return '250px';
      return props.size === 'small' ? '200px' : '220px';
    }};
    height: ${props => {
      if (props.position === 'middle') return '250px';
      return props.size === 'small' ? '200px' : '220px';
    }};
    top: auto;
    left: auto;
    right: auto;
    margin: 0;
    transform: ${props => props.rotate || 'rotate(0deg)'};
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  box-sizing: border-box;
`;

const GuitarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 2px #ffffff) drop-shadow(0 0 2px #ffffff);
`;

const ChurchImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 2px #ffffff) drop-shadow(0 0 2px #ffffff);
`;

const Quote = styled.p`
  font-family: 'Dancing Script', cursive;
  font-size: 1.5rem;
  color: #ffcba4; /* warm-white from the color palette */
  margin-top: 2rem;
  text-align: left;
  font-style: italic;
  z-index: 2;
  
  @media (min-width: 1600px) {
    font-size: 2rem;
  }
  
  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.3rem;
    margin-top: 1rem;
  }
`;

const GuitarFrame = styled.div`
  position: absolute;
  top: 58%;
  right: 38%;
  width: 120px;
  height: 120px;
  background-color: transparent;
  transform: rotate(-15deg);
  z-index: 3;
  text-shadow: 0 0 5px #ffffff, 0 0 5px #ffffff;
  
  @media (min-width: 1600px) {
    width: 150px;
    height: 150px;
    right: 40%;
  }
  
  @media (min-width: 2000px) {
    right: 45%;
  }
  
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    top: 10%;
    right: 10%;
  }
`;
const ChurchFrame = styled.div`
  position: absolute;
  top: 31%;
  left: 42%;
  width: 120px;
  height: 120px;
  background-color: transparent;
  transform: rotate(-5deg);
  z-index: 1;
  text-shadow: 0 0 5px #ffffff, 0 0 5px #ffffff;
  
  @media (min-width: 1600px) {
    width: 150px;
    height: 150px;
    left: 45%;
  }
  
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    position: relative;
    top: 5%;
    left: auto;
    right: 5%;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <CoupleNames>
        <NameText>Franciely &</NameText>      
        <NameText>Marquegiani</NameText>
      </CoupleNames>
      <Quote>"Fazei tudo o que Ele vos disser."</Quote>
      <WeddingDate>
        O novo capítulo de nossas vidas juntos
        <br />
        começa oficialmente em 26 de Julho de 2025
      </WeddingDate>
      
      <PhotosContainer>
        <PhotoFrame size="small" position="top" rotate="rotate(-8deg)">
          <Photo src={casamentoImage} alt="casamento" />
        </PhotoFrame>
        <PhotoFrame position="middle" rotate="rotate(3deg)">
          <Photo src={roupaPretaImage} alt="Roupa preta" />
        </PhotoFrame>
        <PhotoFrame size="small" position="bottom" rotate="rotate(-5deg)">
          <Photo src={noivadoImage} alt="Noivado" />
        </PhotoFrame>
      </PhotosContainer>
      
      <GuitarFrame>
        <GuitarImg src={violaoImage} alt="Violão" />
      </GuitarFrame>
      
      <ChurchFrame>
        <ChurchImg src={churchImage} alt="Igreja"/>
      </ChurchFrame>
    </HomeContainer>
  );
};

export default Home;
