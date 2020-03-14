import React, { FunctionComponent } from 'react';

interface Props {
  counter: number;
}

const Timer: FunctionComponent<Props> = ({ counter }) => <div>{counter}</div>;

export default Timer;
