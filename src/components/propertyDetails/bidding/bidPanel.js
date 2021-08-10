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

const BidPanel = ({bidIncrement})=>{
    const classes = useStyles();
    //const bidIncrement = 10000
    const [myBid, setMyBid]=useState(bidIncrement)


    const onAdd=(e)=>{
        e.preventDefault()
        setMyBid(myBid+bidIncrement)

    }

    const onDeduct=(e)=>{
        e.preventDefault()

        setMyBid(myBid-bidIncrement)

    }

    return(
        <>
        <Grid container direction="row" className={classes.bidPanel} xs={12} justifyContent="space-between">
            <Grid item>
                
        <BidCallingBidPrice/>


            </Grid>


            <Grid item>
<BidCountDownTimer/>
    


            </Grid>
            
        </Grid>

        <Grid container>
            <BidDecButton radius="39" onClick={onDeduct}/>{myBid}<BidIncButton radius="39" onClick={onAdd}/>
        </Grid>

        <Grid container>
<BidSubmitButton width='160' height='37.11' color='#A88663' title='Place a bid'/>
        </Grid>

        </>
    )
}

export default BidPanel