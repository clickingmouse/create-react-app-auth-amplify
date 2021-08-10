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
    memberType:{},
    memberName:{},

})
const MembershipCard = () =>{
    const classes=useStyles()
    return(<>

    <Card>
        
        <CardMedia
        component="image"
        image={MemberCard}
        //src={MemberCard}

        className={classes.media}>

<div><Typography>Gold Card Member</Typography></div>
        <div><Typography>Chris Chan Tai Man</Typography></div>
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