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
    },
    label: {
        backgroundColor:'black',
        color:'white',
        fontSize:8,
        lineHeight:1.2
       
    },
    price:{
        color:'white',
        fontSize:25,
        lineHeight:1.2

    },
    hkd:{
        fontSize:16,
        color:'#A88663',
        lineHeight:1.2

    }
})
)
function BidCallingBidPrice(){
  //const classes = useStyles();
    const classes = useStyles()
return(
    <>
    <Grid container direction='column' className={classes.panel}>
        
        <Grid item>
            <Typography className={classes.label}>Current Bid Price</Typography>
        </Grid>
        <Grid item container direction="row" >
            <Typography className={classes.price}>6850000</Typography><Typography className={classes.hkd}>HKD</Typography>
        </Grid>


    </Grid>
    </>
)


}


export default BidCallingBidPrice
