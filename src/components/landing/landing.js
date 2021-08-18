import React from 'react';
import LandingHeader from './landingHeader';
import Container from '@material-ui/core/Container';

import CurrentBidCard from './currentBidCard';
import Divider from '@material-ui/core/Divider';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
//import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import UpNext from './upNext'
import PropertyType from './propertyType'
import Communities from './communities'
import BidCard from '../cards/bidCard'
import BidPanel from '../bidPanels/bidPanels'
import NewRelease from './newRelease';
import { DateRange } from '@material-ui/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Store from '../../store/store'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    container: {
        display: 'grid',
        //gridTemplateColumns: 'repeat(12, 1fr)',
        paddingRight:0,
        gridGap: theme.spacing(3),
      },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    divider: {
        margin: theme.spacing(2, 0),
      },
      CurrentBidCard:{
        maxHeight:87,
        width:337
      }
  }));


const Landing = ()=>{
    const classes = useStyles();
const today = new Date()
const day = today.getDay()
console.log(today)
console.log(day)

// find today's auction

const allProperties = React.useContext(Store).state.properties
console.log(React.useContext(Store))
console.log(allProperties)
//const inAuctionProperty = allProperties.find(property => property.testAuctionDay === day )
const inAuctionProperty = allProperties.find(property => property.testAuctionDay == "2" )
console.log(inAuctionProperty)

    return(
    
    <Container maxWidth="sm" className={classes.container}>
      <LandingHeader/>
    <div className={classes.root}>

    <Typography variant="subtitle1" gutterBottom>Today's Auction</Typography>
      <Grid container spacing={1}>

        <Grid container item xs={12} spacing={1}>
        <Link to= {`/property/${inAuctionProperty.id}`} >
          <BidCard p={inAuctionProperty}/></Link>
          
       
        </Grid>
    </Grid>
    <Divider variant="middle" className={classes.divider}/>
    <Typography variant="subtitle1" gutterBottom> Up Next:</Typography>
    <Grid container spacing={1}>

        <Grid container item xs={12} spacing={0}>
          <UpNext />
        </Grid>

        <Divider variant="middle"/>

      </Grid>

      <Divider variant="middle" className={classes.divider}/>
    <Typography variant="subtitle1" gutterBottom> Property Type:</Typography>
    <Grid container spacing={1}>

        <Grid container item xs={12} spacing={1}>
          <PropertyType />
  
        </Grid>
      </Grid>


      <Divider variant="middle" className={classes.divider}/>
    <Typography variant="subtitle1" gutterBottom> New Relase:</Typography>
    <Grid container spacing={1}>

        <Grid container item xs={12} spacing={1}>
          <NewRelease />
        </Grid>

      </Grid>


      <Divider variant="middle" className={classes.divider}/>
    <Typography variant="subtitle1" gutterBottom> Communities:</Typography>


    <Grid container spacing={1}>

        <Grid container item xs={12} spacing={1}>
          <Communities />
        </Grid>

 
      </Grid>

    </div>

    <List style={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
            <ListItem button>hehe</ListItem>
            <ListItem button>hehe1</ListItem>

        </List>

        </Container>)
}

export default Landing

/*
<List component="nav"  aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Current Bid" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Up Next" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Property Type" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="New Relase" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Communities" />
      </ListItem>
    </List>
    */
   
    //<BidPanel height="60" width="337" amt="6,850,000" color="#000000" closingtime="23:55:30"/>