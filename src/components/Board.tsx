import { Cell, Footer, Header, Splash } from 'components';
import config from 'config';
import React, { FunctionComponent, useCallback, useState } from 'react';
import { GameState, Item } from 'types';
import { styled } from 'utils';

interface Props {
  counter: number;
  onCellClick: (item: Item) => void;
  onContextClick: (item: Item) => void;
  items: Item[];
  gameState: GameState;
}

const Container = styled.div`
  position: relative;
  width: ${config.cols * config.size}px;
  font-size: 0;
`;

const Board: FunctionComponent<Props> = ({
  counter,
  gameState,
  items,
  onCellClick,
  onContextClick,
}) => {
  const [stress, setStress] = useState(false);
  const handleMouseDown = useCallback(() => {
    setStress(true);
  }, []);
  const handleMouseUp = useCallback(() => {
    setStress(false);
  }, []);

  return (
    <Container onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      <Splash />
      <Header counter={counter} stress={stress} gameState={gameState} />
      {items.map(item => (
        <Cell
          key={item.position}
          gameState={gameState}
          item={item}
          onClick={onCellClick}
          onContextClick={onContextClick}
        />
      ))}
      <Footer />
    </Container>
  );
};

export default Board;
