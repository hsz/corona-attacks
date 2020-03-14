import React, { FunctionComponent, useCallback } from 'react';
import { CellType, Item } from 'types';
import { styled } from 'utils';
import config from 'config';

interface Props {
  item: Item;
  type: CellType;
  onClick: (item: Item) => void;
  onContextClick: (item: Item) => void;
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

const Cell: FunctionComponent<Props> = ({ item, type, onClick, onContextClick }) => {
  const handleOnClick = useCallback(() => {
    onClick(item);
  }, [item, onClick]);
  const handleOnContextClick = useCallback(() => {
    onContextClick(item);
  }, [item, onContextClick]);

  return (
    <Container onClick={handleOnClick} onContextMenu={handleOnContextClick}>
      {icons[type] || item.hint}
    </Container>
  );
};

export default Cell;
