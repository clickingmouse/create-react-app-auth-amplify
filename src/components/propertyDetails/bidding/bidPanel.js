import React from 'react'
import Grid from '@material-ui/core/Grid'
const BidPanel = ()=>{
    return(
        <Grid container direction="row">
            <Grid item>
                <Grid container direction="column">
                    <Grid item>
                        Current Bid Price
                    </Grid>

                    <Grid item>
                        6850000 HKD
                    </Grid>

                </Grid>



            </Grid>


            <Grid item>
            <Grid container direction="column">
                <Grid item> Bid closes in</Grid>
                <Grid item> 23 : 55 : 30</Grid>
                <Grid item> hours Minutes Seconds</Grid>
                    </Grid>
    


            </Grid>
            
        </Grid>

        <Grid container>
            <button/>0000000<button/>
        </Grid>


    )
}

export default BidPanel