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
import {listPropertys, listFavorites, listAuctions, listBids, listMessages} from '../../graphql/queries'
import { onCreateBid } from '../../graphql/subscriptions';
import BidYourBidPrice from '../bidPanels/bidYourBidPrice'
import BidPanel from '../propertyDetails/bidding/bidPanel'
import BidsHistorical from './bidsHistorical'

import Store from '../../store/store'


// const auctionid = 2
const BiddingPlayground =()=>{
    //const store = Store

    const [auctionedProperty, setAuctionedProperty]= useState()
    const [messageBody, setMessageBody] = useState('');
    const [bids, setBids]=useState([])
    let { auctionId } = useParams();
    console.log(auctionId)
    
    // get auction & property data
    const auctions = useContext(Store).state.auctions
    const properties = useContext(Store).state.properties
        //console.log(data)
    const auction = auctions.find(auction=> auction.id = auctionId)
    const bidIncrement = auction.bidIncrement
    const startingBid = auction.startingBid
    const [lastBid, setLastBid]= useState()
    const [myBid, setMyBid]=useState()


    console.log(auction)

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

useEffect(() => {
  // filter by auciontid
  try{
    API
      .graphql(graphqlOperation(listBids,{filter:{auctionId:auctionId}}))
      .then((response) => {
      const items = response.data?.listBids?.items;
      console.log(response)
        if (items) {
          //setMessages(items);
          setBids(items)
         
        } else {
          setLastBid(0)
        }
      })
    } catch (error) {
    console.log(error)
    } 
  },[]);
 
  useEffect(() => {
    const subscription = API
      .graphql(graphqlOperation(onCreateBid))
      .subscribe({
        next: (event) => {
          setBids([...bids, event.value.data.onCreateBid]);
        },
        error:(error)=>{
          console.log('subscribe', error)
        }
      });
    
    return () => {
      subscription.unsubscribe();
    };
  }, [bids]);

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

    <BidCallingBidPrice currentBid={lastBid}/>
    <BidClosesInDate/>
    <BidCountDownTimer/>
    <BidYourBidPrice />
    <BidPanel bidIncrement={auctionedP.bidIncrement} currentCall="" onSubmit={handleSubmit}/>
    {/*bidController*/}
    <BidsHistorical bids={bids}/>


    </>
)

}

export default  BiddingPlayground