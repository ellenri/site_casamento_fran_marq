import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import whatsappIcon from '../assets/whatsapp.png';
import qrCodeImg from '../assets/qr code conta.png';

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
  
  /* Class to disable scroll when popup is open */
  body.no-scroll {
    overflow: hidden !important;
    position: fixed !important;
    width: 100% !important;
    height: 100% !important;
  }
  
  html.no-scroll {
    overflow: hidden !important;
  }
`;

const WeddingReceptionContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f9e7dc; /* Cor de fundo bege claro */
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
  z-index: 2;
  padding: 0rem;
  border-radius: 10px;
  width: 100%;
  max-width: 800px;
  position: relative;
  transition: all 0.3s ease;
  
  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

const ReceptionTitle = styled.h2`
  font-family: 'Dancing Script', cursive;
  color: #c45824; /* Cor terracota */
  text-align: center;
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
  
  @media (min-width: 1366px) {
    font-size: 4rem;
  }
`;

const ReceptionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  position: relative;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SectionTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  color: #5c4b51; /* Cor marrom escuro */
  font-weight: 600;
  font-size: 1.3rem;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SectionText = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: #5c4b51; /* Cor marrom escuro */
  font-weight: 600; /* Aumentado para 600 como no StoryContent */
  font-size: 1rem;
  line-height: 1.8;
  text-align: justify; /* Justificado como no StoryContent */
  
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 2.5rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  
  @media (min-width: 768px) {
    height: 400px;
  }
`;


