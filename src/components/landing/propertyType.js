import React from 'react';
import Grid from '@material-ui/core/Grid'
//import Img from '@material-ui/core/Img'

//image={require("../../assets/placeholders/propertyListing.png")}
const PropertyType = () =>{

const handleClick= () =>{
    console.log("clicked type")
}

return(
    
        <Grid container direction="row">
            <Grid item>< img src={require("../../assets/placeholders/propertyTypeResidential.png")} alt="residential image"/></Grid>
            <Grid item>< img src={require("../../assets/placeholders/propertyTypeIndustrial.png")} alt="industrial image"/></Grid>
            <Grid item>< img src={require("../../assets/placeholders/propertyTypeCommercial.png")} alt="commercial image"/></Grid>

        </Grid>
    
)

}

export default PropertyType