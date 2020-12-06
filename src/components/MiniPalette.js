import React from "react"
import {withStyles} from "@material-ui/styles"

const styles = {
	root: {
		backgroundColor: 'white',
		borderRadius: '10px',
		height: "100%",
		padding: "10px",
		display: "flex",
    flexDirection: "column"
	},
	colors: {
		height: "100%",
		width: "100%",
		display: "flex",
		flexWrap: "wrap"
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
			color: "black"
		}
	}
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
		</div>
	)
}

export default withStyles(styles)(MiniPalette)