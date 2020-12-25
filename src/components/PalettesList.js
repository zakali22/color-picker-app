import React, { Component } from 'react'
import {Link} from "react-router-dom"
import MiniPalette from "./MiniPalette"
import {withStyles} from "@material-ui/styles"
import styles from "../styles/PaletteListing.js"

class PalettesList extends Component {
	render() {
		const {classes} = this.props
		console.log(this.props.palettes)
		return (
			<div className={classes.root}>
				<div className={`${classes.container} container`}>
					<div className={classes.header}>
						<h3>Color Picker</h3>
						<Link to="/palette/new">Create palette</Link>
					</div>
					<div className={classes.listing}>
						{
							this.props.palettes.length > 0 ? 
								this.props.palettes.map((palette, id) => (
									<Link to={`/palette/${palette.id}`} key={id} className={classes.listingItem}><MiniPalette palette={palette} /></Link>
								))
							: null
						}	
					</div>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(PalettesList)