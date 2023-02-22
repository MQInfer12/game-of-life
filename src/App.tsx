import { useState } from "react";
import Controls from "./components/controls"
import Table from "./components/table"

function App() {
  const [cells, setCells] = useState(30);

  return (
    <div className="App">
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
