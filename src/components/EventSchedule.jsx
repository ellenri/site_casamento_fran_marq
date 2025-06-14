import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
// Usando imagens existentes no projeto
import photo1 from '../assets/casa_laranja_pri_roupa_preta.jpg';
import photo2 from '../assets/roupa_preta_violao.jpg';
import lirio from '../assets/lirio.png';
import girasol from '../assets/girasol.png';
// Nota: não temos um ícone de fita, então vamos usar uma solução CSS

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

const ScheduleContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f2e9d7; /* Cor bege claro similar à da imagem de exemplo */
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

const ScheduleContent = styled.div`
  z-index: 2;
  background-color: transparent;
  padding: 2.5rem;
  border-radius: 0;
  box-shadow: none;
  width: 100%;
  max-width: 800px;
  position: relative;
  transition: all 0.3s ease;
  
  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

const ScheduleTitle = styled.h2`
  font-family: 'Dancing Script', cursive;
   color: #c45824; /* Cor terracota */
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.1;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
  
  @media (min-width: 1366px) {
    font-size: 4rem;
  }
`;

const EventDate = styled.h3`
  font-family: 'Montserrat', sans-serif;
  color: #8B4513;
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
  
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

const EventList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: 2rem;
  width: 100%;
  max-width: 600px;
  margin: 2rem auto 0;
`;

const EventItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // border-bottom: 1px solid rgba(139, 69, 19, 0.2);
  // padding-bottom: 0.75rem;
  // padding-top: 0.75rem;
  // padding-left: 1.51rem;
  
  // &:last-child {
  //   border-bottom: none;
  //   padding-bottom: 0;
  // }
  
  // &:first-child {
  //   padding-top: 0;
  // }
`;

const EventTime = styled.span`
  font-family: 'Montserrat', sans-serif;
  color: #8B4513;
  font-weight: 600;
  font-size: 1.5rem;
  min-width: 80px;
  text-align: right;
  padding-right: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
    min-width: 80px;
  }
`;
const EventObservation = styled.span`
  font-family: 'Montserrat', sans-serif;
  color: #8B4513;
  font-weight: 600;
  font-size: 0.8rem;
  text-align: left;
  padding-left: 1.5rem;
  border-bottom: 1px solid rgba(139, 69, 19, 0.2);
  padding-bottom: 0.75rem;
  padding-top: 0.75rem;
  padding-left: 1.51rem;
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  
  &:first-child {
    padding-top: 0;
  }
 

  
  @media (min-width: 768px) {
    font-size: 1.2rem;
    min-width: 80px;
  }
`;

const EventDescription = styled.span`
  font-family: 'Montserrat', sans-serif;
  color: #8B4513;
  font-weight: 500;
  font-size: 1.1rem;
  text-align: left;
  flex: 1;
  
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const PhotoDecoration = styled.div`
  position: absolute;
  width: 220px;
  height: 320px;
  background-color: white;
  padding: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: rotate(${props => props.rotate || '0deg'});
  z-index: 3;
  display: none;
  
  @media (min-width: 768px) {
    display: block;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 50px;
    height: 20px;
    background-color: rgba(139, 69, 19, 0.4);
    top: -10px;
    left: 50%;
    transform: translateX(-50%) rotate(5deg);
    border-radius: 2px;
  }
`;

const LeftPhoto = styled(PhotoDecoration)`
 bottom: -25%;
  right: -290px; 
  width: 450px;
  height: 300px;  
  transform: rotate(-10deg);
`;

const RightPhoto = styled(PhotoDecoration)`
  top: -25%;
  left: -350px;
  width: 300px;
  height: 450px; 
  transform: rotate(8deg);
`;

const LirioDecoration = styled.div`
  position: absolute;
  top: -250px;
  left: -310px;
  width: 220px;
  height: 220px;
  z-index: 4;
  transform: rotate(10deg);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  @media (max-width: 768px) {
    height: 120px;
    top: -10px;
    left: -90px;
  }
`;

const GirasolDecoration = styled.div`
  position: absolute;
  bottom: -150px;
  right: 78px;
  width: 200px;
  height: 200px;
  z-index: 4;
  transform: rotate(-9deg);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  @media (max-width: 768px) {
    width: 70px;
    bottom: -40px;
    right: 0px;
    transform: rotate(5deg);
  }
`;

const EventSchedule = () => {
  return (
    <>
      <GlobalStyle />
      <ScheduleContainer id="programacao">
        <ScheduleContent>
          <LirioDecoration>
            <img src={lirio} alt="Flor de lírio" />
          </LirioDecoration>
          
          <LeftPhoto>
            <img src={photo1} alt="Foto dos noivos" />
          </LeftPhoto>
          
          <ScheduleTitle>Programação do Evento</ScheduleTitle>
          <EventDate>26 de Julho de 2025</EventDate>
          
          <EventList>
            <EventItem>
              <EventTime>16:30</EventTime>
              <EventDescription>Cerimônia Religiosa</EventDescription>             
            </EventItem>
            <EventObservation>Na Igreja do Santíssimo Redentor</EventObservation>
            
            <EventItem>
              <EventDescription>Recepção na Churrascaria Favo de Mel em Goiânia</EventDescription>
            </EventItem>
            <EventObservation>Após a cerimônia religiosa!</EventObservation>
            
          </EventList>
          
          <RightPhoto>
            <img src={photo2} alt="Foto dos noivos" />
          </RightPhoto>
          
          <GirasolDecoration>
            <img src={girasol} alt="Flor de girassol" />
          </GirasolDecoration>
        </ScheduleContent>
      </ScheduleContainer>
    </>
  );
};

export default EventSchedule;
