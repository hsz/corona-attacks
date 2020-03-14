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

const Header: FunctionComponent<Props> = ({ gameState, stress }) => {
  const stressed = stress || gameState === 'lost' || gameState === 'lost-quarantine';

  const handleRestart = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <Container>
      <img src={`/images/nurse-${stressed ? 'stress' : 'normal'}.png`} alt="" />
      {gameState}
    </Container>
  );
};

export default Header;
