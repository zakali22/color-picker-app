import React, { Component } from 'react'
import {Link} from "react-router-dom"
import MiniPalette from "./MiniPalette"
import {withStyles} from "@material-ui/styles"
import styles from "../styles/PaletteListing.js"
import {
	CSSTransition,
	TransitionGroup,
} from 'react-transition-group';

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
					{
						this.props.palettes.length > 0 ? 
							<TransitionGroup className={classes.listing}>
							{
								this.props.palettes.map((palette, id) => (
									<CSSTransition key={palette.id} classNames='item' timeout={{exit: 500}}>
										<Link to={`/palette/${palette.id}`} key={id} className={classes.listingItem}>
												<MiniPalette handleDeleteColor={this.props.handleDeleteColor} palette={palette} />
										</Link>
									</CSSTransition>
									
								))
							}
							</TransitionGroup>
						: <h2 style={{color: 'white'}}>There are no Color Palettes, please create palettes</h2>
					}	
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(PalettesList)