import React from 'react'

import {Container, Grid, Typography,Slider } from '@material-ui/core'

import FilterHeader from './filterHeader'
import PriceSlider from './priceSlider'
import SizeSlider from './sizeSlider'
import AnyButton from './anyButton'
import StudioButton from './studioButton'
import NumeroUnoButton from './numeroUnoButton'
import NumeroDosButton from './numeroDosButton'
import NumeroTresButton from './numeroTresButton'
import QuartroOrMoreButton from './quartroOrMoreButton'


const Filter =()=>{

    return(
    <>
    <Container>
    <FilterHeader/>

    <Grid container direction='column'>
    
    <Grid item>
    <Typography>Property Type</Typography>
    </Grid>

    <Grid item container columne='row'>
    <Typography>Price Range</Typography><Typography>0 - 12,500,000</Typography>
    </Grid>

    <Grid item>
    <PriceSlider/>
    </Grid>


    <Grid item>
    <Typography>bedrooms</Typography>
    </Grid>

    <Grid item container direction='row' spacing={1}>

        <Grid item>
        <AnyButton/></Grid>
        <Grid item>
        <StudioButton/></Grid>
        <Grid item>        
        <NumeroUnoButton/></Grid>
        <Grid item>
        <NumeroDosButton/></Grid>
        <Grid item>
        <NumeroTresButton/></Grid>
        <Grid item>
        <QuartroOrMoreButton/></Grid>


        </Grid>
    
    <Grid item>
    <Typography>Bathrooms</Typography>
    </Grid>

    <Grid item container direction='row' spacing={1}>
    <Grid item>
        <AnyButton/></Grid>
        
        <Grid item>        
        <NumeroUnoButton/></Grid>
        <Grid item>
        <NumeroDosButton/></Grid>
        <Grid item>
        <NumeroTresButton/></Grid>
        <Grid item>
        <QuartroOrMoreButton/></Grid>
    </Grid>

    <Grid item container direction='row'>
    <Typography>Property Size</Typography>     <Typography>Up to 1500 sqft</Typography>
    </Grid>


    <Grid item container direction='row'>

    <SizeSlider />
    </Grid>
    </Grid>
    </Container>
    </>
    )

}

export default Filter