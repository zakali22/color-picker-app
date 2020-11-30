import React, { Component } from 'react'
import {CopyToClipboard} from "react-copy-to-clipboard"

import "../styles/ColorBox.css"

class ColorBox extends Component {
   constructor(props){
      super(props);
      this.state = {
         overlayShow: false
      }
   }

   showOverlay = () => {
      this.setState({
         overlayShow: true
      }, () => {
         this.timer = window.setTimeout(() => {
            this.setState({
               overlayShow: false
            })
         }, 2000)
      })
   }

   componentWillUnmount(){
      this.setState({
         overlayShow: false
      })

      window.clearTimeout(this.timer)
   }

   render() {
      const {color: background, name} = this.props;
      return (
         <CopyToClipboard text={background} onCopy={() => this.showOverlay()}>
            <div className="Colorbox" style={{background}}>
               <span className="Colorbox__name">{name}</span>
               <div className="Colorbox__copy-content">
                  <div className={`box-overlay ${this.state.overlayShow ? 'box-overlay--show' : 'box-overlay--hide'}`} style={{background}}></div>
                  <button className="Colorbox__btn Colorbox__copy">Copy</button>
               </div>
               <button className="Colorbox__btn Colorbox__more">MORE</button>
               <div className={`Colorbox__msg ${this.state.overlayShow && 'Colorbox__msg--show'}`} style={{background}}>
                  <p className="Colorbox__btn">Copied</p>
                  <span>{background}</span>
               </div>
            </div>
         </CopyToClipboard>
      )
   }
}

export default ColorBox