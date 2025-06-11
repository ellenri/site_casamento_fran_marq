import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/por_do_sol.jpg';
import logoImage from '../assets/LOGO FUNDO BRANCO.png';

// Navbar components
const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 1000;
  background-color: transparent;
  transition: background-color 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
  
  @media (max-width: 768px) {
    height: 35px;
  }
`;

const NavLinks = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.3rem 0;
  
  &:hover {
    color: #ffcba4;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #ffcba4;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  &.active {
    color: #ffcba4;
    
    &::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: flex;
  }
  
  span {
    width: 100%;
    height: 2px;
    background-color: white;
    transition: all 0.3s ease;
    border-radius: 1px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
  
  ${props => props.isOpen && `
    span:first-child {
      transform: translateY(9px) rotate(45deg);
    }
    
    span:nth-child(2) {
      opacity: 0;
    }
    
    span:last-child {
      transform: translateY(-9px) rotate(-45deg);
    }
  `}
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 999;
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  backdrop-filter: blur(5px);
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLink = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-30px)'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  animation: ${props => props.isOpen ? 'slideInDown' : 'slideOutUp'} 0.6s ease-out;
  animation-delay: ${props => props.delay || '0s'};
  animation-fill-mode: both;
  
  @keyframes slideInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideOutUp {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-30px);
    }
  }
  
  &:hover {
    color: #ffcba4;
    transform: translateY(-3px);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: #ffcba4;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 80%;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  transform: ${props => props.isOpen ? 'scale(1)' : 'scale(0)'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  animation: ${props => props.isOpen ? 'scaleIn' : 'scaleOut'} 0.4s ease-out;
  animation-delay: ${props => props.isOpen ? '0.3s' : '0s'};
  animation-fill-mode: both;
  
  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes scaleOut {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0);
    }
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &:before, &:after {
    content: '';
    position: absolute;
    width: 80%;
    height: 2px;
    background-color: white;
    border-radius: 1px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
  
  &:before {
    transform: rotate(45deg);
  }
  
  &:after {
    transform: rotate(-45deg);
  }
`;

// Styled components para a seção Home2
const Home2Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
  padding: 10% 10% 5% 10%;
  scroll-margin-top: 70px; /* Ajuste para compensar a altura do navbar fixo */
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  @media (max-width: 768px) {
    height: 100vh;
    align-items: center;
    padding: 15% 5% 10% 5%;
    justify-content: flex-start;
    background-position: 310% center; /* Move a imagem para a esquerda para centralizar o casal */
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  z-index: 2;
  text-align: right;
  max-width: 600px;
  height: 100%;
  
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    justify-content: flex-start;
    height: 90%;
  }
`;

const CoupleNames = styled.h1`
  font-family: 'Dancing Script', cursive;
  font-size: 4.5rem;
  color: white;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.2;

  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Quote = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  color: white;
  margin: 0.5rem 0 0;
  font-style: italic;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 0.5rem 0 0;
  }
`;

const DateInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: auto;
  
  @media (max-width: 768px) {
    align-items: center;
    margin-top: auto;
  }
`;

