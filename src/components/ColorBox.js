import React, { Component } from 'react'

import "../styles/ColorBox.css"

class ColorBox extends Component {
   render() {
      return (
         <div className="Colorbox" style={{background: this.props.color}}>
            <span>{this.props.paletteName}</span>
            <span>MORE</span>
         </div>
      )
   }
}

export default ColorBox