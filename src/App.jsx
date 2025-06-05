import React, { useState } from 'react';
import styled from 'styled-components';
import HamburgerMenu from './components/HamburgerMenu';
import MapaCampus from './components/MapaCampus';
import ModalEventos from './components/ModalEventos';

const AppContainer = styled.div`
  font-family: 'Segoe UI', Arial, sans-serif;
  background: #f6f6f6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 0 70px 0;
`;

const SectionTitle = styled.h1`
  color: #1a4480;
  font-size: 2.5em;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Section = styled.section`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 8px 36px rgba(0,0,0,0.10);
  padding: 40px 44px 36px 44px;
  margin-bottom: 40px;
  min-width: 340px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const InfoList = styled.ul`
  margin: 24px 0 0 0;
  padding: 0 0 0 24px;
  font-size: 1.08em;
`;

const FormRow = styled.div`
  margin-bottom: 22px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: 6px;
  border: 1.5px solid #b5c9e7;
  font-size: 1.08em;
  background: #f8fafd;
  margin-top: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 12px;
  border-radius: 6px;
  border: 1.5px solid #b5c9e7;
  font-size: 1.08em;
  background: #f8fafd;
  margin-top: 4px;
`;

const Button = styled.button`
  background: linear-gradient(90deg, #1a4480 70%, #0078ff 100%);
  color: #fff;
  border: none;
  padding: 12px 30px;
  border-radius: 7px;
  font-weight: bold;
  font-size: 1.13em;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(26,68,128,0.08);
  transition: background 0.2s, transform 0.15s;
  &:hover {
    background: linear-gradient(90deg, #0078ff 70%, #1a4480 100%);
    transform: translateY(-2px) scale(1.03);
  }
`;

const Footer = styled.footer`
  width: 100%;
  background: #1a4480;
  color: #fff;
  text-align: center;
  padding: 26px 0 14px 0;
  font-size: 1.09em;
  letter-spacing: 0.01em;
  margin-top: 40px;
`;

const NavOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 900;
  background: rgba(0,0,0,0.03);
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

function AcercaDe() {
  return (
    <Section>
      <SectionTitle>
        <span role="img" aria-label="info">ℹ️</span> Acerca de
      </SectionTitle>
      <p style={{ fontSize: '1.17em', color: '#222', marginBottom: 18 }}>
        <b>Mapa Interactivo Campus JGM</b> es un proyecto estudiantil de la Universidad de Chile que busca centralizar y visibilizar los eventos de todas las facultades del campus Juan Gómez Millas.
      </p>
      <InfoList>
        <li>Centraliza información de actividades, charlas, talleres y encuentros.</li>
        <li>Promueve la colaboración y participación estudiantil.</li>
        <li>Proyecto desarrollado por estudiantes de la Facultad de Comunicación e Imagen.</li>
        <li>Demo funcional para presentación institucional.</li>
        <li>Diseño responsivo, accesible y moderno.</li>
      </InfoList>
      <div style={{ marginTop: 28, color: '#444', fontSize: '1.09em', background: '#f8fafd', borderRadius: 8, padding: '18px 22px' }}>
        <b>¿Por qué este proyecto?</b><br />
        Porque la vida universitaria es mucho más rica cuando compartimos y participamos juntos.
      </div>
    </Section>
  );
}


function Contacto() {
  const [enviado, setEnviado] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 2500);
  }
  return (
    <Section>
      <SectionTitle><span role="img" aria-label="mail">📬</span> Contacto</SectionTitle>
      <p style={{ fontSize: '1.13em', color: '#2a2a2a', marginBottom: 20 }}>¿Tienes preguntas, sugerencias o quieres sumarte al proyecto? ¡Escríbenos!</p>
      <form style={{ maxWidth: 440 }} onSubmit={handleSubmit}>
        <FormRow>
          <label>Nombre:<Input type="text" name="nombre" required /></label>
        </FormRow>
        <FormRow>
          <label>Email:<Input type="email" name="email" required /></label>
        </FormRow>
        <FormRow>
          <label>Mensaje:<TextArea name="mensaje" required rows={4} /></label>
        </FormRow>
        <Button type="submit">Enviar mensaje</Button>
        {enviado && <div style={{marginTop:16, color:'#1a4480', fontWeight:'bold'}}>¡Mensaje enviado! Pronto nos pondremos en contacto.</div>}
      </form>
    </Section>
  );
}

function EnviarEvento() {
  const [enviado, setEnviado] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 2500);
  }
  return (
    <Section>
      <SectionTitle><span role="img" aria-label="megafono">📢</span> Enviar Evento</SectionTitle>
      <p style={{ fontSize: '1.13em', color: '#2a2a2a', marginBottom: 20 }}>¿Quieres difundir un evento de tu facultad? Completa este formulario:</p>
      <form style={{ maxWidth: 500 }} onSubmit={handleSubmit}>
        <FormRow>
          <label>Facultad:<Input type="text" name="facultad" required /></label>
        </FormRow>
        <FormRow>
          <label>Título del evento:<Input type="text" name="titulo" required /></label>
        </FormRow>
        <FormRow>
          <label>Descripción:<TextArea name="descripcion" required rows={3} /></label>
        </FormRow>
        <FormRow>
          <label>Fecha:<Input type="date" name="fecha" required /></label>
        </FormRow>
        <FormRow>
          <label>Hora:<Input type="time" name="hora" required /></label>
        </FormRow>
        <FormRow>
          <label>Lugar:<Input type="text" name="lugar" required /></label>
        </FormRow>
        <Button type="submit">Enviar evento</Button>
        {enviado && <div style={{marginTop:16, color:'#0078ff', fontWeight:'bold'}}>¡Gracias! Tu evento será revisado y publicado pronto.</div>}
      </form>
    </Section>
  );
}


const NAV_ITEMS = [
  { id: 'mapa', label: 'Mapa de Eventos' },
  { id: 'enviar', label: 'Enviar Evento' },
  { id: 'contacto', label: 'Contacto' },
  { id: 'acercade', label: 'Acerca de' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedFacultad, setSelectedFacultad] = useState(null);
  const [section, setSection] = useState('mapa');

  function handleNav(id) {
    setSection(id);
    setMenuOpen(false);
    setSelectedFacultad(null);
  }

  return (
    <AppContainer>
      <HamburgerMenu open={menuOpen} setOpen={setMenuOpen} navItems={NAV_ITEMS} onNav={handleNav} />
      <NavOverlay show={menuOpen} onClick={() => setMenuOpen(false)} />
      <MainContent>
        {section === 'mapa' && <MapaCampus onFacultadClick={setSelectedFacultad} />}
        {section === 'enviar' && <EnviarEvento />}
        {section === 'contacto' && <Contacto />}
        {section === 'acercade' && <AcercaDe />}
      </MainContent>
      <ModalEventos facultad={selectedFacultad} onClose={() => setSelectedFacultad(null)} />
    </AppContainer>
  );
}
