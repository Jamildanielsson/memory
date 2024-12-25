import React from 'react';
import styled from 'styled-components';

type Props = {
  gameWon: boolean;
  onPlayAgain: () => void;
};

const Overlay = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1000;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const GameOverlay: React.FC<Props> = ({ gameWon, onPlayAgain }) => (
  <Overlay visible={gameWon}>
    <h1>Du vann spelet!</h1>
    <Button onClick={onPlayAgain}>Spela igen</Button>
  </Overlay>
);

export default GameOverlay;
