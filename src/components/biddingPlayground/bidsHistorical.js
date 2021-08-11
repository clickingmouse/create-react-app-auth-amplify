import React from 'react'
import {List, ListItem} from '@material-ui/core'
const BidsHistorical =({bids, openingBid, reserveBid, currentCall, bidIncrement})=>{

    const biddingHistory = bids.map(bid=>
        <ListItem key={bid.id}>
        {bid.submittedTime} - {bid.createdAt} {bid.bid} {bid.bidderName}
        </ListItem>
        )

    return(<>
    Bidding History, 
    <hr/>
    Opening Bid:{openingBid} ; Reserve Bid: {reserveBid} <br/>
    Current Call :: {currentCall} <br/>
    Bidincrement -- {bidIncrement}

    <hr/>
    {biddingHistory}
    <List>
    
    </List>
    </>)
}
export default BidsHistorical