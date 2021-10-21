import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

import KingBedIcon from '@material-ui/icons/KingBed';
import BedIcon from '../../assets/svg/ionic-ios-bed.svg'
import BathIcon from '../../assets/svg/awesome-bath.svg'
import AreaIcon from '../../assets/svg/icon-area.svg'
import NumberFormat from "react-number-format";
import TextField from '@material-ui/core/TextField';
import BathtubRoundedIcon from '@material-ui/icons/BathtubRounded';
import HeightRoundedIcon from '@material-ui/icons/HeightRounded';
import { RequireNewPassword } from 'aws-amplify-react';
// const BedIcon = ()=>{
//     return(          
//     <SvgIcon >
//     <path d="M432 230.7a79.44 79.44 0 00-32-6.7H112a79.51 79.51 0 00-32 6.69A80.09 80.09 0 0032 304v112a16 16 0 0032 0v-8a8.1 8.1 0 018-8h368a8.1 8.1 0 018 8v8a16 16 0 0032 0V304a80.09 80.09 0 00-48-73.3zM376 80H136a56 56 0 00-56 56v72a4 4 0 005.11 3.84A95.5 95.5 0 01112 208h4.23a4 4 0 004-3.55A32 32 0 01152 176h56a32 32 0 0131.8 28.45 4 4 0 004 3.55h24.46a4 4 0 004-3.55A32 32 0 01304 176h56a32 32 0 0131.8 28.45 4 4 0 004 3.55h4.2a95.51 95.51 0 0126.89 3.85A4 4 0 00432 208v-72a56 56 0 00-56-56z"/>
//     </SvgIcon>)
//     }

const useStyles = makeStyles({
    price:{
        fontSize: 18,
        fontFamily:'helvetica',
        color:'#3C3C3C',
        fontWeight:700,
        
    
    },
    hkd:{
        fontSize: 11,
        fontFamily:'helvetica',
        color:'#3C3C3C',
        fontWeight:700,
        
    },
    valuation:{
        fontSize: 8,
        fontFamily:'helvetica',
        color:'#A88663',
        fontWeight:400,
        },
    location:{
        fontSize: 10,
        fontFamily:'helvetica',
        color:'#3C3C3C',
        fontWeight:400,
    },
    info:{
        //flexDirection:'row',
        fontSize: 10,
        fontFamily:'helvetica',
        color:'#A88663',
        fontWeight:400,
        
    },
    area:{
        transform:[{ rotate: '45deg'}]
    }

  });


const PropertyCardContent =({p})=>{
    const classes = useStyles();

    return(<div style={{backgroundColor:'white', flexGrow:1}}>
        <Grid container direction="row" justifyContent="space-between" alignItems="flex-end">
            <Grid  item direction="column" xs={6} container>
                <Grid item container direction="row" alignItems="baseline">
                    <Grid item>
                    <NumberFormat
  customInput={TextField}
  displayType={'text'}
  className={classes.price}
  value={p.price}
  // you can define additional custom props that are all forwarded to the customInput e. g.
  variant="standard"
  thousandSeparator
/></Grid>
                        
                    <Grid item><Typography className={classes.hkd}>HKD</Typography></Grid>
                    <Grid item><Typography className={classes.valuation}>(Valuation)</Typography></Grid>
                </Grid>

                <Grid item>
                <Typography className={classes.location}>{p.district}</Typography>
                </Grid>
            </Grid>


            <Grid id='rhs' item container direction="column" flexGrow={1} xs={6} alignItems="stretch" justifyContent='stretch'>

                <Grid item container direction="row" alignItems="baseline" spacing={1} justifyContent="flex-end">
                
                <Grid item>
                <img src={BedIcon} alt=''/></Grid>

                <Grid item>
                <Typography className={classes.info}>  {p.bedrooms} </Typography></Grid> 
                
                <Grid item>
                <img src = {BathIcon} alt=''/></Grid> 
               
                <Grid item>
                <Typography className={classes.info}>  {p.bathrooms}- </Typography></Grid> 
                
                <Grid item>
                <img src = {AreaIcon} alt=''/></Grid> 

                <Grid item>
               <Typography className={classes.info}> {p.saleableArea}sqft</Typography></Grid> 

                </Grid>
            </Grid>

        </Grid>
    </div>)
}


export default PropertyCardContent
//old code
//<KingBedIcon fontSize="small" style={{fill: "#A88663"}}/>
//<img src = {require('../../assets/images/ionic-ios-bed/ionic-ios-bed.png')} alt=''/>

//<BathtubRoundedIcon fontSize="small" style={{fill: "#A88663"}}/>
//<HeightRoundedIcon fontSize="small" style={{fill: "#A88663"}} className={classes.area}/>
               