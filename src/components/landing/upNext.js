import React from 'react';
import Grid from '@material-ui/core/Grid'
import UpNextCard from './upNextCard'

const UpNext = ()=>{

return(
    <div styles={{}}>
    <Grid container direction="row" styles={{overflow:'auto'}} spacing={1}>
        <Grid item>
        <UpNextCard/></Grid>
        <Grid item>
        <UpNextCard/>
        </Grid>

    </Grid>
    </div>


)


}

export default UpNext