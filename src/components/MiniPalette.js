import React from "react"
import {withStyles} from "@material-ui/styles"
import DeleteIcon from "@material-ui/icons/Delete"

const styles = {
	root: {
		backgroundColor: 'white',
		borderRadius: '10px',
		height: "auto",
		padding: "10px",
		display: "flex",
		flexDirection: "column",
		position: "relative",
		"&:hover $button": {
			opacity: 1
		}
	},
	colors: {
		height: "200px",
		width: "100%",
		display: "flex",
		flexWrap: "wrap",
		alignContent: "flex-start",
		"@media(max-width: 814px)": {
			height: "150px"
		}
	},
	color: {
		width: "25%",
		height: "100%",
		maxHeight: "20%"
	},
	description: {
		background: "white",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		"& p": {
			fontWeight: 700,
			color: "black",
			"@media(max-width: 806px)": {
				fontSize: "1.4rem"
			}
		}
	},
	button: {
		right: "10px",
		top: "10px",
		zIndex: 100,
		position: "absolute",
		background: "red",
		padding: "1.3rem",
		transition: ".1s transform ease, .4s opacity ease",
		opacity: 0,
		"&:hover": {
			transform: "scale(1.1)"
		},
		"& > .MuiSvgIcon-root": {
			fill: "white",
			width: "1.5rem",
			height: "1.5rem",
		}
	},

}

function MiniPalette(props){
	const {classes} = props
	console.log(props)
	return (
		<div className={classes.root}>
			<div className={classes.colors}>
				{
					props.palette.colors.map((color, id) => (
						<div key={id} style={{backgroundColor: color.color}} className={classes.color} />
					))
				}
			</div>
			<div className={classes.description}>
				<p>{props.palette.paletteName}</p>
				<span>{props.palette.emoji}</span>
			</div>
			<div className={classes.button} onClick={(e) => props.handleDeleteColor(e, props.palette)}>
				<DeleteIcon />
			</div>
		</div>
	)
}

export default withStyles(styles)(MiniPalette)