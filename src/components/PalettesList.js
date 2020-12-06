import React, { Component } from 'react'
import {Link} from "react-router-dom"
import MiniPalette from "./MiniPalette"

class PalettesList extends Component {
	render() {
		return (
			<div className="PaletteListing">
				<div className="container">
					<div className="PaletteListing__header">
						<h3>Color Picker</h3>
						<Link to="/">Create palette</Link>
					</div>
					<div className="PaletteListing__listing">
						{
							this.props.palettes.map((palette, id) => (
								<Link to={`/palette/${palette.id}`} key={id} className="PaletteListing_item"><MiniPalette palette={palette} /></Link>
							))
						}	
					</div>
				</div>
			</div>
		)
	}
}

export default PalettesList