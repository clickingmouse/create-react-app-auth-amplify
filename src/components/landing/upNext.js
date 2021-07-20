import React from 'react';
import Grid from '@material-ui/core/Grid'
import UpNextCard from './upNextCard'

const UpNext = ()=>{

return(
    <div styles={{}}>
    <Grid container direction="row" styles={{overflow:'auto'}}>
        <UpNextCard/>
        <UpNextCard/>

    </Grid>
    </div>


)


}

export default UpNext