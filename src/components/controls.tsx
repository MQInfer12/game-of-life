import { useBoard } from "../global/board";
import "../styles/controls.css";

interface Props {
  cells: number;
  setCells: React.Dispatch<React.SetStateAction<number>>
}

const Controls = ({ cells, setCells }: Props) => {
  const { alive, isPlaying, start, pause, clear } = useBoard();

  const handlePlayPause = () => {
    if(!isPlaying) {
      start(150)
    } else {
      pause();
    }
  }

  return (
    <div className="controls-container">
      <div className="input-container">
        <span className="input-placeholder">Células:</span>
        <input 
          className="input-text"
          type="number" 
          value={cells} 
          onChange={(e) => setCells(Number(e.target.value))} 
        />
      </div>
      <div className="buttons-container">
        <button className="button button-blue" disabled={alive === 0} onClick={handlePlayPause}>
          {
            !isPlaying ?
            <><i className="fa-solid fa-play"></i>Play</> :
            <><i className="fa-solid fa-pause"></i>Pause</>
          }
        </button>
        <button className="button button-sky" onClick={clear}>
          <i className="fa-solid fa-broom"></i>
          Clear
        </button>
      </div>
    </div>
  )
}

export default Controls