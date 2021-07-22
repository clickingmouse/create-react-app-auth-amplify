import React from 'react'
import Grid from '@material-ui/core/Grid'


const PropertySummary =()=>{

    return(

        <Grid container justifyContent="space-between">
            <Grid item>L
                <Grid container direction="column">
                    <Grid item>
                        8,000,0900 hkd
                            
                        </Grid>
                        <Grid item>
                        Tsenung kwan O
                        </Grid>
                        <Grid item>
                        22 680sqft
                    </Grid>
                </Grid>
                </Grid>
            <Grid item>R
            <Grid containerdirection="column">
                Residential
                Floorplan Button
            </Grid>
            </Grid>


        </Grid>



    )
}

export default PropertySummary