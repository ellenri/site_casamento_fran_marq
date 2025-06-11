import React from 'react';
import styled from 'styled-components';
import giftListImage from '../assets/lista_presentes.png';

const GiftListContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff; /* Cor de fundo branca, igual ao CerimonyLocation */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  position: relative;
  overflow-x: hidden;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  scroll-margin-top: 70px; /* Ajuste para compensar a altura do navbar fixo */
  
  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
  
  @media (min-width: 1366px) {
    padding: 5rem;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  position: relative;
  transition: all 0.3s ease;
  
  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

const GiftListTitle = styled.h2`
  font-family: 'Dancing Script', cursive;
  color: #c45824; /* Cor terracota */
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
  
  @media (min-width: 1366px) {
    font-size: 4rem;
  }
`;

const GiftListText = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: #8B4513;
  text-align: center;
  font-size: 1.2rem; 
  font-weight: 500;
  margin-bottom: 2rem;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

const GiftIconContainer = styled.a`
  width: 120px;
  height: 120px;
  background-color: #c45824; /* Cor terracota */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem auto;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const GiftIcon = styled.div`
  width: 56px;
  height: 56px;
  background-color: white;
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z'/%3E%3C/svg%3E") no-repeat center center;
  mask-size: contain;
`;

const GiftListButton = styled.a`
  display: block;
  text-align: center;
  margin: 0.5rem auto 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  color: #5c4b51;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  
  &:hover {
    color: #c45824;
  }
`;

const Divider = styled.hr`
  width: 90%;
  border: none;
  height: 1px;
  background-color: rgba(92, 75, 81, 0.3); /* Cor marrom escuro com transparência */
  margin: 2rem auto;
`;

const SuggestionTitle = styled.h3`
  font-family: 'Dancing Script', cursive;
  color: #8B4513;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
    text-align: left;
  }
`;

const ColorSuggestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0 2rem;
  background-color: rgb(233, 193, 164);
  padding: 2rem;
  width: 100%;
  
  @media (min-width: 768px) {
    padding: 3rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const ColorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ColorSwatch = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${props => props.color};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const ColorName = styled.span`
  font-family: 'Montserrat', sans-serif;
  color: #8B4513;
  font-size: 1.1rem;
  text-transform: uppercase;
  font-weight: 500;
`;

const GiftImage = styled.img`
  width: 100%;
  max-width: 400px;
  display: block;
  
  @media (max-width: 767px) {
    margin: 2rem auto 0;
  }
`;

const GiftList = () => {
  return (
    <GiftListContainer id="presentes">
      <ContentWrapper>
        <GiftListTitle>Lista de Presentes</GiftListTitle>
        <GiftListText>
          SUA PRESENÇA É O NOSSO MAIOR PRESENTE, MAS CASO QUEIRA COMPARTILHAR SEU CARINHO EM FORMA DE PRESENTE, AQUI ESTÃO ALGUMAS SUGESTÕES!
        </GiftListText>
        
        <GiftIconContainer href="https://www.mercadolivre.com.br/presentes/casamento-fran-e-marq-3xsu4" target="_blank" rel="noopener noreferrer">
          <GiftIcon />
        </GiftIconContainer>
        
        <GiftListButton href="https://www.mercadolivre.com.br/presentes/casamento-fran-e-marq-3xsu4" target="_blank" rel="noopener noreferrer">
          CLIQUE PARA ACESSAR A LISTA DE PRESENTES
        </GiftListButton>
        
        <Divider />
        
        <ColorSuggestionContainer>
          <div>
            <SuggestionTitle>Sugestão de cores e materiais:</SuggestionTitle>
            
            <div>
              <ColorRow>
                <ColorSwatch color="#5a5a5a" />
                <ColorName>GRAFITE/CINZA</ColorName>
              </ColorRow>
              
              <ColorRow>
                <ColorSwatch color="#000000" />
                <ColorName>PRETO</ColorName>
              </ColorRow>
              
              <ColorRow>
                <ColorSwatch color="#ffffff" />
                <ColorName>BRANCO/VIDRO</ColorName>
              </ColorRow>
              
              <ColorRow>
                <ColorSwatch color="#b08d57" />
                <ColorName>MADEIRA/BAMBU</ColorName>
              </ColorRow>
            </div>
          </div>
          
          <GiftImage src={giftListImage} alt="Sugestões de presentes" />
        </ColorSuggestionContainer>
      </ContentWrapper>
    </GiftListContainer>
  );
};

export default GiftList;
