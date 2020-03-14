export interface Config {
  size: number;
  rows: number;
  cols: number;
  spreadAfter: number;
}

export interface Item {
  position: number;
  isVirus: boolean;
  isCure: boolean;
  isRevealed?: boolean;
  hint: number;
}

export type CellType = 'empty' | 'untouched' | 'virus' | 'cure';

declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}
