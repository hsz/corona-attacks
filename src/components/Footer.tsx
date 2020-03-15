import React from 'react';
import { styled } from 'utils';

const Container = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  font-family: sans-serif;
  background-color: #8b9bb4;
  padding: 5px 10px;
  opacity: 0.3;

  &:hover {
    opacity: 1;
  }

  a {
    color: #ffffff;
  }
`;

const Footer = () => (
  <Container>
    <a href="https://twitter.com/hszanowski">@hszanowski</a>
    <a href="https://twitter.com/wesgabes">@wesgabes</a>
    <a href="https://github.com/hsz/corona-attacks">github</a>
    <a href="/">restart</a>
  </Container>
);

export default Footer;
