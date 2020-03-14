import { Board } from 'components';
import config from 'config';
import { range, shuffle } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import 'ress';
import { GameState, Item } from 'types';
import { styled } from 'utils';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const items: Item[] = ((max = config.rows * config.cols) => {
  const [virusA, virusB, cure] = shuffle(range(max));
  return range(max).map(i => ({
    position: i,
    isVirus: i === virusA || i === virusB,
    isCure: i === cure,
    hint: 0,
  }));
})();

const getNeighbours = (item: Item | undefined): Item[] => {
  if (!item) {
    return [];
  }
  const { cols, rows } = config;
  const { position } = item;

  const positions = [
    position - 1,
    position + 1,
    position - 1 - cols,
    position - cols,
    position - cols + 1,
    position + cols - 1,
    position + cols,
    position + cols + 1,
  ];
  return positions
    .filter(
      v =>
        !(
          v < 0 ||
          v >= cols * rows ||
          (position % cols === 0 && v % cols === cols - 1) ||
          (position % cols === 9 && v % cols === 0)
        ),
    )
    .map(i => items[i]);
};

const revealMap = () =>
  items.forEach(item => {
    item.isRevealed = true;
  });

const spreadDisease = (counter: number) => {
  if (counter > config.spreadAfter) {
    const potentialVirus = shuffle(getNeighbours(shuffle(items).find(it => it.isVirus))).find(
      it => !it.isRevealed && !it.isCure && !it.isVirus,
    );
    if (potentialVirus) {
      potentialVirus.isVirus = true;
    }
  }

  items.forEach(it => {
    it.hint = getNeighbours(it).reduce((acc, v) => acc + +v.isVirus, 0);
  });
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const [gameState, setGameState] = useState<GameState>('ongoing');

  useEffect(() => {
    if (gameState !== 'ongoing') {
      revealMap();
    }
  }, [gameState]);

  const processClick = useCallback(
    (item: Item, callback: () => void) => {
      if (item.isRevealed) {
        return;
      }

      callback();

      setCounter(counter + 1);
      item.isRevealed = true;
      spreadDisease(counter);
    },
    [counter],
  );

  const handleCellClick = useCallback(
    (item: Item) => {
      processClick(item, () => {
        if (item.isVirus) {
          setGameState('lost');
        }
        if (item.isCure) {
          setGameState('won');
        }
      });
    },
    [processClick],
  );

  const handleCellContextClick = useCallback(
    (item: Item) => {
      processClick(item, () => {
        if (item.isVirus) {
          item.isUnderQuarantine = true;
        } else {
          setGameState('lost-quarantine');
        }
      });
    },
    [processClick],
  );

  return (
    <Container>
      <Board
        gameState={gameState}
        counter={counter}
        items={items}
        onCellClick={handleCellClick}
        onContextClick={handleCellContextClick}
      />
    </Container>
  );
};

export default App;
