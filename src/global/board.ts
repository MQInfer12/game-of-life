import { create } from "zustand";

const handleChangeCellState = (board: boolean[][], i: number, j: number): boolean[][] => {
  return board.map((row, indexRow) => (
    row.map((cell, indexColumn) => {
      if(indexRow === i && indexColumn === j) {
        return !cell;
      }
      return cell;
    })
  ));
}

const handleFrameChange = (actualBoard: boolean[][]): boolean[][] => {
  const newBoard = actualBoard.map((row, i) => (
    row.map((cell, j) => {
      let cont = 0;
      if(actualBoard.at((i - 1))?.at(j - 1)) cont++;
      if(actualBoard.at(i)?.at(j - 1)) cont++;
      if(actualBoard.at((i + 1) % actualBoard.length)?.at(j - 1)) cont++;
      if(actualBoard.at(i - 1)?.at(j)) cont++;
      if(actualBoard.at((i + 1) % actualBoard.length)?.at(j)) cont++;
      if(actualBoard.at(i - 1)?.at((j + 1) % actualBoard.length)) cont++;
      if(actualBoard.at(i)?.at((j + 1) % actualBoard.length)) cont++;
      if(actualBoard.at((i + 1) % actualBoard.length)?.at((j + 1) % actualBoard.length)) cont++;
      if((cell && (cont === 2 || cont === 3)) || (!cell && (cont === 3))) {
        return true;
      }
      return false;
    })
  ));
  return newBoard;
}

const handleClear = (board: boolean[][]): boolean[][] => {
  return board.map(row => {
    row.fill(false);
    return row;
  });
}

type State = {
  board: boolean[][];
  isPlaying: boolean;
}

type Action = {
  changeSize: (size: number) => void;
  changeCellState: (row: number, column: number) => void;
  start: (milliseconds: number) => void;
  pause: () => void;
  clear: () => void;
}

let interval: ReturnType<typeof setInterval>;

export const useBoard = create<State & Action>((set) => ({
  board: [],
  isPlaying: false,
  changeSize: (size) => {
    const row: boolean[] = new Array(size).fill(false);
    const initial: boolean[][] = new Array(size).fill(row);
    set(state => ({ 
      ...state,
      board: initial
    }));
  },
  changeCellState: (row, column) => {
    set(state => ({
      ...state,
      board: handleChangeCellState(state.board, row, column)
    }));
  },
  start: (milliseconds) => {
    interval = setInterval(() => {
      set(state => ({
        board: handleFrameChange(state.board)
      }));
    }, milliseconds);
    set(state => ({
      ...state,
      isPlaying: true
    }));
  },
  pause: () => {
    clearInterval(interval);
    set(state => ({
      ...state,
      isPlaying: false
    }));
  },
  clear: () => {
    set(state => ({
      ...state,
      board: handleClear(state.board)
    }));
  }
}))