import React from 'react'
import Fab from '@material-ui/core/Fab';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { size } from 'lodash';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PropertyCardContent from './propertyCardContent';
import IconButton from '@material-ui/core/IconButton';
//import Fab from '@material-ui/core/Fab'
//import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Bed from '../../assets/propertyListing/bed.svg'
const useStyles = makeStyles({
    root: {
      maxWidth: 356,
      height: 205
    },
    media: {
        width:345,
      height: 152,
    },
    content:{
padding:0,
paddingLeft:14,
paddingRight:19
    }
  });




const PropertyListCard = ()=>{
    const classes = useStyles();
    return(
<>
<Card className={classes.root}>
    <CardMedia
          className={classes.media}
          image={require("../../assets/placeholders/propertyListing.png")}
          title=" Reptile"
        ><Fab size="Small"><FavoriteBorderIcon/></Fab><Typography>Residential</Typography></CardMedia>
        <CardContent className={classes.content}>
           <PropertyCardContent/>
        </CardContent>
        </Card>
</>
    )
}

export default PropertyListCard

const placeholderData = {
    listPrice : 8600000,
    bedrooms : 2,
    bathrooms : 2,
    size: 680,
    propertyType: 1,
    location:'Tsueng Kwan O'
}