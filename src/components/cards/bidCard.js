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

//337-140 = 197
const useStyles = makeStyles({
  root: {
    width :337,
    //maxWidth: 337,
    height:87,
    display:'flex'

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
  price: {fontSize:18},
  hkd:{fontSize:11},
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
width:337,
    },
    wrapper:{}

});

function BidCard({p}) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
    <Card className={classes.root}>
      
        <CardMedia
          className={classes.media}
          image= {p.s3Image}
          title=" placeholder"
        />
        <CardContent className={classes.content}>
        <Grid container direction="column">
          <Grid item>
            <Grid container direction="row">
            <Typography className={classes.price}>{p.price}</Typography>
          
            <Typography  className={classes.hkd}>HKD</Typography> 
            <Typography  className={classes.valuation}> (valuation)</Typography>
          
          </Grid>
          </Grid>

          
          <Grid item>
          <Typography className={classes.district}>
            {p.district}
          </Typography>
          </Grid>


                <Grid item container direction="row" alignItems="baseline" spacing={2} justifyContent="flex-end">
                <img src={BedIcon} alt=''/>
                <Typography className={classes.info}> {p.bedrooms} </Typography>
                <img src = {BathIcon} alt=''/>
                <Typography className={classes.info}> {p.bathrooms} </Typography>
                <img src = {AreaIcon} alt=''/>
                <Typography className={classes.info}> {p.saleableArea}sqft</Typography>
                </Grid>

          </Grid>
          
        </CardContent>

       

    </Card>
    <div className={classes.bid}>PLACEHOLDER</div>

    </div>
  );
}


export default BidCard