const DateText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  color: white;
  margin: 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const WeddingDate = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  margin: 0.5rem 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Home2 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Detectar rolagem para mudar o estilo do navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Detectar qual seção está visível
      const sections = ['home', 'nossa-historia', 'galeria', 'programacao', 'local', 'recepcao', 'presentes'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, activeSection]);

  // Effect to handle body scroll when mobile menu is open/closed
  useEffect(() => {
    if (mobileMenuOpen) {
      // Store the current scroll position
      const scrollY = window.scrollY;
      // Prevent scrolling
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling and restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup function to ensure scroll is re-enabled if component unmounts
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <>
      <NavbarContainer scrolled={scrolled}>
        <Logo>
          <LogoImage src={logoImage} alt="F&M" />
        </Logo>
        <NavLinks>
          <NavLink href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</NavLink>
          <NavLink href="#nossa-historia" className={activeSection === 'nossa-historia' ? 'active' : ''}>Nossa História</NavLink>
          <NavLink href="#galeria" className={activeSection === 'galeria' ? 'active' : ''}>Galeria</NavLink>
          <NavLink href="#programacao" className={activeSection === 'programacao' ? 'active' : ''}>Programação</NavLink>
          <NavLink href="#local" className={activeSection === 'local' ? 'active' : ''}>Cerimônia</NavLink>
          <NavLink href="#recepcao" className={activeSection === 'recepcao' ? 'active' : ''}>Recepção</NavLink>
          <NavLink href="#presentes" className={activeSection === 'presentes' ? 'active' : ''}>Presentes</NavLink>
        </NavLinks>
        <MobileMenuButton onClick={toggleMobileMenu} isOpen={mobileMenuOpen}>
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>
      </NavbarContainer>
      
      <MobileMenu isOpen={mobileMenuOpen}>
        <CloseButton isOpen={mobileMenuOpen} onClick={toggleMobileMenu} />
        <MobileNavLink href="#home" onClick={toggleMobileMenu} isOpen={mobileMenuOpen} delay="0s">Home</MobileNavLink>
        <MobileNavLink href="#nossa-historia" onClick={toggleMobileMenu} isOpen={mobileMenuOpen} delay="0.1s">Nossa História</MobileNavLink>
        <MobileNavLink href="#galeria" onClick={toggleMobileMenu} isOpen={mobileMenuOpen} delay="0.2s">Galeria</MobileNavLink>
        <MobileNavLink href="#programacao" onClick={toggleMobileMenu} isOpen={mobileMenuOpen} delay="0.3s">Programação</MobileNavLink>
        <MobileNavLink href="#local" onClick={toggleMobileMenu} isOpen={mobileMenuOpen} delay="0.4s">Cerimônia</MobileNavLink>
        <MobileNavLink href="#recepcao" onClick={toggleMobileMenu} isOpen={mobileMenuOpen} delay="0.5s">Recepção</MobileNavLink>
        <MobileNavLink href="#presentes" onClick={toggleMobileMenu} isOpen={mobileMenuOpen} delay="0.6s">Presentes</MobileNavLink>
      </MobileMenu>
      
      <Home2Container id="home">
        <ContentContainer>
          <CoupleNames>Franciely &</CoupleNames>
          <CoupleNames>Marquegiani</CoupleNames>
          <Quote>"Fazei tudo o que Ele vos disser."</Quote>
          <DateInfo>
            <DateText>O novo capítulo de nossas vidas</DateText>
            <DateText>juntos começa oficialmente em</DateText>
            <WeddingDate>26 de Julho de 2025</WeddingDate>
          </DateInfo>
        </ContentContainer>
        <ButtonsContainer>
          <ConfirmButton href="#recepcao">Confirmar Presença</ConfirmButton>
          <GiftListButton href="#presentes">Lista de Presentes</GiftListButton>
        </ButtonsContainer>
      </Home2Container>
    </>
  );
};

const ButtonsContainer = styled.div`
  position: absolute;
  bottom: 100px;
  left: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 10;
  
  @media (max-width: 768px) {
    position: relative;
    bottom: auto;
    left: auto;
    flex-direction: row;
    gap: 15px;
    justify-content: center;
    width: 100%;
    margin-top: 5px;
  }
`;

const ButtonBase = styled.a`
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 30px;
  text-decoration: none;
  border: 1px solid white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  width: 200px;
  height: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: scale(1.05);
    background-color: #c45824;
    color: white;
    border-color: #c45824;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 10px 4px;
    font-size: 0.9rem;
    width: 210px;
    height: 45px;
  }
`;

const ConfirmButton = styled(ButtonBase)`
`;

const GiftListButton = styled(ButtonBase)`
`;

export default Home2;
