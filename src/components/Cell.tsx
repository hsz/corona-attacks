import React, { FunctionComponent } from 'react';
import { CellType, Item } from 'types';
import { styled } from 'utils';
import config from 'config';

interface Props {
  item: Item;
  type: CellType;
  onClick: (item: Item) => void;
}

const icons: {
  [key in CellType]: string;
} = {
  empty: '',
  untouched: '❓',
  virus: '🦠',
  cure: '💉',
};

const Container = styled.div`
  width: ${config.size}px;
  height: ${config.size}px;
  display: inline-block;
  font-size: 16px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

const Cell: FunctionComponent<Props> = ({ item, type, onClick }) => (
  <Container onClick={() => onClick(item)}>{icons[type] || item.hint}</Container>
);

export default Cell;
