import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import MyBidHeader from './myBidHeader';
import BidCard from './bidCardPlaceHolder'
import CapsuleButton from '../buttons/capsuleButton'
import Grid from '@material-ui/core/Grid'

import BidCallingBidPrice from '../bidPanels/bidCallingBidPrice'
import BidYourBidPrice from '../bidPanels/bidYourBidPrice';
import BidCountDownTimer from '../bidPanels/bidCountdownTimer';

import {Link} from 'react-router-dom'

const MyBid = ()=>{
    return(<>
    <MyBidHeader/>
        <Container xs={12}>
        < Link to={'/myAuctions/won'} style={{textDecoration: 'none'}}>
        <CapsuleButton title="Past Bids" height="50" width="337" color="#A88663" fontColor=""/></Link>
        <br/>
            
        <BidCard>
        <BidCallingBidPrice/>
        <Grid container direction ="row" justifyContent="space-between">
            <Grid item>
<BidYourBidPrice/></Grid>
<Grid item >
<BidCountDownTimer/>
</Grid>
        </Grid>

        </BidCard>
        


        </Container>
        </>
    )
}

export default MyBid

// < Link to={'/myAuctions/won'} style={{textDecoration: 'none'}}>
// <CapsuleButton title="Successful Bids" height="50" width="337" color="#A88663" fontColor=""/></Link>

// <Link to ={'/myAuctions/lost'} style={{textDecoration: 'none'}}>
// <CapsuleButton title="Lost Bids" height="50" width="337" color="#000000" fontColor=""/></Link>
