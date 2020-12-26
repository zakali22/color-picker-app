import React from "react"
import seedsPalette from "../seedPalettes"
import Palette from "./Palette"
import PaletteList from "./PalettesList"
import SinglePalette from "./SinglePalette"
import PaletteDrawer from "./PaletteDrawer"

import {generatePalette, generateSinglePalette} from "../generatePalette"
import {Switch, Route} from "react-router-dom"
import {CSSTransition, TransitionGroup} from "react-transition-group"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      seedsPalette: JSON.parse(window.localStorage.getItem("seeds_palette")) || seedsPalette
    }
  }

  findPalette = (id) => {
    const palette = this.state.seedsPalette.find((palette) => (
      palette.id === id
    ))
    return palette
  }

  findSinglePalette = (id, colorId) => {
    let newPaletteColor = {};
    const palette = this.state.seedsPalette.find((palette) => (
      palette.id === id
    ))
    
    newPaletteColor = {
      ...palette
    };
    
    newPaletteColor.colors = newPaletteColor.colors.find((color) => {
      return color.name.toLowerCase() === colorId 
    })


    return newPaletteColor
  }

  savePalette = (palette) => {
    this.setState({
      seedsPalette: palette
    }, () => {
      window.localStorage.setItem("seeds_palette", JSON.stringify(palette))
    })
  }

  handleDeleteColor = (palette) => {
    const palettes = this.state.seedsPalette.filter(paletteObj => (
      paletteObj.id !== palette.id
    ))

    this.setState({
      seedsPalette: palettes
    }, () => {
      window.localStorage.setItem("seeds_palette", JSON.stringify(palettes))
    })
  }

  render(){
    return (
      <Route render={({location}) => (
        <TransitionGroup className="App">
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Switch location={location}>
              <Route exact path="/" render={() => <PaletteList palettes={this.state.seedsPalette} handleDeleteColor={(palette) => this.handleDeleteColor(palette)} />} />
              <Route exact path="/palette/new" render={(routeProps) => <PaletteDrawer palettes={this.state.seedsPalette} {...routeProps} savePalette={(savePalette) => this.savePalette(savePalette)} />}/>
              <Route exact path="/palette/:id" render={(routeProps) => {
                console.log(routeProps.match.params.id)
                return <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
              }}/>
              <Route exact path="/palette/:id/:colorId" render={(routeProps) => {
                console.log(routeProps)
                return <SinglePalette palettes={generateSinglePalette(this.findSinglePalette(routeProps.match.params.id, routeProps.match.params.colorId))} />
              }}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    );
  }
}

export default App;
