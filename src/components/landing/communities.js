import React from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
//import itemData from './itemData';
import causewayBay from '../../assets/placeholders/causewayBay.png'
import central from '../../assets/placeholders/central.png'
import kowloonTong from '../../assets/placeholders/kowloonTong.png'
 


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
       img: causewayBay,
       title: 'Causeway Bay',
       author: 'author',
     },
     {
        img: central,
        title: 'Central',
        author: 'author',
      },
      {
        img: kowloonTong,
        title: 'Kowloon Tong',
        author: 'author',
      },
      {
         img: central,
         title: 'Central',
         author: 'author',
       },
  ];

const Communities = ()=>{

    const classes=useStyles()
    const handleClick= () =>{
        console.log("clicked type")
    }
    
    return(
        <div className={classes.root}>
      <ImageList className={classes.imageList} cols={3.5} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} >
            <img src={item.img} alt={item.title} className={classes.img}/>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
        
    )
}

export default Communities

{/* <Grid container direction="row" spacing={1} className={classes.root}>
<Grid item className={classes.item}>< img src={require("../../assets/placeholders/causewayBay.png")} alt="residential image"/></Grid>
<Grid item className={classes.item}>< img src={require("../../assets/placeholders/central.png")} alt="industrial image"/></Grid>
<Grid item className={classes.item}>< img src={require("../../assets/placeholders/kowloonTong.png")} alt="commercial image"/></Grid>
<Grid item className={classes.item}>< img src={require("../../assets/placeholders/central.png")} alt="commercial image"/></Grid>

</Grid> */}

{/* <ImageListItemBar
title={item.title}
classes={{
  root: classes.titleBar,
  title: classes.title,
}}

/> */}