import React, { Component } from 'react'
import ColorBox from "./ColorBox"
import Slider from "rc-slider"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from "@material-ui/icons/Close"

import 'rc-slider/assets/index.css';
import "../styles/Palette.css"

class Palette extends Component {
	state = {
		levels: 500,
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
		const {format} = this.state;
		const colorBoxes = this.props.palette.colors[this.state.levels].map((color, id) => (
			<ColorBox {...color} key={id} format={format} />
		))
		return (
			<div className="Palette">
				<div className="Palette__nav">
					<h3 className="Palette__logo">Color Picker</h3>
					<div className="Palette__nav-slider">
						<p>Levels: {this.state.levels}</p>
						<Slider className="Palette__slider" step={100} min={100} max={900} onAfterChange={(v) => this.handleChange(v)} defaultValue={this.state.levels} />
					</div>
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
				</div>
				<div className="Palette__footer">
					<p>Flat UI Dutch Colors {this.props.palette.emoji} </p>
				</div>
			</div>
		)
	}
}

export default Palette
