import config from 'config';
import React, { FunctionComponent } from 'react';
import { styled } from 'utils';

interface Props {
  counter: number;
  stress: boolean;
}

const Container = styled.div`
  width: ${config.size * config.cols}px;
  height: ${config.size * 2}px;
  background-color: white;
  display: flex;
`;

const Header: FunctionComponent<Props> = ({ stress }) => (
  <Container>
    <img src={`/images/nurse-${stress ? 'stress' : 'normal'}.png`} alt="" />
  </Container>
);

export default Header;
