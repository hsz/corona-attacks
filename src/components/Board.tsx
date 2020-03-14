import { Cell, Header, Splash } from 'components';
import config from 'config';
import React, { FunctionComponent } from 'react';
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

const Board: FunctionComponent<Props> = ({ counter, items, onCellClick, onContextClick }) => (
  <Container>
    <Splash />
    <Header counter={counter} />
    {items.map(item => (
      <Cell key={item.position} item={item} onClick={onCellClick} onContextClick={onContextClick} />
    ))}
  </Container>
);

export default Board;
