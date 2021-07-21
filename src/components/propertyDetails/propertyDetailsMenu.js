import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid'
const useStyles = makeStyles((theme) => ({
    root: {
      //flexGrow: 1,
      display:'flex!important',
      flexDirection:'column',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          margin: theme.spacing(1),
        },
    },
    button:{
        //display:'flex',
        //flexDirection:'column',
        //alignItems: 'center'
    },
    label: {
        // Aligns the content of the button vertically.
        display:'flex',
        flexDirection: 'column',
        backgroundColor:'grey',
        //justifyContent:'center'
    }
  }));



const PropertyDetailsMenu=()=>{
    const classes = useStyles();

    return(
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button 
        //classess={{root:classes.root, label:classes.label}}
        className={classes.label}
        >
            <div styles={{flex:1}}><img src={require("../../assets/buttons/photos.png")} /> </div>
            <Typography styles={{flex:1}}>Photos</Typography></Button>
        <Button>
        <Grid container direction="row" alignItems="center">
     <img src={require("../../assets/buttons/video.png")} /> Video
</Grid>
            </Button>
        <Button>360 VR</Button>
        <Button>Design Plan</Button>
      </ButtonGroup>
    )



}

export default PropertyDetailsMenu