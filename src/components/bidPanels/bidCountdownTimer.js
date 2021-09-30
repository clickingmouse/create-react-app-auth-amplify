import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import  Typography  from '@material-ui/core/Typography'
//import { makeStyles } from '@material-ui/core/styles';
//import { alpha, makeStyles } from '@material-ui/core/styles';
//import { classes } from 'istanbul-lib-coverage';
//const useStyles = makeStyles({
//const useStyles = makeStyles({
const useStyles = makeStyles((theme) => ({
    panel:{
        //flex:1,
        backgroundColor:"black",
        height:49,
        //flex:1
    },
    label: {
        backgroundColor:'black',
        color:'white',
        fontSize:8,
        padding:0,
        lineHeight:1.2
       
    },
    timer:{
        color:'white',
        fontSize:20,
        padding:0,
        lineHeight:1.2,
        fontWeight:'bold'


    },
    timerLabel:{
        fontSize:8,
        color:'#A88663',
        padding:0,
        lineHeight:1.2

    }
})
)
function BidCountDownTimer(){
  //const classes = useStyles();
    const classes = useStyles()
return(
    <div className={classes.panel}>
    <Grid container direction='column' className={classes.panel} alignItems="flex-end">
        
        <Grid item>
            <Typography className={classes.label}>Bid closes in</Typography>
        </Grid>
        <Grid item  container direction='row' spacing={1} justifyContent='center'>

        <Grid item><Typography className={classes.timer}>23</Typography></Grid>
        <Grid item><Typography className={classes.timer}>:</Typography></Grid>
        <Grid item><Typography className={classes.timer}>55 </Typography></Grid>
        <Grid item><Typography className={classes.timer}>:</Typography></Grid>
        <Grid item><Typography className={classes.timer}>30</Typography></Grid>

           
            </Grid>
            <Grid item container direction='row' spacing={3} justifyContent='center'>
            <Grid item><Typography className={classes.timerLabel}>Minutes</Typography></Grid>
            <Grid item><Typography className={classes.timerLabel}>Hours</Typography></Grid>
            <Grid item><Typography className={classes.timerLabel}>Seconds</Typography></Grid>
        </Grid>


    </Grid>
    </div>
)


}


export default BidCountDownTimer
//<Typography className={classes.timer}>23 : 55 :30</Typography>
