import { Board, Timer } from 'components';
import config from 'config';
import { range, shuffle } from 'lodash';
import React, { useCallback, useState } from 'react';
import 'ress';
import { Item } from 'types';
import { styled } from 'utils';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const items = ((max = config.rows * config.cols) => {
  const [virusA, virusB, cure] = shuffle(range(max));
  return range(max).map(i => ({
    position: i,
    isVirus: i === virusA || i === virusB,
    isCure: i === cure,
  }));
})();

const App = () => {
  console.log('RENDER');
  const [counter, setCounter] = useState(0);

  const handleCellClick = useCallback(
    (item: Item) => {
      if (!item.isRevealed) {
        setCounter(counter + 1);
        item.isRevealed = true;
      }
    },
    [counter],
  );

  return (
    <Container>
      <Board items={items} onCellClick={handleCellClick} />
      <Timer counter={counter} />
    </Container>
  );
};

export default App;
