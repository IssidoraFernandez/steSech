import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const slideOut = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? '0' : '-300px')};
  width: 300px;
  height: 100vh;
  background: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: right 0.3s ease-in-out;
  padding: 20px;
  overflow-y: auto;
`;

const Overlay = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const MenuButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1001;
  background: #0078ff;
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
  
  &:hover {
    background: #0056b3;
    transform: scale(1.05);
  }
`;

const MenuHeader = styled.h2`
  color: #333;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 2px solid #f0f0f0;
`;

const MenuItem = styled.button`
  display: block;
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  background: none;
  border: none;
  text-align: left;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;
  
  &:hover {
    background: #f5f5f5;
    color: #0078ff;
  }
`;

export default function HamburgerMenu({ open, setOpen, navItems = [], onNav }) {
  return (
    <>
      <MenuButton onClick={() => setOpen(!open)}>
        {open ? '✕' : '☰'}
      </MenuButton>
      <Overlay open={open} onClick={() => setOpen(false)} />
      <MenuContainer open={open}>
        <MenuHeader>Menú</MenuHeader>
        {navItems.map(item => (
          <MenuItem key={item.id} onClick={() => { onNav(item.id); setOpen(false); }}>
            {item.label}
          </MenuItem>
        ))}
      </MenuContainer>
    </>
  );
}

