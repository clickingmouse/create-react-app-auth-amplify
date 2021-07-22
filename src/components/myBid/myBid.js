import React from 'react';
import Container from '@material-ui/core/Container'
import MyBidHeader from './myBidHeader';
import BidCard from '../cards/bidCard'
import CapsuleButton from '../buttons/capsuleButton'
const MyBid = ()=>{
    return(
        <Container>
            <MyBidHeader/>
        <BidCard/>
        <CapsuleButton title="Successful Bids" height="50" width="337" color="#A88663" fontColor=""/>
        <CapsuleButton title="Lost Bids" height="50" width="337" color="#000000" fontColor=""/>
        


        </Container>
    )
}

export default MyBid