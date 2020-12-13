import React, { Component } from 'react'
import {CopyToClipboard} from "react-copy-to-clipboard"
import {Link, withRouter} from "react-router-dom"
import {withStyles} from "@material-ui/styles"
import chroma from "chroma-js"
import styles from "../styles/ColorBox.js"

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
      const {format, name, type, classes} = this.props;
      const isDark = chroma(this.props[format]).luminance() <= 0.5

      return (
         <CopyToClipboard text={this.props[format]} onCopy={() => this.showOverlay()}>
            <div className={`${classes.root} ${classes.boxColor}`}>
               <span className={classes.colorName}>{name}</span>
               <div className={classes.copyContent}>
                  <div className={`${classes.boxOverlay} ${this.state.overlayShow ? classes.showBoxOverlay : classes.hideBoxOverlay} ${classes.boxColor}`}></div>
                  <button className={`${classes.boxBtn} ${classes.boxBtnCopy}`}>Copy</button>
               </div>
               {type !== 'single' && <Link to={`${this.props.location.pathname}/${this.props.id}`} className={`${classes.boxBtn} ${classes.boxBtnMore} ${classes.textColor}`}>MORE</Link>}
               <div className={`${classes.messageBox} ${this.state.overlayShow && classes.showMessageBox} ${classes.boxColor}`}>
                  <p className={`${classes.boxBtn} ${classes.boxBtnCopy}`}>Copied</p>
                  <span className={classes.textColor}>{this.props[format]}</span>
               </div>
            </div>
         </CopyToClipboard>
      )
   }
}

const compWithStyles = withStyles(styles)(ColorBox)

export default withRouter(compWithStyles)