const WeddingReception = () => {
  const [copied, setCopied] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    quantity: 1,
    fullName: '',
    isChild: false,
    childAge: ''
  });
  const [attendees, setAttendees] = useState([]);

  // Effect to handle body scroll when form is open/closed
  useEffect(() => {
    if (showForm) {
      // Store original overflow values
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalBodyOverflow = document.body.style.overflow;
      
      // Disable scroll on both html and body
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      
      // Cleanup function to restore original overflow when component unmounts or form closes
      return () => {
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.overflow = originalBodyOverflow || 'auto';
      };
    } else {
      // Re-enable scroll
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
  }, [showForm]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('franemarq@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const addAttendee = (e) => {
    e.preventDefault();
    const newAttendee = {
      ...formData,
      id: Date.now()
    };
    setAttendees([...attendees, newAttendee]);
    setFormData({
      quantity: 1,
      fullName: '',
      isChild: false,
      childAge: ''
    });
  };
  
  const removeAttendee = (id) => {
    setAttendees(attendees.filter(attendee => attendee.id !== id));
  };
  
  const sendToWhatsApp = () => {
    let message = "*Confirmação de Presença*\n\n";
    message += "*Lista de Convidados:*\n";
    
    attendees.forEach((person, index) => {
      message += `${index + 1}. ${person.fullName}`;
      if (person.isChild) {
        message += ` (Criança - ${person.childAge} anos)`;
      }
      message += "\n";
    });
    
    message += "\n*Total de pessoas:* " + attendees.length;
    message += "\n\nAguardando o envio do comprovante de pagamento.";
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5562991883838?text=${encodedMessage}`, '_blank');
  };
  return (
    <>
      <GlobalStyle />
      <WeddingReceptionContainer id="recepcao">
        <ContentWrapper>     
          <ReceptionTitle>Recepção</ReceptionTitle>
          
          <ReceptionInfo>
            <InfoSection>
              <SectionTitle>Queridos amigos e familiares,</SectionTitle>
              <SectionText>
                Após a cerimônia iremos comemorar na <strong>Churrascaria Favo de Mel</strong> em Goiânia.
                Para tornar essa celebração ainda mais especial, optamos por uma recepção por adesão parcial.
              </SectionText>
              
              <SectionText style={{ marginTop: '15px' }}>
                <strong>Rodízio Completo</strong> (incluso refrigerante, suco e água)<br />
                <strong>Valor da Contribuição parcial:</strong> R$ 49,90 por pessoa<br />
                Crianças de 7 a 10 anos pagam meia.
              </SectionText>
            </InfoSection>
            <MapContainer>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.7284326160784!2d-49.2552251!3d-16.690467599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef16da11a0f13%3A0xbff6f66e71e3060c!2sChurrascaria%20Favo%20de%20Mel!5e0!3m2!1spt-BR!2sbr!4v1749579710346!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa do local"
            ></iframe>
          </MapContainer>
            
            <InfoSection>
              <SectionTitle>Dados Bancários</SectionTitle>
              <QRCodeContainer>
                <QRCodeImage src={qrCodeImg} alt="QR Code para pagamento" />
                <QRCodeText>Franciely Cristine Ribeiro<br />Banco: Mercado Pago</QRCodeText>
                <PixContainer>
                  <QRCodeText>Chave PIX:</QRCodeText>
                <PixValue>franemarq@gmail.com</PixValue>
                <CopyButton onClick={copyToClipboard}>
                  {copied ? '✓' : ' '}
                  {copied ? 'Copiado!' : 'Copiar'}
                </CopyButton>
              </PixContainer>
              </QRCodeContainer>           
           
              <SectionText style={{ marginTop: '15px', fontStyle: 'italic', fontSize: '0.95rem' }}>
                Enviar comprovante até dia <strong>12/07/2025</strong>, juntamente com o nome completo das pessoas da referida contribuição.
              </SectionText>
              <WhatsappButton onClick={() => setShowForm(!showForm)} title="Preencher formulário de confirmação">
                <WhatsappText>Enviar comprovante</WhatsappText>
                <WhatsappIcon src={whatsappIcon} alt="WhatsApp" />
              </WhatsappButton>
              
              {showForm && (
                <FormOverlay>
                  <FormContainer>
                    <FormTitle>Confirmação de Presença</FormTitle>
                    <FormSubtitle>Dados dos contribuintes:</FormSubtitle>
                    <FormClose onClick={() => setShowForm(false)}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </FormClose>
                    
                    <form onSubmit={addAttendee}>
                      <FormGroup>
                        <FormLabel>Nome Completo:</FormLabel>
                        <FormInput
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                        />
                      </FormGroup>
                      
                      <FormRow>
                        <FormGroup style={{ flex: 1 }}>
                          <FormLabel>É criança?</FormLabel>
                          <CustomCheckbox
                            checked={formData.isChild}
                            onChange={(checked) => handleInputChange({ target: { name: 'isChild', type: 'checkbox', checked } })}
                            label="Sim"
                          />
                        </FormGroup>
                        
                        {formData.isChild && (
                          <FormGroup style={{ flex: 1 }}>
                            <FormLabel>Idade:</FormLabel>
                            <AgeSelector
                              value={formData.childAge}
                              onChange={(value) => handleInputChange({ target: { name: 'childAge', value } })}
                            />
                          </FormGroup>
                        )}
                      </FormRow>
                      
                      <FormButton type="submit">Adicionar Pessoa</FormButton>
                    </form>
                    
                    {attendees.length > 0 && (
                      <AttendeesContainer>
                        <AttendeesTitle>Lista de Confirmados ({attendees.length}):</AttendeesTitle>
                        <AttendeesList>
                          {attendees.map((person) => (
                            <AttendeeItem key={person.id}>
                              <AttendeeInfo>
                                {person.fullName}
                                {person.isChild && ` (Criança - ${person.childAge} anos)`}
                              </AttendeeInfo>
                              <RemoveButton onClick={() => removeAttendee(person.id)}>
                                &times;
                              </RemoveButton>
                            </AttendeeItem>
                          ))}
                        </AttendeesList>
                        
                        <SendWhatsAppButton onClick={sendToWhatsApp} disabled={attendees.length === 0}>
                          Enviar via WhatsApp
                        </SendWhatsAppButton>
                      </AttendeesContainer>
                    )}
                  </FormContainer>
                </FormOverlay>
              )}
            </InfoSection>
          </ReceptionInfo>
          

          
        </ContentWrapper>
      </WeddingReceptionContainer>
    </>
  );
};

// Age Selector Component
const AgeSelector = ({ value, onChange }) => {
  const handleDecrease = () => {
    const newValue = Math.max(1, (parseInt(value) || 1) - 1);
    onChange(newValue);
  };

  const handleIncrease = () => {
    const newValue = Math.min(18, (parseInt(value) || 1) + 1);
    onChange(newValue);
  };

  return (
    <AgeSelectorContainer>
      <AgeButton type="button" onClick={handleDecrease} disabled={parseInt(value) <= 1}>
        −
      </AgeButton>
      <AgeDisplay>{value || 1}</AgeDisplay>
      <AgeButton type="button" onClick={handleIncrease} disabled={parseInt(value) >= 18}>
        +
      </AgeButton>
    </AgeSelectorContainer>
  );
};

// Custom Checkbox Component
const CustomCheckbox = ({ checked, onChange, label }) => {
  const handleClick = () => {
    onChange(!checked);
  };

  return (
    <CheckboxContainer onClick={handleClick}>
      <CheckboxWrapper>
        <HiddenCheckbox checked={checked} readOnly />
        <StyledCheckbox checked={checked}>
          <CheckboxIcon checked={checked}>✓</CheckboxIcon>
        </StyledCheckbox>
      </CheckboxWrapper>
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
};

const PixContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
  margin-bottom: 5px;
`;

const PixValue = styled.div`
  font-family: 'Montserrat', sans-serif;
  background-color: #f5f5f5;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 0.9rem;
  border: 1px solid #ddd;
  flex: 1;
`;

const CopyButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: ${props => props.copied ? '#25D366' : '#c45824'};
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.copied ? '#20b858' : '#b54d1e'};
  }
`;

const WhatsappButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 30px;
  background-color: #25D366;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;

const WhatsappText = styled.span`
  font-family: 'Montserrat', sans-serif;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  margin-right: 10px;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const WhatsappIcon = styled.img`
  width: 24px;
  height: 24px;
  
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const FormOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 20px;
`;

const FormContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  width: 100%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0);
`;

const FormTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  color: #5c4b51;
  margin-top: 32px;
  margin-bottom: 24px;
  text-align: center;
  font-size: 1.4rem;
  line-height: 1.2;
`;

const FormSubtitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: #A9A9A9;
  margin-top: 0;
  margin-bottom: 20px;
  text-align: left;
  font-size: 1.1rem;
  font-weight: 500;
`;

const FormClose = styled.button`
  position: absolute;
  top: -30px;
  right: -45px;
  background: none;
  border: none;
  font-size: 3rem;
  cursor: pointer;
  color: #c45824;
  
  &:hover {
    color: #000;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const FormRow = styled.div`
  display: flex;
  gap: 15px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  color: #A9A9A9;
  text-align: left;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  background-color: #f5f5f5;
  color: #000;
  
  &:focus {
    outline: none;
    border-color: #5c4b51;
  }
`;

const FormCheckbox = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  
  input {
    cursor: pointer;
  }
`;

const AgeSelectorContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  width: 120px;
`;

const AgeButton = styled.button`
  background-color: #c45824;
  color: white;
  border: none;
  padding: 10px 12px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
  
  &:hover:not(:disabled) {
    background-color: #483c40;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const AgeDisplay = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  background-color: #f5f5f5;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 8px 0;
`;

const CheckboxWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const StyledCheckbox = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  background-color: ${props => props.checked ? '#c45824' : '#f5f5f5'};
  border: 2px solid ${props => props.checked ? '#c45824' : '#ddd'};
  border-radius: 6px;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    border-color: #c45824;
    transform: scale(1.05);
    box-shadow: 0 2px 8px rgba(196, 88, 36, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const CheckboxIcon = styled.span`
  color: white;
  font-size: 16px;
  font-weight: bold;
  opacity: ${props => props.checked ? 1 : 0};
  transform: ${props => props.checked ? 'scale(1) rotate(0deg)' : 'scale(0.3) rotate(45deg)'};
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

const CheckboxLabel = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  user-select: none;
  cursor: pointer;
`;

const FormButton = styled.button`
  background-color: #c45824;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  transition: background-color 0.3s ease;
  width: 90%;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  
  &:hover {
    background-color: #483c40;
  }
`;

const AttendeesContainer = styled.div`
  margin-top: 25px;
  border-top: 1px solid #eee;
  padding-top: 20px;
`;

const AttendeesTitle = styled.h4`
  font-family: 'Montserrat', sans-serif;
  color: #5c4b51;
  margin-top: 0;
  margin-bottom: 15px;
`;

const AttendeesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #eee;
  border-radius: 4px;
`;

const AttendeeItem = styled.li`
  padding: 10px 15px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:last-child {
    border-bottom: none;
  }
`;

const AttendeeInfo = styled.span`
  font-family: 'Montserrat', sans-serif;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #ff6b6b;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0 5px;
  
  &:hover {
    color: #ff3333;
  }
`;

const SendWhatsAppButton = styled.button`
  background-color: #25D366;
  color: white;
  border: none;
  padding: 12px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  transition: background-color 0.3s ease;
  width: 100%;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  &:hover {
    background-color: #128C7E;
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const QRCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
`;

const QRCodeImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: contain;
  margin-bottom: 10px;
  border: 1px solid #eee;
  padding: 10px;
  border-radius: 10px;
`;

const QRCodeText = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: #5c4b51;
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
  margin: 0;
  line-height: 1.5;
`;

export default WeddingReception;