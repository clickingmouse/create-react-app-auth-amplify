import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

import KingBedIcon from '@material-ui/icons/KingBed';

import BathtubRoundedIcon from '@material-ui/icons/BathtubRounded';
import HeightRoundedIcon from '@material-ui/icons/HeightRounded';


import BedIcon from '../../assets/svg/ionic-ios-bed.svg'
import BathIcon from '../../assets/svg/awesome-bath.svg'
import AreaIcon from '../../assets/svg/icon-area.svg'


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
                <Grid item>
                <img src={BedIcon} alt=''/></Grid>  
                <Grid item>
                <Typography className={classes.info}> 2 </Typography></Grid>

                <Grid item>
                <img src = {BathIcon} alt=''/></Grid>

                <Grid item>
                <Typography className={classes.info}> 2 </Typography></Grid>

                <Grid item>
                <img src = {AreaIcon} alt=''/></Grid>

                <Grid item>
                <Typography className={classes.info}> 680sqft</Typography></Grid>
                </Grid>

        </Grid>
    </div>)
}


export default UpNextContent