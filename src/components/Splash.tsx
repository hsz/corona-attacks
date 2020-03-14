import React, { useCallback, useState } from 'react';
import { styled } from 'utils';

const images = ['splash.png', 'rules.png'];

const Container = styled.div`
  background-color: #181425;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  z-index: 2;

  &:hover img {
    opacity: 0.75;
  }
`;

const Splash = () => {
  const [step, setStep] = useState(0);
  const handleClick = useCallback(() => {
    setStep(step + 1);
  }, [step]);
  return images[step] ? (
    <Container>
      <img src={`/images/${images[step]}`} onClick={handleClick} alt="" />
    </Container>
  ) : null;
};

export default Splash;
