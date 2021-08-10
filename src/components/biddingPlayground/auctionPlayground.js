import React,{useContext, useState, useEffect}  from 'react'

import List from '@material-ui/core/List'
import { ListItem } from '@material-ui/core'

import Store from '../../store/store'

import {
    // BrowserRouter as Router,
    // Switch,
   //  Route,
     Link,
   //  useParams
   } from "react-router-dom";

const AuctionPlayground =()=>{
    const auctions = React.useContext(Store).state.auctions 
    console.log(auctions)

    const auctionList = auctions.map(auction=>
        <Link to= {`/auction/${auction.id}`} style={{textDecoration: 'none'}}>
        <ListItem key={auction.id}>
            {auction.id} - {auction.propertyID} 
        </ListItem>
        </Link>
    )

    return(<>
    Auction Playground : AuctionList
    <hr/>
    <List>
{auctionList}
    </List>
    </>
    )


}

export default AuctionPlayground