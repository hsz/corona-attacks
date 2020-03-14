export interface Config {
  size: number;
  rows: number;
  cols: number;
  spreadAfter: number;
}

export interface Item {
  position: number;
  hint: number;
  isVirus: boolean;
  isCure: boolean;
  isRevealed?: boolean;
  isUnderQuarantine?: boolean;
}

export type GameState = 'ongoing' | 'won' | 'lost' | 'lost-quarantine';

declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}
