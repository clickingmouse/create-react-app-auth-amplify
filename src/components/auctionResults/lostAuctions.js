import React from 'react'
import Container from '@material-ui/core/Container'
import { useHistory } from 'react-router'
import BackButton from '../buttons/backButton'
import AppBar from '@material-ui/core/AppBar'
import {makeStyles} from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { Typography } from '@material-ui/core/'
import Grid from '@material-ui/core/Grid'
import LostHeader from './lostHeader'
import WonCard from './wonCard'
import LostCard from './lostCard'

import WonButton from './wonButton'
import LostButton from './lostButton'



const useStyles=makeStyles({
    appBar:{},
    title:{
        fontSize:24,
        color:'#A88663',
    }
})


const LostAuctions = () =>{

    const classes = useStyles()
    return(
        <>




      <Container>
          <LostHeader/>
          <Grid container direction='row'>

              <WonButton title='Won Auctions' color='#A88663'/> 
              <LostButton title='Lost Auctions' color=  '#777777'/>
          </Grid>
<br/>
      
      <LostCard/>
        </Container>
        
        
        </>
    )
}


export default LostAuctions