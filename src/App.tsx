import { useState } from "react";
import Cards from "./components/cards";
import Controls from "./components/controls"
import Table from "./components/table"
import "./styles/App.css"

function App() {
  const [cells, setCells] = useState(50);

  return (
    <div className="App">
      <div className="header">
        <h1 className='h1-title'>The game of life</h1>
        <h2 className='h2-title'>John Horton Conway</h2>
      </div>
      <Cards />
      <Table 
        cells={cells} 
      />
      <Controls 
        cells={cells}
        setCells={setCells}
      />
    </div>
  )
}

export default App
