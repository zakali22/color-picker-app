import React from "react"
import seedsPalette from "../seedPalettes"
import Palette from "./Palette"
import PaletteList from "./PalettesList"
import SinglePalette from "./SinglePalette"

import {generatePalette, generateSinglePalette} from "../generatePalette"
import {Switch, Route} from "react-router-dom"

function App() {
  const findPalette = (id) => {
    console.log(seedsPalette)
    const palette = seedsPalette.find((palette) => (
      palette.id === id
    ))

    console.log(palette)
    return palette
  }

  const findSinglePalette = (id, colorId) => {
    let newPaletteColor = {};
    const palette = seedsPalette.find((palette) => (
      palette.id === id
    ))
    
    newPaletteColor = {
      ...palette
    };
    
    newPaletteColor.colors = newPaletteColor.colors.find((color) => {
      return color.name.toLowerCase() === colorId 
    })

    console.log(newPaletteColor)

    return newPaletteColor
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <PaletteList palettes={seedsPalette} />} />
        <Route exact path="/palette/:id" render={(routeProps) => {
          console.log(routeProps.match.params.id)
          return <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />
        }}/>
        <Route exact path="/palette/:id/:colorId" render={(routeProps) => {
          console.log(routeProps)
          return <SinglePalette palettes={generateSinglePalette(findSinglePalette(routeProps.match.params.id, routeProps.match.params.colorId))} />
        }}/>
      </Switch>
    </div>
  );
}

export default App;
