import React,{useContext, useState, useEffect}  from 'react'
import {
//  BrowserRouter as Router,
//  Switch,
//  Route,
//  Link,
useParams
} from "react-router-dom";
import { createMessage } from '../../graphql/mutations';
import Amplify, { API, graphqlOperation, Storage, Auth } from 'aws-amplify';
import BidCallingBidPrice  from '../bidPanels/bidCallingBidPrice'
import BidClosesInDate from '../bidPanels/bidClosesInDate'
import BidCountDownTimer from '../bidPanels/bidCountdownTimer'

//import BiddingPlayground from './biddingPlayground'
//import BidCallingBidPrice from '../bidPanels/bidCallingBidPrice'
//import BidPanel from '../bidPanels/bidPanels'
import BidYourBidPrice from '../bidPanels/bidYourBidPrice'
import BidPanel from '../propertyDetails/bidding/bidPanel'
import BidsHistorical from './bidsHistorical'

import Store from '../../store/store'


// const auctionid = 2
const BiddingPlayground =()=>{
    //const store = Store

    const [auctionedProperty, setAuctionedProperty]= useState()
    const [messageBody, setMessageBody] = useState('');

    let { auctionId } = useParams();
    const data = useContext(Store)
        console.log(data)
//    useEffect( ()=>{
        /*
    const properties = data.state.properties
    console.log(properties)
    
    const auctions = data.state.auctions
    console.log(auctions)
    const auctionedP = auctions.find(property => property.testAuctionDay == 2 )
    console.log(auctionedP)
    setAuctionedProperty(auctionedP)
    */
//},[])

const handleChange = (event) => {
    setMessageBody(event.target.value);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
  
    const input = {
      channelID: '1',
      author: 'Dave',
      body: messageBody.trim()
    };
  
    try {
      setMessageBody('');
      await API.graphql(graphqlOperation(createMessage, { input }))
    } catch (error) {
      console.warn(error);
    }
  };
const auctionedP=useContext(Store).state.auctions.find(property => property.testAuctionDay == 2 )
 //   const bidController = <BidPanel bidIncrement={auctionedP.bidIncrement} currentCall=""/>

return(
    <>
    //
    BiddingPlayground

    <BidCallingBidPrice/>
    <BidClosesInDate/>
    <BidCountDownTimer/>
    <BidYourBidPrice/>
    <BidPanel bidIncrement={auctionedP.bidIncrement} currentCall="" onSubmit={handleSubmit}/>
    {/*bidController*/}
    <BidsHistorical/>


    </>
)

}

export default  BiddingPlayground