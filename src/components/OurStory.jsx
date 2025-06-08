import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import backgroundImage from '../assets/por_do_sol.jpg';

// Criando um estilo global para resolver o problema de rolagem horizontal
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    overflow-x: hidden;
    width: 100%;
    max-width: 100%;
    scroll-behavior: smooth;
  }
`;

// Styled components for the Our Story section
const StoryContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Alinhando à direita */
  justify-content: center;
  padding: 1rem 0.5rem;
  position: relative;
  overflow-x: hidden;
  box-sizing: border-box;
  margin: 0;
  transition: all 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
    z-index: 1;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }
  
  /* Mobile - Small */
  @media (min-width: 360px) and (max-width: 389px) {
    padding: 0;
    align-items: center; /* Centralizado em dispositivos pequenos */
  }
  
  /* Mobile - Medium */
  @media (min-width: 390px) and (max-width: 767px) {
    padding: 0;
    align-items: center; /* Centralizado em dispositivos pequenos */
  }
  
  /* Tablet */
  @media (min-width: 768px) and (max-width: 810px) {
    flex-direction: row;
    padding: 3rem 2rem;
    align-items: center;
    justify-content: flex-end;
  }
  
  /* Tablet - Large */
  @media (min-width: 811px) and (max-width: 1365px) {
    flex-direction: row;
    padding: 3rem 3rem;
    align-items: center;
    justify-content: flex-end;
  }
  
  /* Desktop */
  @media (min-width: 1366px) and (max-width: 1919px) {
    flex-direction: row;
    padding: 4rem 5rem;
    max-width: 100%;
    align-items: center;
    justify-content: flex-end;
  }
  
  /* Desktop - Large */
  @media (min-width: 1920px) {
    flex-direction: row;
    padding: 5rem 8rem;
    max-width: 100%;
    align-items: center;
    justify-content: flex-end;
  }
`;

const StoryContent = styled.div`
  margin-bottom: 2rem;
  z-index: 2;
  background-color: rgba(242, 223, 183, 0.7); /* cream color with opacity */
  padding: 10rem;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2), 0 0 40px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  width: 100%;
  transition: all 0.3s ease;
  
  /* Mobile - Small */
  @media (min-width: 360px) and (max-width: 389px) {
    max-width: 95%;
    padding: 1.25rem;
    margin: 0 auto; /* Centralizado em dispositivos pequenos */
    align-self: center;
  }
  
  /* Mobile - Medium */
  @media (min-width: 390px) and (max-width: 767px) {
    max-width: 95%;
    padding: 1.5rem;
    margin: 0 auto; /* Centralizado em dispositivos pequenos */
    align-self: center;
  }
  
  /* Tablet */
  @media (min-width: 768px) and (max-width: 810px) {
    margin-right: 2rem;
    margin-bottom: 0;
    max-width: 50%;
    padding: 1.75rem; 
    border-right: none;
  }
  
  /* Tablet - Large to Desktop */
  @media (min-width: 811px) and (max-width: 1365px) {
    margin-right: 3rem;
    margin-bottom: 0;
    max-width: 45%;
    padding: 2rem;
    border-right: none;
  }
  
  /* Desktop */
  @media (min-width: 1366px) and (max-width: 1919px) {
    margin-right: 5rem;
    margin-bottom: 0;
    max-width: 40%;
    padding: 2rem;
    border-right: none;
  }
  
  /* Desktop - Large */
  @media (min-width: 1920px) {
    margin-right: 8rem;
    max-width: 500px;
    padding: 2.5rem;   
    border-right: none;
  }
`;

const StoryTitle = styled.h2`
  font-family: 'Dancing Script', cursive;
  color: #c45824; /* terracota-primary from the color palette */
  margin-bottom: 1.5rem;
  text-align: center;
  
  /* Mobile - Small */
  @media (min-width: 360px) and (max-width: 389px) {
    font-size: 2.2rem;
    margin-bottom: 1.2rem;
  }
  
  /* Mobile - Medium */
  @media (min-width: 390px) and (max-width: 767px) {
    font-size: 2.5rem;
  }
  
  /* Tablet */
  @media (min-width: 768px) and (max-width: 1365px) {
    font-size: 2.8rem;
    text-align: center; 
  }
  
  /* Desktop */
  @media (min-width: 1366px) and (max-width: 1919px) {
    font-size: 3rem;
    text-align: center; 
  }
  
  /* Desktop - Large */
  @media (min-width: 1920px) {
    font-size: 3.5rem;
    text-align: center; 
  }
`;

const StoryText = styled.p`
  font-family: 'Montserrat', sans-serif;
  color:rgb(14, 5, 1); /* darker shade of terracota for better readability */
  line-height: 1.8;
  margin-bottom: 1.2rem;
  text-align: justify;
  font-weight: 600; /* Aumentando a espessura da letra */
  
  &:last-child {
    margin-bottom: 0;
  }
  
  /* Mobile - Small */
  @media (min-width: 360px) and (max-width: 389px) {
    font-size: 0.9rem;
    line-height: 1.6;
    text-align: justify; /* Texto justificado em dispositivos pequenos */
  }
  
  /* Mobile - Medium */
  @media (min-width: 390px) and (max-width: 767px) {
    font-size: 0.95rem;
    text-align: justify; /* Texto justificado em dispositivos pequenos */
  }
  
  /* Tablet */
  @media (min-width: 768px) and (max-width: 1365px) {
    font-size: 1rem;
  }
  
  /* Desktop */
  @media (min-width: 1366px) and (max-width: 1919px) {
    font-size: 1.1rem;
  }
  
  /* Desktop - Large */
  @media (min-width: 1920px) {
    font-size: 1.2rem;
  }
`;

const OurStory = () => {
  return (
    <>
      <GlobalStyle />
      <StoryContainer>
        <StoryContent>
          <StoryTitle>Nossa História</StoryTitle>
          <StoryText>
          No coração da igreja, onde a música e a fé nos uniam a Deus, nossos caminhos se entrelaçaram. Entre acordes, ensaios e louvores, nossos olhares se encontraram, e cada melodia ganhava um novo sentido.
          </StoryText>
          <StoryText>
          Descobrimos uma sintonia que transcendia as notas, partilhando valores, sonhos e a certeza de que Deus nos havia presenteado um ao outro. Nossa história, uma canção que se compõe a cada dia, floresceu ali, onde a fé nos fortalece e o amor nos completa.
          </StoryText>
        </StoryContent>
      </StoryContainer>
    </>
  );
};

export default OurStory;
