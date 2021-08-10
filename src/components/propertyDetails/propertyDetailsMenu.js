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
        //display: 'flex',
        //flexDirection: 'column',
        //alignItems: 'center',
        //'& > *': {
        //  margin: theme.spacing(1),
        //},
        backgroundColor:"transparent",
        width:297,
        height:62
    },
    button:{
        //display:'flex',
        //flexDirection:'column',
        //alignItems: 'center'
        backgroundColor:"transparent"
    },
    label: {
        // Aligns the content of the button vertically.
        display:'flex',
        flexDirection: 'column',
        color:'#3c3c3c',
        //justifyContent:'center'
        fontSize:10,
        textTransform: "none",
    }
  }));



const PropertyDetailsMenu=()=>{
    const classes = useStyles();

    return(
        <ButtonGroup variant="contained" fullWidth color="primary" aria-label="contained primary button group" className={classes.buttonGroup}>
        <Button className={classes.button}>
            <Grid container direction="row" justifyContent="center">
                <img src={require("../../assets/images/buttons/photos.png")} /> 
            <Typography styles={{flex:1}} className={classes.label}>Photos</Typography>
            </Grid>
        </Button>

        <Button className={classes.button}>
        <Grid container direction="row" justifyContent="center">
     <img src={require("../../assets/images/buttons/video.png")} /> 
     <Typography styles={{flex:1}} className={classes.label}>Video</Typography>
</Grid>
            </Button>


        <Button className={classes.button}>
        <Grid container direction="row" justifyContent="center">
        <img src={require("../../assets/images/buttons/360vr.png")} />
        <Typography styles={{flex:1}} className={classes.label}>360 VR</Typography>
        </Grid>
        </Button>

        <Button className={classes.button}>
        <Grid container direction="row" justifyContent="center">
        <img src={require("../../assets/images/buttons/designplan.png")} />
        
                
        

        <Typography styles={{flex:1}} className={classes.label}>Design Plan</Typography>
            </Grid></Button>
      </ButtonGroup>
    )



}

export default PropertyDetailsMenu