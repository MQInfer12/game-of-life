import { useBoard } from "../global/board";

interface Props {
  cells: number;
  setCells: React.Dispatch<React.SetStateAction<number>>
}

const Controls = ({ cells, setCells }: Props) => {
  const { isPlaying, start, pause, clear } = useBoard();

  const handlePlayPause = () => {
    if(!isPlaying) {
      start(100)
    } else {
      pause();
    }
  }

  return (
    <div>
      <div>
        <input 
          type="number" 
          value={cells} 
          onChange={(e) => setCells(Number(e.target.value))} 
        />
      </div>
      <div>
        <button onClick={handlePlayPause}>{!isPlaying ? "Play" : "Pause"}</button>
        <button onClick={clear}>Clear</button>
      </div>
    </div>
  )
}

export default Controls