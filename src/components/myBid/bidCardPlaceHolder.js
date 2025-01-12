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


//337-140 = 197
//87+98=177
const useStyles = makeStyles({
  Wrapper:{
    height:177,
    width :337,
  },
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
  price: {fontSize:18, fontWeight:'bold'},
  hkd:{fontSize:11, fontWeight:'bold'},
  valuation:{fontSize:8, color:'#A88663'},
  district:{fontSize:10},
  info:{
    //flexDirection:'row',
    fontSize: 10,
    fontFamily:'helvetica',
    color:'#A88663',
    fontWeight:400,
    },

});
const BidCardPlaceHolder=(props)=> {
  const classes = useStyles();

  return (
    <div className={classes.Wrapper}>
    <Card className={classes.root}>
      
        <CardMedia
          className={classes.media}
          image= {require("../../assets/placeholders/駿景園.jpg")}
          title=" placeholder"
        />
        <CardContent className={classes.content}>
        <Grid container direction="column">
          <Grid item>
            <Grid container direction="row" alignItems='flex-end' >
              <Grid item>
            <NumberFormat
  customInput={TextField}
  displayType={'text'}
  className={classes.price}
  value='8600000'
  // you can define additional custom props that are all forwarded to the customInput e. g.
  variant="standard"
  thousandSeparator
/></Grid>
            
          
            <Grid item><Typography  className={classes.hkd}>HKD</Typography> </Grid>
            <Grid item><Typography  className={classes.valuation}> (valuation)</Typography></Grid>
          
          </Grid>
          </Grid>

          
          <Grid item>
          <Typography className={classes.district}>
            Tseung Kwan O
          </Typography>
          </Grid>


                <Grid item container direction="row" alignItems="baseline" spacing={2} justifyContent="flex-end">
                <Grid item><img src={BedIcon} alt=''/></Grid>
                <Typography className={classes.info}> 2 </Typography>
                <Grid item><img src = {BathIcon} alt=''/></Grid>
                <Typography className={classes.info}> 2 </Typography>
                <Grid item><img src = {AreaIcon} alt=''/></Grid>
                <Typography className={classes.info}> 680sqft</Typography>
                </Grid>

          </Grid>
         
        </CardContent>

        
    </Card>
    {props.children}
</div>

  );
}


export default BidCardPlaceHolder