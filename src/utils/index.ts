import facepaint from 'facepaint';

export { default as styled } from '@emotion/styled';
export { css } from '@emotion/core';

export const breakpoints = [576, 992, 1200, 1300];
export const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));
