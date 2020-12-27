import React from "react"
import clsx from 'clsx';
import {  withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import DeleteIcon from "@material-ui/icons/Delete"
import {Link} from "react-router-dom"
import seedsPalette from "../seedPalettes"


const drawerWidth = 440;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#fff',
    color: 'black'
  },
  appBarTitle: {
    marginRight: 'auto'
  },
  appBarForm: {
    display: 'flex'
  },
  appBarFormInput: {
    fontSize: '2rem',
    marginRight: '2.5rem'
  },
  appBarFormButton: {
    padding: "0 10px",
    fontSize: "1rem"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  drawerBody: {
    display: 'flex',
    flexDirection: 'column',
    padding: "1rem 3rem",
    marginTop: "30%"
  },
  drawerButtons: {
    alignSelf: "stretch",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    margin: "1.5rem 0 2.5rem 0",
    "& > *": {
        flex: "1 0 auto"
    }
  },
  drawerButton: {
    fontSize: "1.3rem",
    color: "white"
  },
  drawerButtonLg: {
    fontSize: "1.8rem",
    marginTop: "2rem",
    color: "white",
    width: "100%"
  },
  drawerPicker: {
    width: "100% !important"
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0
  },
  colorBoxesWrapper: {
    display: "flex",
    height: "calc(100vh - 64px)",
    flexWrap: "wrap",
    alignContent: "flex-start"
  },
  colorBox: {
      flex: "1 1 20%",
      height: "25%",
      minHeight: "200px",
      width: "20%",
      maxWidth: "20%",
      color: "white",
      fontSize: "1.6rem",
      position: "relative",
      "& .MuiSvgIcon-root": {
        position: "absolute",
        right: "1rem",
        bottom: "1rem",
        zIndex: 1,
        width: "2rem",
        height: "2rem",
        transition: "transform .3s ease-in-out",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.4)"
        }
      },
      "@media(max-width: 992px)": {
        flex: "1 1 25%",
        width: "25%",
        maxWidth: "25%",
      },
      "@media(max-width: 767px)": {
        flex: "1 1 33.33%",
        width: "33.33%",
        maxWidth: "33.33%",
      },
      "@media(max-width: 540px)": {
        flex: "1 1 50%",
        width: "50%",
        maxWidth: "50%",
      }
  },
  colorBoxName: {
    position: "absolute",
    left: "1rem",
    bottom: "1rem",
    color: 'black',
    zIndex: "1",
    textTransform: "uppercase",
    fontSize: "1.3rem",
    fontWeight: "600",
    margin: 0
  },
  formControl: {
    marginTop: "20px"
  },
  formInput: {
    width: "100%",
    "& > .MuiInput-root": {
      fontSize: "1.6rem !important"
    },
    "& .MuiInputBase-input": {
      background: "#cccccc"
    }
  },
  emptyMessage: {
    padding: "0 10px", 
    width: "100%",
    "& h2": {
      textAlign: "center"
    }
  }
});

class PaletteDrawer extends React.Component {
    state = {
        open: false,
        background: '#952F8A',
        colors: [],
        colorName: '',
        paletteName: ''
    }

    componentDidMount(){
      ValidatorForm.addValidationRule('isUniqueColor', (value) => {
        this.state.colors.every((color) => {
          if(color.colorName !== value) return true
        })
      });
    }

    handleDrawerOpen = () => {
        this.setState({
            open: true
        })
    };
    
