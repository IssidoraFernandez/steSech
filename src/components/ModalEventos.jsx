import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ show }) => (show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  animation: ${fadeIn} 0.3s ease-out;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

const ModalHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.h2`
  margin: 0;
  color: #333;
  font-size: 1.5em;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  padding: 0;
  line-height: 1;
  
  &:hover {
    color: #333;
  }
`;

const ModalBody = styled.div`
  padding: 20px;
`;

const EventoItem = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const EventoTitulo = styled.h3`
  margin: 0 0 8px 0;
  color: #0078ff;
`;

const EventoDescripcion = styled.p`
  margin: 0 0 8px 0;
  color: #555;
  font-size: 0.95em;
  line-height: 1.5;
`;

const EventoInfo = styled.div`
  display: flex;
  gap: 15px;
  font-size: 0.85em;
  color: #777;
`;

const SinEventos = styled.p`
  text-align: center;
  color: #888;
  font-style: italic;
  padding: 20px 0;
`;

// Datos de ejemplo - en una aplicación real, estos vendrían de una API
const eventosPorFacultad = {
  fcei: [
    {
      id: 1,
      titulo: 'Charla de Innovación Tecnológica',
      descripcion: 'Conoce las últimas tendencias en tecnología e innovación con expertos del sector.',
      fecha: '15 Jun 2023',
      hora: '16:00 - 18:00',
      lugar: 'Auditorio FCEI'
    }
  ],
  facso: [
    {
      id: 2,
      titulo: 'Foro de Ciencias Sociales',
      descripcion: 'Discusión abierta sobre los desafíos actuales en ciencias sociales.',
      fecha: '16 Jun 2023',
      hora: '14:00 - 16:00',
      lugar: 'Sala de Conferencias FACSO'
    }
  ],
  artes: [],
  ciencias: []
};

export default function ModalEventos({ facultad, onClose }) {
  if (!facultad) return null;
  
  const eventos = eventosPorFacultad[facultad.id] || [];
  
  return (
    <ModalOverlay show={!!facultad} onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Eventos - {facultad.nombre}</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>
          {eventos.length > 0 ? (
            eventos.map(evento => (
              <EventoItem key={evento.id}>
                <EventoTitulo>{evento.titulo}</EventoTitulo>
                <EventoDescripcion>{evento.descripcion}</EventoDescripcion>
                <EventoInfo>
                  <span>📅 {evento.fecha}</span>
                  <span>🕒 {evento.hora}</span>
                  <span>📍 {evento.lugar}</span>
                </EventoInfo>
              </EventoItem>
            ))
          ) : (
            <SinEventos>No hay eventos programados por el momento.</SinEventos>
          )}
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
}
