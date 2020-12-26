import React from "react"
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import styles from "../styles/Dialog.js";
import {withStyles} from "@material-ui/styles"

class PaletteDialog extends React.Component {

    render(){
        const {classes, openDialog, handleDialogClick, handleDialogClose} = this.props
        return (
            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle className={classes.dialogTitle}>Delete palette?</DialogTitle>
                <List>
                    <ListItem button onClick={() => handleDialogClick('delete')}>
                        <ListItemAvatar>
                            <Avatar className={`${classes.dialogAvatar} ${classes.dialogAvatarDone}`}>
                                <DoneIcon color="primary"/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Delete" className={classes.dialogText} />
                    </ListItem>
                    <ListItem button onClick={() => handleDialogClick('cancel')}>
                        <ListItemAvatar>
                            <Avatar className={`${classes.dialogAvatar} ${classes.dialogAvatarClose}`}>
                                <CloseIcon color="secondary"/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Cancel" className={classes.dialogText} />
                    </ListItem>
                </List>
            </Dialog>
        )
    }
}


export default withStyles(styles)(PaletteDialog)