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

interface FrameVariables {
  newBoard: boolean[][];
  alive: number;
  deaths: number;
  births: number;
}

const handleFrameChange = (actualBoard: boolean[][]): FrameVariables => {
  let alive = 0;
  let deaths = 0;
  let births = 0;
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
      if(cell && (cont === 2 || cont === 3)) {
        alive++;
        return true;
      }
      if(!cell && (cont === 3)) {
        births++;
        alive++;
        return true;
      }
      if(cell) {
        deaths++;
      }
      return false;
    })
  ));
  return {
    newBoard,
    alive,
    deaths,
    births
  };
}

const handleClear = (board: boolean[][]): boolean[][] => {
  return board.map(row => {
    row.fill(false);
    return row;
  });
}

type State = {
  board: boolean[][];
  generation: number;
  alive: number;
  deaths: number;
  births: number;
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
  generation: 0,
  alive: 0,
  births: 0,
  deaths: 0,
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
    set(state => {
      const newBoard: boolean[][] = handleChangeCellState(state.board, row, column);
      const newAlive: number = newBoard[row][column] ? state.alive + 1 : state.alive - 1;
      return {
        ...state,
        board: newBoard,
        alive: newAlive
      };
    });
  },
  start: (milliseconds) => {
    interval = setInterval(() => {
      set(state => {
      if(state.alive === 0) {
        clearInterval(interval);
        return {
          ...state,
          isPlaying: false
        };
      } 
      const newVariables: FrameVariables = handleFrameChange(state.board);
      return {
        ...state,
        board: newVariables.newBoard,
        generation: state.generation + 1,
        deaths: newVariables.deaths,
        alive: newVariables.alive,
        births: newVariables.births
      }})
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
      board: handleClear(state.board),
      generation: 0,
      deaths: 0,
      alive: 0,
      births: 0
    }));
  }
}))