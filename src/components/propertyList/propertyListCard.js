import React from 'react'
import Fab from '@material-ui/core/Fab';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { findLastIndex, size } from 'lodash';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PropertyCardContent from './propertyCardContent';
import IconButton from '@material-ui/core/IconButton';
//import Fab from '@material-ui/core/Fab'
//import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import FavoriteButton from '../buttons/favoriteButton'

import Bed from '../../assets/propertyListing/bed.svg'
const useStyles = makeStyles({
    root: {
      maxWidth: 356,
      height: 205,
      //display:'flex'
      
    },
    media: {
        width:345,
      height: 152,
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between"
    },
    content:{
padding:0,
paddingLeft:14,
paddingRight:19
    }
  });




const PropertyListCard = ()=>{
    const classes = useStyles();

    const handleClick = ()=>{
      console.log("clicked")
    }


    return(
<>
<Card className={classes.root} onClick={handleClick}>
    <CardMedia
          className={classes.media}
          image={require("../../assets/placeholders/propertyListing.png")}
          title=" Reptile"
        >
          
          <div styles={{flex:1}}><FavoriteButton radius="30" /></div>
          <div styles={{flex:1}}><Typography inline align="right">Residential</Typography></div>
          
         
          </CardMedia>
          
        <CardContent className={classes.content}>
           <PropertyCardContent/>
        </CardContent>
        </Card>
</>
    )
}
//<div styles={{display:'flex', flex:'auto',flexGrow:1, flexDirection:'column', justifyContent:"flex-end" }}>
export default PropertyListCard

const placeholderData = {
    listPrice : 8600000,
    bedrooms : 2,
    bathrooms : 2,
    size: 680,
    propertyType: 1,
    location:'Tsueng Kwan O'
}