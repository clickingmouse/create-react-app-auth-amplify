import React, {useState, useReducer, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import BidIncButton  from './bidIncButton'
import BidDecButton from './bidDecButton'
import BidCallingBidPrice from '../../bidPanels/bidCallingBidPrice'
import BidCountDownTimer from '../../bidPanels/bidCountdownTimer'
import BidSubmitButton from './bidSubmitButton'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Store from '../../../store/store'
import reducer from '../../../reducers/reducers'

import MyBid from '../../myBid/myBid'
import Amplify, { API, graphqlOperation, Storage, Auth } from 'aws-amplify';
import {createBid} from '../../../graphql/mutations'

import NumberFormat from "react-number-format";
import { Typography } from '@material-ui/core'


const useStyles = makeStyles({
    wrapper:{
        width:"100%",
        backgroundColor:'black'

    },
    bidPanel:{
        height:61,
        width:"100%",
        backgroundColor:'black',
        paddingTop:10,
        paddingLeft:15,
        paddingRight:15,
        paddingBottom:10,
        
    },
    price:{
        color:'#3D3D3D',
        fontSize:35,
        //lineHeight:1.2,
        fontWeight:'bold',
    }
})

const BidPanel = ({bidIncrement, currentCall, onBid, onChangeBid, onSubmitBid, auctionID})=>{
    const classes = useStyles();
    const { state, dispatch } = React.useContext(Store);

    //const [state, dispatch]= useReducer(reducer, )
   //                                                items.sort((a,b)=>{return b.bid - a.bid})
    const [currentBid, setCurrentBid]= useState(state.bids.sort((a,b)=>{return b.bid-a.bid}))
    console.log(state.bids.sort((a,b)=>{return b.bid-a.bid}))
    console.log(currentBid[0].bid)
    const bids = state.bids
    bids.sort((a,b)=>{return b.bid-a.bid})
    console.log(bids[0])

    const [myBid, setMyBid]=useState(bidIncrement + state.currentBid)

    useEffect(() => {
        console.log('the age has changed', myBid)
     }, [myBid])
    //dispatch({type: 'ONCHANGE_BID', payload: myBid } );
    const onAdd=(e)=>{
        e.preventDefault()

        console.log(typeof(myBid))
        console.log(state.myBid)

        console.log(typeof(state.myBid))
        
        console.log(myBid + ' ' + bidIncrement)
        setMyBid(+myBid + +bidIncrement)
        /*
        console.log(+myBid + +bidIncrement)
        onChangeBid(e, myBid+bidIncrement)
        console.log(state.myBid)
        console.log(myBid)*/
        dispatch({type: 'ONCHANGE_BID', payload: myBid } );
        console.log(state.myBid)

    }

    const onDeduct=(e)=>{
        e.preventDefault()
        if ((myBid - bidIncrement) > state.currentBid){
        setMyBid(myBid-bidIncrement)
        /*
        onChangeBid(e, myBid-bidIncrement)*/
        dispatch({type: 'ONCHANGE_BID', payload: myBid } );
        }
//(e) => this.props.onClick(e, 'home', 'Home'

    }

    const onPlaceBid = async(event) =>{

        event.preventDefault();
        event.stopPropagation();
        console.log('submitting bid::')
        console.log(event.target)
        //console.log(store)
        console.log(state)
  
        const input = {
          //get time, username, useruid, bid,uid, bid,
          auctionID:auctionID,
          bidderName:state.profile.username,
          bidderID: state.profile.id,
          bid: myBid,
          submittedTime: new Date().toISOString()
          //body: messageBody.trim()
        };
        console.log(state.myBid)
        console.log(input)
        try {
            //setMyBid('');
            await API.graphql(graphqlOperation(createBid, { input }))
          } catch (error) {
            console.warn(error);
          }
    }

    return(
        <div >
        <Grid container direction="row" className={classes.bidPanel} xs={12} justifyContent="space-between">
            <Grid item>
                
        <BidCallingBidPrice lastBid={currentBid[0].bid}/>


            </Grid>


            <Grid item>
<BidCountDownTimer/>
    


            </Grid>
            
        </Grid>
<br/><br/>
        <Grid container  justifyContent='center' alignItems="center" direction='row' spacing={1}>
           
            <Grid item >
            <BidDecButton radius="39" onClick={onDeduct}/></Grid>
            <Grid item>
            <NumberFormat
  customInput={TextField}
  displayType={'text'}
  className={classes.price}
  value={myBid}
  // you can define additional custom props that are all forwarded to the customInput e. g.
  variant="standard"
  thousandSeparator
/></Grid>

<Grid item>
<Typography>HKD</Typography></Grid>
            <Grid item>
            <BidIncButton color='black' radius="39" onClick={onAdd}/></Grid>
        </Grid>



<br/><br/>
        <Grid container direction='row'  alignItems='center' justifyContent='center'>

            <Grid item align='center'>
<BidSubmitButton width='160' height='37.11' color='#A88663' title='Place a bid' onBid={onPlaceBid} auctionID={auctionID}/>
        
        </Grid>
        </Grid>
        

        </div>
    )
}

export default BidPanel

{/* <TextField
id="standard-number"
label=''
type="number"
defaultValue={myBid}
value = {myBid}

InputLabelProps={{
  shrink: true,

}
}
/> */}