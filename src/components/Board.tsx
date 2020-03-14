import { Cell } from 'components';
import config from 'config';
import React, { FunctionComponent } from 'react';
import { CellType, Item } from 'types';
import { styled } from 'utils';

interface Props {
  onCellClick: (item: Item) => void;
  onContextClick: (item: Item) => void;
  items: Item[];
}

const Container = styled.div`
  width: ${config.cols * config.size}px;
  height: ${config.rows * config.size}px;
  font-size: 0;
`;

const Board: FunctionComponent<Props> = ({ items, onCellClick, onContextClick }) => {
  const getType = (item: Item): CellType => {
    if (!item.isRevealed) {
      return 'untouched';
    }
    if (item.isVirus) {
      return 'virus';
    }
    if (item.isCure) {
      return 'cure';
    }
    return 'empty';
  };

  return (
    <Container>
      {items.map(item => (
        <Cell
          key={item.position}
          item={item}
          onClick={onCellClick}
          onContextClick={onContextClick}
          type={getType(item)}
        />
      ))}
    </Container>
  );
};

export default Board;
