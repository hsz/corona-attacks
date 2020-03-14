import config from 'config';
import React, { FunctionComponent, useCallback } from 'react';
import { GameState } from 'types';
import { styled } from 'utils';

interface Props {
  counter: number;
  stress: boolean;
  gameState: GameState;
}

const Container = styled.div`
  width: ${config.size * config.cols}px;
  height: ${config.size * 2}px;
  background-color: white;
  display: flex;
`;

const getMainImage = (gameState: GameState) => {
  switch (gameState) {
    case 'lost':
    case 'lost-quarantine':
      return 'fail';
    case 'won':
      return 'success';
    default:
      return 'inprogress';
  }
};

const Header: FunctionComponent<Props> = ({ gameState, stress }) => {
  const stressed = stress || gameState === 'lost' || gameState === 'lost-quarantine';

  return (
    <Container>
      <img src={`/images/nurse-${stressed ? 'stress' : 'normal'}.png`} alt="" />
      <img src={`/images/${getMainImage(gameState)}.png`} alt="" />
    </Container>
  );
};

export default Header;
