import React from 'react';
import styled from 'styled-components';
import violaoImage from '../assets/violao_lirio_fundo_branco.png';
import igrejaImage from '../assets/igreja_fundo_branco.png';
import foto1Image from '../assets/nossa_historia_foto1_borda_branca.png';
import foto2Image from '../assets/nossa_historia_foto2_borda_branca.png';

const OurStory2Container = styled.div`
  width: 100%;
  background-color: #f9e7dc; /* Cor de fundo bege claro */
  display: flex;
  justify-content: center;
  padding: 4rem 2rem;
  scroll-margin-top: 70px; /* Ajuste para compensar a altura do navbar fixo */
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImagesSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
    align-items: center;
  }
`;

const TextSection = styled.div`
  flex: 1;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 768px) {
    padding-left: 0;
    text-align: center;
  }
`;

const Title = styled.h2`
  font-family: 'Dancing Script', cursive;
  font-size: 3.5rem;
  color: #c45824; /* Cor terracota */
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const StoryText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  line-height: 1.8;
  color: #5c4b51; /* Cor marrom escuro */
  text-align: justify;
   font-weight: 500;
  
  @media (max-width: 768px) {
    text-align: center;
    font-size: 0.9rem;
  }
`;

const PhotoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Photo1 = styled.img`
  width: 70%;
  max-width: 300px;
  height: auto;
  object-fit: contain;
  position: relative;
  z-index: 2;
  margin-bottom: -50px;
  margin-right: 300px;
  
  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: -30px;
  }
`;

const Photo2 = styled.img`
  width: 80%;
  max-width: 350px;
  height: auto;
  object-fit: contain;
  position: relative;
  z-index: 1;
  margin-left: 50px;
  
  @media (max-width: 768px) {
    width: 90%;
    margin-left: 30px;
  }
`;

const ViolaoImage = styled.img`
  position: absolute;
  width: 250px;
  height: auto;
  top: 35%;
  right: 10%;
  transform: translateY(-50%);
  z-index: 3;
  
  @media (max-width: 768px) {
    width: 80px;
    top: 40%;
    right: 5%;
  }
`;

const IgrejaImage = styled.img`
  position: absolute;
  width: 220px;
  height: auto;
  bottom: -3%;
  left: 0;
  z-index: 3;
  
  @media (max-width: 768px) {
    width: 100px;
    bottom: 10%;
    left: 5%;
  }
`;

const OurStory2 = () => {
  return (
    <OurStory2Container id="nossa-historia">
      <ContentWrapper>
        <ImagesSection>
          <PhotoContainer>
            <Photo1 src={foto1Image} alt="Nossa História 1" />
            <Photo2 src={foto2Image} alt="Nossa História 2" />
            <ViolaoImage src={violaoImage} alt="Violão" />
            <IgrejaImage src={igrejaImage} alt="Igreja" />
          </PhotoContainer>
        </ImagesSection>
        <TextSection>
          <Title>Nossa História</Title>
          <StoryText>
            No coração da igreja, onde a música e a fé nos uniam a Deus, nossos caminhos se entrelaçaram. 
            Entre acordes, ensaios e louvores, nossos olhares se encontraram, e cada melodia ganhava um novo sentido. 
            Descobrimos uma sintonia que transcendia as notas, partilhando valores, sonhos e a certeza de que Deus 
            nos havia presenteado um ao outro. Nossa história, uma canção que se compõe a cada dia, floresceu ali, 
            onde a fé nos fortalece e o amor nos completa.
          </StoryText>
        </TextSection>
      </ContentWrapper>
    </OurStory2Container>
  );
};

export default OurStory2;
