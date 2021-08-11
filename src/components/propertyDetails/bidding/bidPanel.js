import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import BidIncButton  from './bidIncButton'
import BidDecButton from './bidDecButton'
import BidCallingBidPrice from '../../bidPanels/bidCallingBidPrice'
import BidCountDownTimer from '../../bidPanels/bidCountdownTimer'
import BidSubmitButton from './bidSubmitButton'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    bidPanel:{
        height:61,
        width:"100%"
    }
})

const BidPanel = ({bidIncrement, currentCall, onBid, onChangeBid})=>{
    const classes = useStyles();
    //const bidIncrement = 10000
    const [myBid, setMyBid]=useState(bidIncrement + currentCall)


    const onAdd=(e)=>{
        e.preventDefault()
        setMyBid(myBid+bidIncrement)
        onChangeBid(e, myBid+bidIncrement)
    }

    const onDeduct=(e)=>{
        e.preventDefault()

        setMyBid(myBid-bidIncrement)
        onChangeBid(e, myBid-bidIncrement)
//(e) => this.props.onClick(e, 'home', 'Home'

    }

    return(
        <>
        <Grid container direction="row" className={classes.bidPanel} xs={12} justifyContent="space-between">
            <Grid item>
                
        <BidCallingBidPrice lastBid={currentCall}/>


            </Grid>


            <Grid item>
<BidCountDownTimer/>
    


            </Grid>
            
        </Grid>

        <Grid container>
            <BidDecButton radius="39" onClick={onDeduct}/>{myBid}<BidIncButton radius="39" onClick={onAdd}/>
        </Grid>

        <Grid container>
<BidSubmitButton width='160' height='37.11' color='#A88663' title='Place a bid' onBid={onBid}/>
        </Grid>

        </>
    )
}

export default BidPanel