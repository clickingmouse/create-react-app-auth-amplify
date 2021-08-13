import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import {  Typography } from '@material-ui/core';

import membershipCardImg from '../../assets/membershipCard/membershipcard.svg'
import MemberCard from '../../assets/svg/membership.svg'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent'
const useStyles=makeStyles({
    root: {
        maxWidth: 356,
        height: 205,

        //display:'flex'
        
      },
      media: {
          width:337,
          //height:'auto',
          height:168,
        //height: 152,
        padding:0,
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
  
      },
      img:{
        width:'100%',
        height:'auto'
    },
    card:{
      //padding:10
    },
    typediv:{
      display:'flex',
      justifyContent:'flex-end',
      paddingTop:15,
      paddingRight:21
    },
    namediv:{
      display:'flex',
      justifyContent:'flex-end',
      padding:5,
    },
    memberType:{
      color:'white',
      fontSize:10
    },
    memberName:{
      color:'white',
      fontSize:13,
      paddingBottom:14,
      paddingRight:21
    },

})
const MembershipCard = () =>{
    const classes=useStyles()
    return(<>

    <Card className={classes.card} elevation={0}>
        
        <CardMedia
        component="image"
        image={MemberCard}
        //src={MemberCard}

        className={classes.media}>

<div className={classes.typediv}><Typography className={classes.memberType}>Gold Card Member</Typography></div>
        <div className={classes.namediv}><Typography className={classes.memberName}>Chris Chan Tai Man</Typography></div>
        
        </CardMedia>


        
    </Card>
    </>)



}





export default MembershipCard
//< img src={membershipCardImg} alt="membershipcard image" width='100%'/>
{/* <div style={{ 
    backgroundImage:  `url(${membershipCardImg})`,
    backgroundRepeat: 'no-repeat',
    width:'100%'
  }}>

  <Typography>Gold Card Member</Typography>
  <Typography>Chris Chan Tai Man</Typography>
  </div>
  <hr/> */}