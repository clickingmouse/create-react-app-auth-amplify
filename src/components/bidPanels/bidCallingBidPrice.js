import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import  Typography  from '@material-ui/core/Typography'
import NumberFormat from "react-number-format";
import TextField from '@material-ui/core/TextField';
import { BlockRounded } from '@material-ui/icons';
import Store from '../../store/store'
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
        fontSize:20,
        lineHeight:1.2,
        fontWeight:'bold',

    },
    hkd:{
        fontSize:11,
        color:'#A88663',
        lineHeight:1.2,
        fontWeight:'bold'

    }
})
)
function BidCallingBidPrice({lastBid}){
  //const classes = useStyles();
  //get current bid
  const { state, dispatch } = React.useContext(Store);
  const bids = state.bids
  console.log(bids)
  bids.sort((a,b)=>{return b.bid - a.bid})
  console.log(bids)
    const classes = useStyles()
return(
    <>
    <Grid container direction='column' className={classes.panel}>
        
        <Grid item>
            <Typography className={classes.label}>Current Bid Price</Typography>
        </Grid>
        <Grid item container direction="row" alignItems='flex-end' spacing={1}>
        <Grid item>
        <NumberFormat
  customInput={TextField}
  displayType={'text'}
  className={classes.price}
  value={state.currentBid}
  // you can define additional custom props that are all forwarded to the customInput e. g.
  variant="standard"
  thousandSeparator
/></Grid>
<Grid item><Typography className={classes.hkd}>HKD</Typography></Grid>
        </Grid>


    </Grid>
    </>
)


}


export default BidCallingBidPrice
//<Typography className={classes.price}>{lastBid}</Typography>
