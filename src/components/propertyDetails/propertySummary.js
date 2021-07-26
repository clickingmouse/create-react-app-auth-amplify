import React from 'react'
import Grid from '@material-ui/core/Grid'


const PropertySummary =({p})=>{

    return(

        <Grid container justifyContent="space-between">
            <Grid item>L
                <Grid container direction="column">
                    <Grid item>
                        {p.price} hkd
                            
                        </Grid>
                        <Grid item>
                        {p.district}
                        </Grid>
                        <Grid item>
                        {p.saleableArea}sqft
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