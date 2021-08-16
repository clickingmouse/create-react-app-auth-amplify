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
                        
                        <Grid item container direction="row" alignItems="baseline" spacing={1} justifyContent="flex-end">
                <img src={BedIcon} alt=''/>
                <Typography className={classes.info}>  {p.bedrooms} </Typography>
                <img src = {BathIcon} alt=''/>
               
                <Typography className={classes.info}>  {p.bathrooms} </Typography>
                <img src = {AreaIcon} alt=''/>
               <Typography className={classes.info}> {p.saleableArea}sqft</Typography>
                </Grid>


                        
                    
                </Grid>
                </Grid>



            <Grid item>
            <Grid containerdirection="column">
                <Typography className={classes.propertyType}>Residential</Typography>
                <CapsuleFAB title="FloorPlan" width="94" height="27.2" color="#A88663" icon={MapIcon} />
            </Grid>
            </Grid>


        </Grid>



    )
}

export default PropertySummary