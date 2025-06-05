 import React from 'react';
import styled from 'styled-components';

const MapaContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  background: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 16px;
`;

const FACULTADES = [
  {
    id: 'artes', nombre: 'Facultad de Artes', color: '#a8c8f0', x: 820, y: 420, width: 120, height: 55,
  },
  {
    id: 'ciencias', nombre: 'Facultad de Ciencias', color: '#f8d49d', x: 500, y: 340, width: 180, height: 70,
  },
  {
    id: 'facso', nombre: 'Facultad de Ciencias Sociales', color: '#c3e6cb', x: 650, y: 160, width: 140, height: 50,
  },
  {
    id: 'fcei', nombre: 'Facultad de Comunicación e Imagen', color: '#f7b2ad', x: 570, y: 90, width: 120, height: 40,
  },
  {
    id: 'filosofia', nombre: 'Facultad de Filosofía y Humanidades', color: '#e2b7fa', x: 120, y: 180, width: 200, height: 65,
  },
  {
    id: 'bachillerato', nombre: 'Programa Académico de Bachillerato', color: '#ffe066', x: 120, y: 350, width: 160, height: 42,
  },
];

export default function MapaCampus({ onFacultadClick }) {
  return (
    <MapaContainer>
      <svg
        viewBox="0 0 1024 600"
        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 12 }}
      >
        {/* Fondo campus */}
        <rect x="0" y="0" width="1024" height="600" fill="#e8f5e8" />
        {/* Áreas verdes */}
        <ellipse cx="820" cy="120" rx="120" ry="50" fill="#c8f7c5" opacity="0.5" />
        <ellipse cx="320" cy="500" rx="90" ry="40" fill="#c8f7c5" opacity="0.5" />
        {/* Caminos */}
        <rect x="250" y="250" width="400" height="25" fill="#e0e0e0" rx="12" />
        <rect x="600" y="250" width="25" height="200" fill="#e0e0e0" rx="12" />
        {/* Facultades */}
        {FACULTADES.map(f => (
          <g key={f.id} style={{ cursor: 'pointer' }}>
            <rect
              x={f.x}
              y={f.y}
              width={f.width}
              height={f.height}
              fill={f.color}
              stroke="#1a4480"
              strokeWidth="3"
              rx="14"
              opacity={0.93}
              onClick={() => onFacultadClick(f)}
              onMouseOver={e => e.target.setAttribute('opacity', 1)}
              onMouseOut={e => e.target.setAttribute('opacity', 0.93)}
            />
            <text
              x={f.x + f.width / 2}
              y={f.y + f.height / 2 + 7}
              textAnchor="middle"
              fontFamily="Arial, sans-serif"
              fontSize="18"
              fill="#1a4480"
              fontWeight="bold"
              pointerEvents="none"
            >
              {f.nombre}
            </text>
          </g>
        ))}
        {/* Leyenda */}
        <rect x="30" y="30" width="22" height="22" fill="#a8c8f0" stroke="#1a4480" strokeWidth="2" rx="5" />
        <text x="60" y="46" fontSize="14" fill="#1a4480" fontFamily="Arial">Facultades</text>
        <ellipse cx="42" cy="72" rx="11" ry="8" fill="#c8f7c5" />
        <text x="60" y="77" fontSize="14" fill="#1a4480" fontFamily="Arial">Áreas verdes</text>
        <rect x="30" y="90" width="22" height="10" fill="#e0e0e0" rx="4" />
        <text x="60" y="99" fontSize="14" fill="#1a4480" fontFamily="Arial">Caminos</text>
      </svg>
    </MapaContainer>
  );
}

