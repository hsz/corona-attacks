import config from 'config';
import React, { FunctionComponent, useCallback } from 'react';
import { Item } from 'types';
import { styled } from 'utils';

interface Props {
  item: Item;
  onClick: (item: Item) => void;
  onContextClick: (item: Item) => void;
}

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

const getIcon = ({ isRevealed, isVirus, isUnderQuarantine, isCure, hint }: Item) => {
  if (!isRevealed) {
    return 'untouched';
  }
  if (isUnderQuarantine) {
    return 'quarantine';
  }
  if (isVirus) {
    return 'virus';
  }
  if (isCure) {
    return 'cure';
  }

  return hint;
};

const Cell: FunctionComponent<Props> = ({ item, onClick, onContextClick }) => {
  const handleOnClick = useCallback(() => {
    onClick(item);
  }, [item, onClick]);
  const handleOnContextClick = useCallback(() => {
    onContextClick(item);
  }, [item, onContextClick]);

  return (
    <Container onClick={handleOnClick} onContextMenu={handleOnContextClick}>
      <img src={`/images/${getIcon(item)}.png`} alt="" />
    </Container>
  );
};

export default Cell;
