import React, { Component } from 'react'
import {CopyToClipboard} from "react-copy-to-clipboard"
import {Link, withRouter} from "react-router-dom"
import chroma from "chroma-js"

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
      const {format, name, type} = this.props;
      const isDark = chroma(this.props[format]).luminance() <= 0.5

      return (
         <CopyToClipboard text={this.props[format]} onCopy={() => this.showOverlay()}>
            <div className={`Colorbox ${type === 'single' && 'Colorbox--single'}`} style={{background: this.props[format]}}>
               <span className={`Colorbox__name ${isDark && 'light-text'}`}>{name}</span>
               <div className="Colorbox__copy-content">
                  <div className={`box-overlay ${this.state.overlayShow ? 'box-overlay--show' : 'box-overlay--hide'}`} style={{background: this.props[format]}}></div>
                  <button className="Colorbox__btn Colorbox__copy">Copy</button>
               </div>
               {type !== 'single' && <Link to={`${this.props.location.pathname}/${this.props.id}`} className={`Colorbox__btn Colorbox__more ${isDark && 'light-text'}`}>MORE</Link>}
               <div className={`Colorbox__msg ${this.state.overlayShow && 'Colorbox__msg--show'}`} style={{background: this.props[format]}}>
                  <p className="Colorbox__btn">Copied</p>
                  <span>{this.props[format]}</span>
               </div>
            </div>
         </CopyToClipboard>
      )
   }
}

export default withRouter(ColorBox)