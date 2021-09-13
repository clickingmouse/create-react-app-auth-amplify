import React, {useState, useReducer} from 'react'
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


const useStyles = makeStyles({
    wrapper:{
        width:"100%",
        backgroundColor:'black'

    },
    bidPanel:{
        height:61,
        width:"100%",
        backgroundColor:'black'
    }
})

const BidPanel = ({bidIncrement, currentCall, onBid, onChangeBid, onSubmitBid})=>{
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

    const [myBid, setMyBid]=useState(bidIncrement + currentCall)
    const onAdd=(e)=>{
        e.preventDefault()
        console.log(myBid + ' ' + bidIncrement)
        setMyBid(+myBid + +bidIncrement)
        console.log(+myBid + +bidIncrement)
        onChangeBid(e, myBid+bidIncrement)
        console.log(state.myBid)
        console.log(myBid)
        dispatch({type: 'ONCHANGE_BID', payload: myBid } );
        console.log(myBid)

    }

    const onDeduct=(e)=>{
        e.preventDefault()

        setMyBid(myBid-bidIncrement)
        onChangeBid(e, myBid-bidIncrement)
        dispatch({type: 'ONCHANGE_BID', payload: MyBid } );
//(e) => this.props.onClick(e, 'home', 'Home'

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

        <Grid container>
            <BidDecButton radius="39" onClick={onDeduct}/>{myBid}
            <TextField
          id="standard-number"
          label=''
          type="number"
          defaultValue={myBid}
          value = {state.myBid}

          InputLabelProps={{
            shrink: true,

          }
        }
        />
            <BidIncButton color='black' radius="39" onClick={onAdd}/>
        </Grid>

        <Grid container direction='row'  alignItems='center' justifyContent='center'>

            <Grid item align='center'>
<BidSubmitButton width='160' height='37.11' color='#A88663' title='Place a bid' onBid={onSubmitBid}/>
        </Grid>
        </Grid>

        </div>
    )
}

export default BidPanel