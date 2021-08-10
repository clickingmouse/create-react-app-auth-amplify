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

const MyBid = ()=>{
    return(<>
    <MyBidHeader/>
        <Container xs={12}>
            
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
        
        <CapsuleButton title="Successful Bids" height="50" width="337" color="#A88663" fontColor=""/>
        <CapsuleButton title="Lost Bids" height="50" width="337" color="#000000" fontColor=""/>
        


        </Container>
        </>
    )
}

export default MyBid