import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'


import BedIcon from '../../assets/svg/ionic-ios-bed.svg'
import BathIcon from '../../assets/svg/awesome-bath.svg'
import AreaIcon from '../../assets/svg/icon-area.svg'
import FinalBidPanel from './finalBidPanel'
import LostFinalBidPanel from './lostFinalBidPanel'

import YourBidPanel from './yourBidPanel';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      display:'flex',
        flexDirection:'row'
    },
    media: {
        height: 87,
        width:140
    },
    price:{
        fontSize:18,
        color:'#3C3C3C',
        
    },
    hkd:{
        fontSize:11,
        color:'#3C3C3C',
    },
    valuation:{
        fontSize:8,
        color:'#A88663',
    },
    district:{
        fontSize:10,
        color:'#3C3C3C',

    },
    info:{
        fontSize:8,
        color:'#A88663',
    },

  });



const WonCard = (props=data)=>{
    const classes = useStyles();
    return(
    <>
    <div>
    <Card className={classes.root}>
       
        <CardMedia
                  className={classes.media}
                  image={require("../../assets/placeholders/currentBid.png")}
                  title="Contemplative Reptile"
        >
            

        </CardMedia>
        <CardContent>
        <Grid container direction='column'>
        
        <Grid item container direction ='row'>
            <Grid item><Typography className={classes.price}>{data.valuationprice}</Typography></Grid>
            <Grid item><Typography className={classes.hkd}>HKD</Typography></Grid>
            <Grid item><Typography className={classes.valuation}>(Valuation)</Typography></Grid>
        
        </Grid>

        <Grid item><Typography></Typography></Grid>

        <Grid item container direction='row'>
            <Grid item><img src={BedIcon} alt=''/></Grid>
            <Grid item><Typography className={classes.info}>{data.bedrooms}</Typography></Grid>
            <Grid item><img src = {BathIcon} alt=''/></Grid>
            <Grid item><Typography className={classes.info}>2</Typography></Grid>
            <Grid item><img src = {AreaIcon} alt=''/></Grid>
            <Grid item><Typography className={classes.info}>2200 sqft</Typography></Grid>
        
        </Grid>
        </Grid>


        </CardContent>
        
    </Card>
    <div> <LostFinalBidPanel/></div>
    <div> <YourBidPanel/></div>
    </div>


    </>
    )
}

export default WonCard

const data={
    valuationprice:8600000,
    district:'Tseung Kwan O',
    bedrooms:'3',
    bathrooms:2,
    sqft:680
}