    handleDrawerClose = () => {
        this.setState({
            open: false
        })
    };

    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };

    handleAddColor = () => {
      if(this.state.colors.length < 20){
        const newColor = {
          color: this.state.background, 
          name: this.state.colorName
        }
        this.setState((state) => ({
            colors: state.colors.concat(newColor),
            colorName: ''
        }))
      }
    }

    handleInputChange = (event, name) => {
      console.log(name)

      this.setState({
        [name]: event.target.value
      })
    }

    handleDeleteColor = (colorInput) => {
      this.setState((state) => ({
        colors: state.colors.filter(color => color.color !== colorInput.color)
      }))
    }

    handleClearColors = () => {
      this.setState({
        colors: [],
        colorName: ''
      })
    }

    handleAddRandomColor = () => {
      const {palettes} = this.props;
      let randomPalette, randomColor;

      if(palettes.length){
        randomPalette = palettes[this.randomInteger(0, (palettes.length - 1))]
      } else {
        randomPalette = seedsPalette[this.randomInteger(0, (palettes.length - 1))]
      }

      randomColor = randomPalette.colors[this.randomInteger(0, randomPalette.colors.length - 1)]
      if(this.state.colors.length === 0){
        this.setState((state) => ({
          colors: state.colors.concat({
            name: randomColor.name,
            color: randomColor.color
          })
        }))
      } else if(this.state.colors.length < 20){
        let colorExists = this.state.colors.find(color => color.color === randomColor.color)

        if(!colorExists){
          this.setState((state) => ({
            colors: state.colors.concat({
              name: randomColor.name,
              color: randomColor.color
            })
          }))
        }
      } else {
        return 
      }
    }

    randomInteger = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    handleAddPaletteName = () => {
      const newPalette = {
        paletteName: this.state.paletteName,
        colors: this.state.colors,
        emoji: "🎨",
        id: this.state.paletteName.split(' ').join('-').toLowerCase()
      }

      let savedSeedsPalette = this.props.palettes
      let paletteObj = savedSeedsPalette.find(palette => {
        return palette['paletteName'] === this.state.paletteName
      })

      if(!paletteObj){
        savedSeedsPalette.push(newPalette)
        this.props.savePalette(savedSeedsPalette)

        this.props.history.push('/')
      }
    }

    render(){
        const {open} = this.state;
        const {classes, theme} = this.props;
        return (
            <div className={classes.root}>
                {/* <CssBaseline /> */}
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={this.handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link to='/' className={classes.appBarTitle}><Typography variant="h4"  noWrap>Create your Palette</Typography></Link>
                    <ValidatorForm
                            ref="form"
                            onSubmit={this.handleAddColor}
                            onError={errors => console.log(errors)}
                            className={classes.appBarForm}
                        >
                          <TextValidator
                              label="Palette Name"
                              onChange={e => this.handleInputChange(e, 'paletteName')}
                              name="paletteName"
                              value={this.state.paletteName}
                              className={classes.appBarFormInput}
                              validators={['required']}
                              errorMessages={['this field is required']} 
                          />

                          <Button className={classes.appBarFormButton} variant="contained" color="secondary" onClick={this.handleAddPaletteName}>Add Palette</Button>
                        </ValidatorForm>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon /> 
                        </IconButton>
                    </div>

                    <Divider />
                    <div className={classes.drawerBody}>
                        <Typography variant="h3" noWrap>Design your Palette</Typography>
                        <div className={classes.drawerButtons}> 
                            <Button className={classes.drawerButton} variant="contained" color="secondary" onClick={this.handleClearColors}>Clear Palette</Button>
                            <Button className={classes.drawerButton} variant="contained" color="primary" onClick={this.handleAddRandomColor}>Random Color</Button>
                        </div>
                        <ChromePicker className={classes.drawerPicker} onChangeComplete={ this.handleChangeComplete } color={ this.state.background } />

                        <ValidatorForm
                            ref="form"
                            onSubmit={this.handleAddColor}
                            onError={errors => console.log(errors)}
                            className={classes.formControl}
                        >
                          <TextValidator
                              label="Color Name"
                              onChange={e => this.handleInputChange(e, 'colorName')}
                              name="colorName"
                              value={this.state.colorName}
                              className={classes.formInput}
                              validators={['required', 'isUniqueColor']}
                              errorMessages={['this field is required', 'Color must be unique']}
                          />

                          <Button className={classes.drawerButtonLg} variant="contained" style={{background: this.state.background }} onClick={this.handleAddColor}>Add Color</Button>
                        </ValidatorForm>
                        
                    </div>
                </Drawer>
                <main
                    className={clsx(classes.content, {
                    [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />
                    <div className={classes.colorBoxesWrapper}>
                        {
                          this.state.colors.length ? (
                            this.state.colors.map(color => (
                                <div style={{background: color.color}} className={classes.colorBox}>
                                    <p className={classes.colorBoxName}>{color.name}</p>
                                    <DeleteIcon onClick={() => this.handleDeleteColor(color)} />
                                </div>
                            ))
                          ) : 
                          <div className={classes.emptyMessage}>
                            <h2>Add colors using the picker in the menu to create a palette</h2>
                          </div>
                        }
                    </div>
                </main>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(PaletteDrawer)