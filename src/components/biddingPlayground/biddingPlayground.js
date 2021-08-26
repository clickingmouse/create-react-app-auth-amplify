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
import {createBid} from '../../graphql/mutations'

import { onCreateBid } from '../../graphql/subscriptions';
import BidYourBidPrice from '../bidPanels/bidYourBidPrice'
import BidPanel from '../propertyDetails/bidding/bidPanel'
import BidsHistorical from './bidsHistorical'

import Store from '../../store/store'


// const auctionid = 2
const BiddingPlayground =()=>{
    //const store = Store
    console.log(React.useContext(Store))
    const user = React.useContext(Store).state.profile


    const [auctionedProperty, setAuctionedProperty]= useState()
    const [messageBody, setMessageBody] = useState('');
    const [bids, setBids]=useState([])
    const { auctionId } = useParams();
    console.log(auctionId)
    
    // get auction & property data
    const auctions = useContext(Store).state.auctions
    const properties = useContext(Store).state.properties
        //console.log(data)
    const auction = auctions.find(auction=> auction.id = auctionId)
    const bidIncrement = auction.bidIncrement
    const startingBid = auction.startingBid
    const [lastBid, setLastBid]= useState(startingBid)
    const [myBid, setMyBid]=useState()

    //setMyBid(auction.startingBid)
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
  console.log('fetching existing bids')
  try{
    API
      .graphql(graphqlOperation(listBids,{
        filter:{
          auctionID:{eq:auctionId}
        }
      }))
      .then((response) => {
      const items = response.data?.listBids?.items;
      console.log(response)
        if (items) {
          //setMessages(items);
          console.log(items)
          setBids(items)
         
        } else {
          setLastBid(0)
          //setMyBid(auction.startingBid)
        }
      })
    } catch (error) {
    console.log(error)
    } 
  },[]);
 //
 //
 //

  useEffect(() => {
    const subscription = API
      .graphql(graphqlOperation(onCreateBid))
      .subscribe({
        next: (event) => {
          setBids([...bids, event.value.data.onCreateBid]);
          //

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

  const handleBidCall= (event, value)=>{
    console.log(value)
    setMyBid(value)
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('submitting bid::')
    console.log(event.target)
    const input = {
      //get time, username, useruid, bid,uid, bid,
      auctionID:auctionId,
      bidderName:user.username,
      bidderID: user.id,
      bid: myBid,
      submittedTime: new Date().toISOString()
      //body: messageBody.trim()
    };

    console.log(input)
    try {
      setMyBid('');
      await API.graphql(graphqlOperation(createBid, { input }))
    } catch (error) {
      console.warn(error);
    }
  /*
    try {
      setMessageBody('');
      await API.graphql(graphqlOperation(createMessage, { input }))
    } catch (error) {
      console.warn(error);
    }
*/
  };
const auctionedP=useContext(Store).state.auctions.find(property => property.testAuctionDay == 2 )
 //   const bidController = <BidPanel bidIncrement={auctionedP.bidIncrement} currentCall=""/>

return(
    <>
    
    BiddingPlayground

    <BidCallingBidPrice currentBid={lastBid}/>
    <BidClosesInDate/>
    <BidCountDownTimer/>
    
    <BidYourBidPrice />

    <BidPanel bidIncrement={auctionedP.bidIncrement} currentCall={lastBid ==0?lastBid:auction.startingBid}  onBid={handleSubmit} onChangeBid={handleBidCall}/>
    
    {/*bidController*/}
    <BidsHistorical bids={bids} openingBid={auction.startingBid} reserveBid={auction.reserveBid} currentCall={lastBid ==0?lastBid:auction.startingBid} bidIncrement={auction.bidIncrement}/>


    </>
)

}

export default  BiddingPlayground