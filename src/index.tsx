import { Global } from '@emotion/core';
import React from 'react';
import { hydrate, render } from 'react-dom';
import { css } from 'utils';
import App from './App';
import * as serviceWorker from './serviceWorker';

const globalStyles = css`
  body,
  html {
    height: 100%;
    background-color: #181425;
    user-select: none;
  }
`;

const rootElement = document.getElementById('root');
(rootElement?.hasChildNodes() ? hydrate : render)(
  <>
    <Global styles={globalStyles} />
    <App />
  </>,
  rootElement,
);

serviceWorker.unregister();
