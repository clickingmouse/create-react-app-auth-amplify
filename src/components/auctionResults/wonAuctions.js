import React from 'react'
import Container from '@material-ui/core/Container'
import { useHistory } from 'react-router'
import BackButton from '../buttons/backButton'
import AppBar from '@material-ui/core/AppBar'
import {makeStyles} from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { Typography } from '@material-ui/core/'
import WonHeader from './wonHeader'
import WonCard from './wonCard'



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

      <WonCard/>
        </Container>
        
        
        </>
    )
}


export default WonAuctions