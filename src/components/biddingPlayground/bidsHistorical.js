import React from 'react'
import {List, ListItem} from '@material-ui/core'
const BidsHistorical =({bids})=>{

    const biddingHistory = bids.map(bid=>
        <ListItem key={bid.id}>
        {bid.submittedTime} - {bid.createdAt} {bid.bid} {bid.bidderName}
        </ListItem>
        )

    return(<>
    Bidding History, 
    <hr/>
    {biddingHistory}
    <List>
    
    </List>
    </>)
}
export default BidsHistorical