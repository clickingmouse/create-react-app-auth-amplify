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
import FavoriteButton from '../buttons/favoriteButton'
import Bed from '../../assets/propertyListing/bed.svg'
const useStyles = makeStyles({
    root: {
      maxWidth: 169,
      height: 156,

    },
    media: {
        width:177,
      height: 86,
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between",

    },
    content:{
padding:0,
paddingLeft:9,
//paddingRight:19
"&:last-child": {
      paddingBottom: 0
    },
//}
    },
//    content:last-child:{}
    type:{
      //backgroundColor:"white",

      //textAlign:"right",
      //flex:1, 
      display:"flex", 
      flexDirection:"row-reverse",
      //backgroundColor:"white"
      //padding:10


    },
    typetxt:{
      fontSize:8,
      color:"#A88663",
      backgroundColor:"white",
      borderTopLeftRadius:2,
      //padding:5 2 5 2
      paddingLeft:5,
      paddingTop:1,
      paddingRight:5

      
    },
    fav:{
      display:"flex", 
      flexDirection:"row-reverse",
      paddingTop:5,
      paddingRight:5
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
        >
          <div className={classes.fav}><FavoriteButton radius="26" color="black"/></div>
        
        <div className={classes.type}><Typography className={classes.typetxt} >Residential</Typography></div>
        </CardMedia>

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