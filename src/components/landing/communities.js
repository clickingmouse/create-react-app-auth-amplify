import React from 'react';
import Grid from '@material-ui/core/Grid'


const Communities = ()=>{

    const handleClick= () =>{
        console.log("clicked type")
    }
    
    return(
        
            <Grid container direction="row">
                <Grid item>< img src={require("../../assets/placeholders/causewayBay.png")} alt="residential image"/></Grid>
                <Grid item>< img src={require("../../assets/placeholders/central.png")} alt="industrial image"/></Grid>
                <Grid item>< img src={require("../../assets/placeholders/kowloonTong.png")} alt="commercial image"/></Grid>
                <Grid item>< img src={require("../../assets/placeholders/central.png")} alt="commercial image"/></Grid>
    
            </Grid>
        
    )
}

export default Communities