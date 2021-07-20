import React from 'react'
import Fab from '@material-ui/core/Fab';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { size } from 'lodash';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import PropertyCardContent from './propertyCardContent';
import UpNextContent from './upNextContent';
import IconButton from '@material-ui/core/IconButton';
//import Fab from '@material-ui/core/Fab'
//import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Bed from '../../assets/propertyListing/bed.svg'
const useStyles = makeStyles({
    root: {
      maxWidth: 177,
      height: 156
    },
    media: {
        width:177,
      height: 86,
    },
    content:{
padding:0,
paddingLeft:9,
//paddingRight:19
    }
  });




const UpNextCard = ()=>{
    const classes = useStyles();
    return(
<>
<Card className={classes.root}>
    <CardMedia
          className={classes.media}
          image={require("../../assets/placeholders/propertyListing.png")}
          title=" Reptile"
        ><Fab size="Small"><FavoriteBorderIcon/></Fab><Typography styles={{fontSize:8}}>Residential</Typography></CardMedia>
        <CardContent className={classes.content}>
           <UpNextContent/>
        </CardContent>
        </Card>
</>
    )
}

export default UpNextCard

const placeholderData = {
    listPrice : 8600000,
    bedrooms : 2,
    bathrooms : 2,
    size: 680,
    propertyType: 1,
    location:'Tsueng Kwan O'
}