import React from "react"
import seedsPalette from "../seedPalettes"
import Palette from "./Palette"
import PaletteList from "./PalettesList"

import {generatePalette} from "../generatePalette"
import {Switch, Route} from "react-router-dom"

function App() {
  const findPalette = (id) => {
    return seedsPalette.find((palette) => (
      palette.id === id
    ))
  }
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <PaletteList palettes={seedsPalette} />} />
        <Route exact path="/palette/:id" render={(routeProps) => {
          console.log(routeProps)
          return <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />
        }}/>
      </Switch>
    </div>
  );
}

export default App;
