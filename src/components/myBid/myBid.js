import React from 'react';
import Container from '@material-ui/core/Container'
import MyBidHeader from './myBidHeader';
import BidCard from './bidCardPlaceHolder'
import CapsuleButton from '../buttons/capsuleButton'

import BidCallingBidPrice from '../bidPanels/bidCallingBidPrice'
const MyBid = ()=>{
    return(<>
    <MyBidHeader/>
        <Container>
            
        <BidCard/>
            <BidCallingBidPrice/>
        
        <CapsuleButton title="Successful Bids" height="50" width="337" color="#A88663" fontColor=""/>
        <CapsuleButton title="Lost Bids" height="50" width="337" color="#000000" fontColor=""/>
        


        </Container>
        </>
    )
}

export default MyBid