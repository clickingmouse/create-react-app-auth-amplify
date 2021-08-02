import React from 'react'

import Grid from '@material-ui/core/Grid'
import  Typography  from '@material-ui/core/Typography'
import { alpha, makeStyles } from '@material-ui/core/styles';
//import { classes } from 'istanbul-lib-coverage';
//const useStyles = makeStyles({
const useStyles = makeStyles({
    panel:{
        backgroundColor:'black',
    },
    label: {
        color:'white',
        fontSize:8,
       
    },
    price:{
        color:'white',
        fontSize:25,

    },
    hkd:{
        color:'white',
        fontSize:16,
        color:'#A88663'

    }
})
const BidCallingBidPrice=()=>{
  //const classes = useStyles();
    const classes = useStyles()
return(
    <>
    <Grid container direction='column' ClassName={classes.panel}>
        
        <Grid item>
            <Typography ClassName={classes.label}>Current Bid Price</Typography>
        </Grid>
        <Grid item container direction="row" >
            <Typography ClassName={classes.price}>6850000</Typography><Typography ClassName={classes.hkd}>HKD</Typography>
        </Grid>


    </Grid>
    </>
)


}


export default BidCallingBidPrice
