import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// Importando as imagens
import tomandoCafeProxima from '../assets/tomando_cafe_proxima.jpg';
import roupaBrancaEmPe from '../assets/igreja_roupa_branca.jpg';
import cafeteria from '../assets/cafeteria.jpg';
import roupaBranca from '../assets/roupa_branca.jpg';
import porDoSolAbraco from '../assets/por_do_sol_abraco.jpg';
import casaVerdePriRoupaPreta from '../assets/casa_laranja_pri_roupa_preta.jpg';
import roupaBrncaSentados from '../assets/roupa_brnca_sentados.jpg';
import casaAzulPriRoupaPreta from '../assets/casa_azul_pri_roupa_preta.jpg';

// Estilo global para garantir que não haja rolagem horizontal
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

const GalleryContainer = styled.div`
  width: 100%;
  background-color: #6a7c6b; /* Cor verde escuro para combinar com o tema */
  position: relative;
  overflow: hidden;
  scroll-margin-top: 70px; /* Ajuste para compensar a altura do navbar fixo */
`;



const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
  height: 70vh;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    height: auto;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    height: auto;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 1fr);
    height: auto;
  }
`;

const PhotoItem = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;



// Modal para exibir a foto ampliada
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${props => props.show ? '1' : '0'};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const ModalContent = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
  outline: none;
  
  &:hover {
    color: #c45824;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 40px;
  cursor: pointer;
  outline: none;
  padding: 20px;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
  
  &.prev {
    left: 10px;
  }
  
  &.next {
    right: 10px;
  }
  
  @media (max-width: 768px) {
    font-size: 30px;
    padding: 10px;
  }
`;

const PhotoGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Array com todas as imagens da galeria usando useMemo para evitar recriação a cada render
  const images = useMemo(() => [
    { src: tomandoCafeProxima, alt: "Casal tomando café" },
    { src: roupaBrancaEmPe, alt: "Casal em pé" },
    { src: porDoSolAbraco, alt: "Casal ao pôr do sol" },
    { src: roupaBranca, alt: "Casal com roupa branca" },
    { src: casaAzulPriRoupaPreta, alt: "Casal em casa azul" },
    { src: cafeteria, alt: "Casal na cafeteria" },
    { src: roupaBrncaSentados, alt: "Casal sentado" },
    { src: casaVerdePriRoupaPreta, alt: "Casal em casa laranja" }
  ], []);
  
  // Função para abrir o modal com a imagem clicada
  const openModal = useCallback((image, index) => {
    setCurrentImage(image);
    setCurrentIndex(index);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Impede a rolagem da página quando o modal está aberto
  }, []);
  
  // Função para fechar o modal
  const closeModal = useCallback(() => {
    setModalOpen(false);
    document.body.style.overflow = 'auto'; // Permite a rolagem da página novamente
  }, []);
  
  // Função para navegar para a próxima imagem
  const nextImage = useCallback(() => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setCurrentImage(images[newIndex]);
  }, [currentIndex, images]);
  
  // Função para navegar para a imagem anterior
  const prevImage = useCallback(() => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setCurrentImage(images[newIndex]);
  }, [currentIndex, images]);
  
  // Adiciona event listener para teclas quando o componente é montado
  React.useEffect(() => {
    // Função para lidar com teclas do teclado
    const handleKeyDown = (e) => {
      if (!modalOpen) return;
      
      switch (e.key) {
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'Escape':
          closeModal();
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Remove event listener quando o componente é desmontado
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen, nextImage, prevImage, closeModal]); // Dependências do useEffect
  
  return (
    <>
      <GlobalStyle />
      <GalleryContainer id="galeria">
        <PhotoGrid>
          {/* Primeira linha */}
          <PhotoItem>
            <Photo 
              src={tomandoCafeProxima} 
              alt="Casal tomando café" 
              onClick={() => openModal(images[0], 0)} 
            />
          </PhotoItem>
          <PhotoItem>
            <Photo 
              src={roupaBrancaEmPe} 
              alt="Casal em pé" 
              onClick={() => openModal(images[1], 1)} 
            />
          </PhotoItem>
          <PhotoItem>
            <Photo 
              src={porDoSolAbraco} 
              alt="Casal ao pôr do sol" 
              onClick={() => openModal(images[2], 2)} 
            />
          </PhotoItem>
          <PhotoItem>
            <Photo 
              src={roupaBranca} 
              alt="Casal com roupa branca" 
              onClick={() => openModal(images[3], 3)} 
            />
          </PhotoItem>
          
          {/* Segunda linha */}
          <PhotoItem>
            <Photo 
              src={casaAzulPriRoupaPreta} 
              alt="Casal em casa azul" 
              onClick={() => openModal(images[4], 4)} 
            />
          </PhotoItem>
          <PhotoItem>
            <Photo 
              src={cafeteria} 
              alt="Casal na cafeteria" 
              onClick={() => openModal(images[5], 5)} 
            />
          </PhotoItem>
          <PhotoItem>
            <Photo 
              src={roupaBrncaSentados} 
              alt="Casal sentado" 
              onClick={() => openModal(images[6], 6)} 
            />
          </PhotoItem>
          <PhotoItem>
            <Photo 
              src={casaVerdePriRoupaPreta} 
              alt="Casal em casa laranja" 
              onClick={() => openModal(images[7], 7)} 
            />
          </PhotoItem>
        </PhotoGrid>
        
        {/* Modal para exibir a foto ampliada */}
        <Modal show={modalOpen} onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            {currentImage && (
              <ModalImage 
                src={currentImage.src} 
                alt={currentImage.alt} 
              />
            )}
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <NavigationButton className="prev" onClick={prevImage}>&lsaquo;</NavigationButton>
            <NavigationButton className="next" onClick={nextImage}>&rsaquo;</NavigationButton>
          </ModalContent>
        </Modal>
      </GalleryContainer>
    </>
  );
};

export default PhotoGallery;
