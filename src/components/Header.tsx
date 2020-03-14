import config from 'config';
import React, { FunctionComponent } from 'react';
import { styled } from 'utils';

interface Props {
  counter: number;
}

const Container = styled.div`
  width: ${config.size * config.cols}px;
  height: ${config.size * 2}px;
  background-color: white;
`;

const Header: FunctionComponent<Props> = ({ counter }) => <Container>{counter}</Container>;

export default Header;
