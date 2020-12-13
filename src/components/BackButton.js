import React from "react"
import styles from "../styles/BackButton.js"
import {withStyles} from "@material-ui/styles"
import {withRouter} from "react-router-dom"

class BackButton extends React.Component {
    render(){
        const {classes, type} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.backBtn} onClick={() => this.props.history.goBack()}>Go back</div>
            </div>
        )
    }
}

const compWithStyle = withStyles(styles)(BackButton)

export default withRouter(compWithStyle)