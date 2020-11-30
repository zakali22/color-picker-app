import React, { Component } from 'react'
import ColorBox from "./ColorBox"

import "../styles/Palette.css"

class Palette extends Component {
	render() {
		console.log(this.props)
		const colorBoxes = this.props.seedsPalette.colors.map((palette, id) => (
			<ColorBox {...palette} key={id} />
		))
		return (
			<div className="Palette">
				{/* Navbar that contains a slider, dropdown*/}
				<div className="Palette__colors">
					{colorBoxes}
				</div>
			</div>
		)
	}
}

export default Palette
