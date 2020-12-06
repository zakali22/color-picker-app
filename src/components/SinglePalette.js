import React, { Component } from 'react'
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from "@material-ui/icons/Close"
import {withRouter} from "react-router-dom"

import ColorBox from "./ColorBox"

class SinglePalette extends Component {
    state = {
      format: 'hex',
      snackbarOpen: false
    }

    
    handleChange = (value) => {
      this.setState({
        levels: value
      })
    }

    handleSelectChange = (e) => {
      this.setState({
        format: e.target.value,
        snackbarOpen: true
      })
    }

    handleSnackbarClose = (e, reason) => {
      if(reason === 'clickaway') return;
      this.setState({
        snackbarOpen: false
      })
    }

    render() {
        const {palettes: {colors}} = this.props;
        console.log(colors)
        const {format} = this.state;
        const colorBoxes = Object.keys(colors).map((color, id) => (
          <ColorBox {...colors[color]} key={id} format={format} type="single" />
        ))
        return (
          <div className="Palette Palette--single">
            <div className="Palette__nav">
              <h3 className="Palette__logo">Color Picker</h3>
              <div className="Palette__format">
                <Select onChange={this.handleSelectChange} value={format}>
                  <MenuItem value="hex">HEX - #ffffff</MenuItem>
                  <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                  <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
                </Select>
              </div>
              <Snackbar
                anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                open={this.state.snackbarOpen}
                autoHideDuration={2000}
                message={<span id="message-id">Format Changed to {format.toUpperCase()}</span>}
                ContentProps={{
                  'aria-describedby': 'message-id'
                }}
                action={[
                  <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={this.handleSnackbarClose}
                  >
                    <CloseIcon />
                  </IconButton>
                ]}
              />
            </div>
            <div className="Palette__colors">
              {colorBoxes}
              <div className="Colorbox Colorbox--single Colorbox--nav" onClick={() => this.props.history.goBack()}>
                <div className="Colorbox__btn">Go back</div>
              </div>
            </div>
          </div>
        )
    }
}

export default withRouter(SinglePalette)