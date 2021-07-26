import React from 'react';
import Grid from '@material-ui/core/Grid'
//import Img from '@material-ui/core/Img'

//image={require("../../assets/placeholders/propertyListing.png")}
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

const PropertyType = () =>{

const handleClick= () =>{
    console.log("clicked type")
}

return(
    
        <Grid container direction="row">
            <Grid item><Link to='/residential-listings'>< img src={require("../../assets/placeholders/propertyTypeResidential.png")} alt="residential image"/></Link></Grid>
            <Grid item>< img src={require("../../assets/placeholders/propertyTypeIndustrial.png")} alt="industrial image"/></Grid>
            <Grid item>< img src={require("../../assets/placeholders/propertyTypeCommercial.png")} alt="commercial image"/></Grid>

        </Grid>
    
)

}

export default PropertyType