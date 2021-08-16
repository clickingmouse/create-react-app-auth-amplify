import React from 'react';
import Grid from '@material-ui/core/Grid'
//import Img from '@material-ui/core/Img'
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
//import itemData from './itemData';
import residential from '../../assets/placeholders/propertyTypeResidential.png'
import industrial from '../../assets/placeholders/propertyTypeIndustrial.png'
import commercial from '../../assets/placeholders/propertyTypeCommercial.png'
//image={require("../../assets/placeholders/propertyListing.png")}
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"


  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',

    },
    title: {
      //color: theme.palette.primary.light,
      backgroundColor:'transpareent'


    },
    titleBar: {
      //background:'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        backgroundColor:'transpareent'
    }
    ,
    img:{
        //height:113,
        //width:92,
        height:'auto',
        width:'100%'

    }
  }));

  const itemData = [
    {
      img: residential,
      title: 'Residential',
      author: 'author',
      path:'/residential-listings'
      
    },
    {
       img: industrial ,
       title: 'Industrial',
       author: 'author',
       path:''
     },
     {
       img: commercial,
       title: 'Commercial',
       author: 'author',
       path:''
     },
 ];

const PropertyType = () =>{
    const classes=useStyles()
const handleClick= () =>{
    console.log("clicked type")
}

return(
    <>
            <div className={classes.root}>
      <ImageList className={classes.imageList} cols={3} gap={8}>
        {itemData.map((item) => (
            <Link to={item.path}>
          <ImageListItem key={item.img} >
            <img src={item.img} alt={item.title} className={classes.img}/>

          </ImageListItem>
          </Link>
        ))}
      </ImageList>
    </div>
    

  </>  
)

}

export default PropertyType

{/* <Grid container direction="row">
<Grid item><Link to='/residential-listings'>< img src={require("../../assets/placeholders/propertyTypeResidential.png")} alt="residential image"/></Link></Grid>
<Grid item>< img src={require("../../assets/placeholders/propertyTypeIndustrial.png")} alt="industrial image"/></Grid>
<Grid item>< img src={require("../../assets/placeholders/propertyTypeCommercial.png")} alt="commercial image"/></Grid>

</Grid> */}