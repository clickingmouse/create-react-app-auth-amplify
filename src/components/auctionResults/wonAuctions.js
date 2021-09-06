import React from 'react'
import Container from '@material-ui/core/Container'
import { useHistory } from 'react-router'
import BackButton from '../buttons/backButton'
import AppBar from '@material-ui/core/AppBar'
import {makeStyles} from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { Typography } from '@material-ui/core/'
import Grid from '@material-ui/core/Grid'
import WonHeader from './wonHeader'
import WonCard from './wonCard'
import WonButton from './wonButton'
import LostButton from './lostButton'
import {Link} from 'react-router-dom'
import LostAuctions from './lostAuctions'

const useStyles=makeStyles({
    appBar:{},
    title:{
        fontSize:24,
        color:'#A88663',
    }
})


const WonAuctions = () =>{

    const classes = useStyles()
    return(
        <>




      <Container>
          <WonHeader/>
          <Grid container direction='row'>

              <WonButton title='Won Auctions' color='#A88663'/>
              < Link to={'/myAuctions/lost'} style={{textDecoration: 'none'}}> 
              <LostButton title='Lost Auctions' color='#777777'/></Link>
          </Grid>
<br/>
      <WonCard/>
        </Container>
        
        
        </>
    )
}


export default WonAuctions