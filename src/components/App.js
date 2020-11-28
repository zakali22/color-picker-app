import React from "react"
import seedsPalette from "../seedPalettes"
import Palette from "./Palette"

function App() {
  return (
    <div className="App">
      <Palette seedsPalette={seedsPalette[3]} />
    </div>
  );
}

export default App;
