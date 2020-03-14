export interface Config {
  size: number;
  rows: number;
  cols: number;
}

export interface Item {
  position: number;
  isVirus: boolean;
  isCure: boolean;
  isRevealed?: boolean;
}

export type CellType = 'empty' | 'untouched' | 'virus' | 'cure';

declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}
