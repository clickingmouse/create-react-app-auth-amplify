import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { classExpression } from '@babel/types';
import KingBedIcon from '@material-ui/icons/KingBed';
import BathtubRoundedIcon from '@material-ui/icons/BathtubRounded';
import HeightRoundedIcon from '@material-ui/icons/HeightRounded';
import BedIcon from '../../assets/svg/ionic-ios-bed.svg'
import BathIcon from '../../assets/svg/awesome-bath.svg'
import AreaIcon from '../../assets/svg/icon-area.svg'


import NumberFormat from "react-number-format";
import TextField from '@material-ui/core/TextField';

import Store from '../../store/store'
// bid card shown in landing screen

//337-140 = 197
const useStyles = makeStyles({
  root: {
    //width :337,
    width:'90%',
    //maxWidth: 337,
    height:87,
    display:'flex',
    marginRight:10

  },
  media: {
    height: 87,
    width:140
  },
  content:{
    flexDirection:'column',
    width:197,
    //paaddingBottom:2
  },
  price: {fontSize:18, fontWeight:'bold'},
  hkd:{fontSize:11, fontWeight:'bold'},
  valuation:{fontSize:8},
  district:{fontSize:10},
  info:{
    //flexDirection:'row',
    fontSize: 10,
    fontFamily:'helvetica',
    color:'#A88663',
    fontWeight:400,
    },
    bid:{
backgroundColor:'black',
height:60,
//width:337,
width:'85%',
paddingLeft:'5%',
fontWeight:'bold',

    },
    bidhkd:{
      color:'#A88663',
      fontSize:11,
      fontWeight:'bold',

    },
    wrapper:{},
    txt:{fontSize:8, color:'#FFFFFF'},
    currency:{fontSize:20, color:'#FFFFFF', fontWeight:'bold'},
    //bidhkd:{color:'#A88663', fontSize:11},
    timer:{color:'#FFFFFF', fontSize:20},
    timeUnits:{ color:'#A88663', fontSize:8}


});

function BidCard({p}) {
  const classes = useStyles();
  const { state, dispatch } = React.useContext(Store);
  const bids = state.bids
  console.log(bids)
  bids.sort((a,b)=>{return b.bid - a.bid})
  console.log(bids)

  return (
    <div className={classes.wrapper}>
    <Card className={classes.root}>
      
        <CardMedia
          className={classes.media}
          image= {p.s3Image}
          title=" placeholder"
        />
        <CardContent className={classes.content}>
        <Grid container direction="column" spacing={1}>
          <Grid item>
            <Grid container direction="row" alignItems='flex-end' spacing={1}>
            <NumberFormat
  customInput={TextField}
  displayType={'text'}
  className={classes.price}
  value={p.price}
  // you can define additional custom props that are all forwarded to the customInput e. g.
  variant="standard"
  thousandSeparator
/>
            
          
            <Typography  className={classes.hkd}>HKD</Typography> 
            <Typography  className={classes.valuation}> (valuation)</Typography>
          
          </Grid>
          </Grid>

          
          <Grid item>
          <Typography className={classes.district}>
            {p.district}
          </Typography>
          </Grid>


                <Grid item container direction="row" alignItems="baseline" spacing={1} justifyContent="flex-end">
                  
                <Grid item><img src={BedIcon} alt=''/></Grid>
                <Grid item><Typography className={classes.info}> {p.bedrooms} </Typography></Grid>
                <Grid item><img src = {BathIcon} alt=''/></Grid>
                <Grid item><Typography className={classes.info}> {p.bathrooms} </Typography></Grid>
                <Grid item><img src = {AreaIcon} alt=''/></Grid>
                <Grid item><Typography className={classes.info}> {p.saleableArea}sqft</Typography></Grid>
                </Grid>

          </Grid>
          
        </CardContent>

       

    </Card>
    <div className={classes.bid}>
    
    <Grid container direction='row' xs={12}>
      <Grid container item  direction='column' xs={6} justifyContent='flex-end' >

      <Grid item><Typography className={classes.txt}>Current Bid price</Typography>
      </Grid>

      <Grid item container direction='row' alignItems='flex-end'>
      <NumberFormat
  customInput={TextField}
  displayType={'text'}
  className={classes.currency}
  value={state.currentBid}
  // you can define additional custom props that are all forwarded to the customInput e. g.
  variant="standard"
  thousandSeparator
/> <Typography  className={classes.bidhkd}>HKD</Typography> 
      </Grid>

      </Grid>

      <Grid container item  direction='column' xs={6} alignItems='center' justifyContent="">
      <Grid item><Typography className={classes.txt}>Auction closes in</Typography></Grid>
      <Grid item  container direction='row' spacing={1} justifyContent='center'>

<Grid item><Typography className={classes.timer}>23</Typography></Grid>
<Grid item><Typography className={classes.timer}>:</Typography></Grid>
<Grid item><Typography className={classes.timer}>55 </Typography></Grid>
<Grid item><Typography className={classes.timer}>:</Typography></Grid>
<Grid item><Typography className={classes.timer}>30</Typography></Grid>

   
    </Grid>
    <Grid item container direction='row' spacing={3} justifyContent='center'>
    <Grid item><Typography className={classes.timeUnits}>Minutes</Typography></Grid>
    <Grid item><Typography className={classes.timeUnits}>Hours</Typography></Grid>
    <Grid item><Typography className={classes.timeUnits}>Seconds</Typography></Grid>
</Grid>
      


      </Grid>




    </Grid>
    
    </div>

    </div>
  );
}


export default BidCard
//<Typography className={classes.price}>{p.price}</Typography>
//<Typography className={classes.currency}>{state.currentBid}</Typography>
{/* <Grid item><Typography className={classes.timer}>22 : 55 :30</Typography></Grid>
      <Grid item><Typography className={classes.timeUnits}>HR MN S</Typography></Grid> */}