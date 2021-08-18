import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import CapsuleButton from '../buttons/capsuleButton'
import { Typography } from "@material-ui/core";
import CapsuleFAB from '../buttons/capsuleFAB'
import BedIcon from '../../assets/svg/ionic-ios-bed.svg'
import BathIcon from '../../assets/svg/awesome-bath.svg'
import AreaIcon from '../../assets/svg/icon-area.svg'
import MapIcon from '../../assets/svg/map.svg'
import Flag from '../../assets/svg/flag.svg'
const useStyles = makeStyles((theme) => ({
    //root: {},
    price:{
        fontSize:25,
        color:"#3C3C3C"
    },
    hkd:{
        fontSize:16
    },
    valuation:{
        fontSize:10,
        color:"#A88663"
    },
    district:{
        fontSize:16,
        color:"#3C3C3C",
    },
    info:{
        fontSize:10,
        color:"#A88663"
    },
    propertyType:{
    fontSize:10,
    color:"#A88663"
    },
    flag:{      
        //width: 6.86,
        //height: 8.82,
        //boxSizing: 'content-box',
        //paddingTop: 15,
        //position: 'relative',
        //background: 'red',
        //color: 'white',
        //color:'A88663',
        //fill:'A88663'
        //borderColor:'#A88663'
        //font-size: 11
        //letter-spacing: 0.2em;
        //text-align: center;
        //text-transform: uppercase;

    },
    placeHolder:{
        backgroundColor:'black',
        height:40,
        width:95
    }
}))
const PropertySummary =({p})=>{
const classes = useStyles();
    return(
        

        <Grid container justifyContent="space-between">
 
            <Grid item>

                <Grid container direction="column">
                   
                    <Grid item container direction="row" alignItems="baseline">
                        <Typography className={classes.price}>{p.price}</Typography> 
                        <Typography className={classes.hkd}>hkd</Typography>
                        <Typography className={classes.valuation}>(valuation)</Typography>
                            
                        </Grid>
                        <Grid item>
                        {p.district}
                        </Grid>
                        
                        <Grid item container direction="row" alignItems="baseline" spacing={1} justifyContent="flex-start">
                <Grid item>
                <img src={BedIcon} alt=''/></Grid>

                <Grid item>
                <Typography className={classes.info}>  {p.bedrooms} </Typography></Grid>
                
                <Grid item>
                <img src = {BathIcon} alt=''/></Grid>
               
               <Grid item>
                <Typography className={classes.info}>  {p.bathrooms} </Typography></Grid>
                
                <Grid item>
                <img src = {AreaIcon} alt=''/></Grid>
               
                <Grid item>
                <Typography className={classes.info}> {p.saleableArea}sqft</Typography></Grid>
                </Grid>


                        
                    
                </Grid>
                </Grid>



            <Grid item>
            <Grid container direction="column" justifyContent='space-between' spacing={1}>
                <Grid item container direction="row" justifyContent='flex-end' alignItems='center' spacing={1}>
                
                <Grid item>
                <img src={Flag} alt='' className={classes.flag}/></Grid>

                <Grid item>
                <Typography className={classes.propertyType}>Residential</Typography></Grid>
                </Grid>
                
                <Grid item>
                <div className={classes.placeHolder}></div></Grid>

                <Grid item>
                <CapsuleFAB title="FloorPlan" width="94" height="27.2" color="#A88663" icon={MapIcon} /></Grid>
            </Grid>
            </Grid>


        </Grid>



    )
}

export default PropertySummary