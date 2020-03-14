import { Cell, Header, Splash } from 'components';
import config from 'config';
import React, { FunctionComponent, useCallback, useState } from 'react';
import { Item } from 'types';
import { styled } from 'utils';

interface Props {
  counter: number;
  onCellClick: (item: Item) => void;
  onContextClick: (item: Item) => void;
  items: Item[];
}

const Container = styled.div`
  position: relative;
  width: ${config.cols * config.size}px;
  height: ${config.rows * config.size}px;
  font-size: 0;
`;

const Board: FunctionComponent<Props> = ({ counter, items, onCellClick, onContextClick }) => {
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
      <Header counter={counter} stress={stress} />
      {items.map(item => (
        <Cell
          key={item.position}
          item={item}
          onClick={onCellClick}
          onContextClick={onContextClick}
        />
      ))}
    </Container>
  );
};

export default Board;
