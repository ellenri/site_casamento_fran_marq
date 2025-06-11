import React from 'react';
import styled from 'styled-components';
import LogoBranco from '../assets/LOGO FUNDO BRANCO.png';

const Footer = () => {
  return (
    <FooterContainer>
      <BackToTopButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <ArrowIcon>↑</ArrowIcon>
        <BackToTopText>VOLTAR AO INÍCIO</BackToTopText>
      </BackToTopButton>
      
      <LogoContainer>
        <FooterLogo src={LogoBranco} alt="Logo Fran e Marq" />
      </LogoContainer>
      
      <CopyrightText>© 2025 by Ellen Ribeiro</CopyrightText>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #3b2e20; /* Cor marrom escuro, similar ao tema */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  position: relative;
`;

const BackToTopButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ArrowIcon = styled.span`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const BackToTopText = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 1px;
`;

const LogoContainer = styled.div`
  margin-bottom: 1rem;
`;

const FooterLogo = styled.img`
  height: 60px;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    height: 70px;
  }
`;

const CopyrightText = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
  text-align: center;
  margin: 0;
`;

export default Footer;
