import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

import KingBedIcon from '@material-ui/icons/KingBed';
import BathtubRoundedIcon from '@material-ui/icons/BathtubRounded';
import HeightRoundedIcon from '@material-ui/icons/HeightRounded';
const BedIcon = ()=>{
    return(          
    <SvgIcon >
    <path d="M432 230.7a79.44 79.44 0 00-32-6.7H112a79.51 79.51 0 00-32 6.69A80.09 80.09 0 0032 304v112a16 16 0 0032 0v-8a8.1 8.1 0 018-8h368a8.1 8.1 0 018 8v8a16 16 0 0032 0V304a80.09 80.09 0 00-48-73.3zM376 80H136a56 56 0 00-56 56v72a4 4 0 005.11 3.84A95.5 95.5 0 01112 208h4.23a4 4 0 004-3.55A32 32 0 01152 176h56a32 32 0 0131.8 28.45 4 4 0 004 3.55h24.46a4 4 0 004-3.55A32 32 0 01304 176h56a32 32 0 0131.8 28.45 4 4 0 004 3.55h4.2a95.51 95.51 0 0126.89 3.85A4 4 0 00432 208v-72a56 56 0 00-56-56z"/>
    </SvgIcon>)
    }

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


const UpNextContent =()=>{
    const classes = useStyles();

    return(<div style={{backgroundColor:'white', flexGrow:1}}>
        <Grid container direction="column" alignContent="flex-end" alignItems="left" >
            
                <Grid item container direction="row" alignItems="baseline">
                    <Grid item><Typography className={classes.price}>8,600,000</Typography></Grid>
                    <Grid item><Typography className={classes.hkd}>HKD</Typography></Grid>
                    <Grid item><Typography className={classes.valuation}>(Valuation)</Typography></Grid>
                </Grid>

                <Grid item>
                <Typography className={classes.location}>Tseung Kwan O</Typography>
                </Grid>

                <Grid item container direction="row" alignItems="baseline" spacing={1} justifyContent="flex-start" >
                <KingBedIcon fontSize="small" style={{fill: "#A88663"}}/>
                <Typography className={classes.info}> 2 </Typography>
                <BathtubRoundedIcon fontSize="small" style={{fill: "#A88663"}}/>
                <Typography className={classes.info}> 2 </Typography>
                <HeightRoundedIcon fontSize="small" style={{fill: "#A88663"}} className={classes.area}/>
                <Typography className={classes.info}> 680sqft</Typography>
                </Grid>

        </Grid>
    </div>)
}


export default UpNextContent