import React, { Component } from 'react'

import "../styles/ColorBox.css"

class ColorBox extends Component {
   render() {
      return (
         <div className="Colorbox" style={{background: this.props.color}}>
            <span className="Colorbox__name">{this.props.name}</span>
            <button className="Colorbox__btn Colorbox__copy">Copy</button>
            <button className="Colorbox__btn Colorbox__more">MORE</button>
         </div>
      )
   }
}

export default ColorBox