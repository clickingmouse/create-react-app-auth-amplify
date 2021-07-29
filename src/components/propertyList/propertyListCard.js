import React from 'react'
import Fab from '@material-ui/core/Fab';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Store from '../../store/store'

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
import Grid from '@material-ui/core/Grid'

import {
 // BrowserRouter as Router,
 // Switch,
//  Route,
  Link,
//  useParams
} from "react-router-dom";

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
      justifyContent:"space-between",

    },
    content:{
padding:0,
paddingLeft:14,
paddingRight:19
    },
    type:{
      //backgroundColor:"white",

      //textAlign:"right",
      //flex:1, 
      display:"flex", 
      flexDirection:"row-reverse",
      //backgroundColor:"white"


    },
    typetxt:{
      fontSize:10,
      color:"#A88663",
      backgroundColor:"white"
      
    },
    fav:{
      flex:1, display:"flex", flexDirection:"row-reverse",
    }
  });




const PropertyListCard = ({propertyid})=>{
    const classes = useStyles();
    const data = React.useContext(Store)
    console.log(data)
    const properties = data.state.properties
    console.log(properties)
    const property = properties.find(property => property.id == propertyid)
    console.log(property)
    //const img = require.context('assets/img', true);
    const handleClick = ()=>{
      console.log("clicked")
    }


    return(
<>
<Link to= {`/property/${property.id}`} style={{textDecoration: 'none'}}>
<Card className={classes.root} onClick={handleClick}>
    <CardMedia
          className={classes.media}
          //image={require("../../assets/placeholders/propertyListing.png")}
          //component="img"
          //src = {property.s3Image}
          //s3://fgbucket135655-devf/嘉湖山莊-cover.jpg
          //https://fgbucket135655-devf.s3.ap-southeast-1.amazonaws.com/%E5%98%89%E6%B9%96%E5%B1%B1%E8%8E%8A-cover.jpg
          image= {property.s3Image}
          title=" placeholder"
        >
          
          <div id="1" className={classes.fav}><FavoriteButton radius="30" /></div>
          
          <div className={classes.type}><Typography className={classes.typetxt} >Residential</Typography></div>
          
         
          </CardMedia>
          
        <CardContent className={classes.content}>
           <PropertyCardContent p={property}/>
        </CardContent>
        </Card>
      </Link>
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