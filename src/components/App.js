import React from "react"
import seedsPalette from "../seedPalettes"
import Palette from "./Palette"
import {generatePalette} from "../generatePalette"

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(seedsPalette[3])} />
    </div>
  );
}

export default App;
