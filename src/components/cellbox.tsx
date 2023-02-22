import { useBoard } from "../global/board";

interface Props {
  cell: boolean;
  position: [number, number];
}

const CellBox = ({ cell, position }: Props) => {
  const { changeCellState } = useBoard();
  const [i, j] = position;
  
  return (
    <div 
      className={`${cell ? "active " : ""}cell`}
      onClick={() => changeCellState(i, j)}
    ></div>
  )
}

export default CellBox