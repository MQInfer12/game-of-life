import { useBoard } from "../global/board";
import CellBox from "./cellbox"

interface Props {
  cells: number;
}

const CellMapper = ({ cells }: Props) => {
  const { board } = useBoard();

  return (
    <>
    {board.map((row, i) => (
      row.map((cell, j) => (
        <CellBox 
          key={i * cells + j}
          cell={cell} 
          position={[i, j]}
        />
      ))
    ))}
    </>
  )
}

export default CellMapper