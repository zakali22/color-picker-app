import React, { Component } from 'react'
import ColorBox from "./ColorBox"
import Slider from "rc-slider"

import 'rc-slider/assets/index.css';
import "../styles/Palette.css"

class Palette extends Component {
	state = {
		levels: 100
	}

	handleChange = (value) => {
		this.setState({
			levels: value
		})
	}

	render() {
		console.log(this.props)
		const colorBoxes = this.props.palette.colors[this.state.levels].map((color, id) => (
			<ColorBox {...color} key={id} />
		))
		return (
			<div className="Palette">
				<div className="Palette__nav">
					<h3>Color Picker</h3>
					<div className="Palette__nav-slider">
						<p>Levels: {this.state.levels}</p>
						<Slider className="Palette__slider" step={100} min={100} max={900} onAfterChange={(v) => this.handleChange(v)} defaultValue={this.state.levels} />
					</div>
				</div>
				<div className="Palette__colors">
					{colorBoxes}
				</div>
			</div>
		)
	}
}

export default Palette
