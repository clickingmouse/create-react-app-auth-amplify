import React, {useReducer, useContext} from 'react'
import CapsuleButton from '../buttons/capsuleButton'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Bidding from './bidding/bidding';
import BidCross from '../../assets/svg/bid-cross.svg'
import BidPanel from './bidding/bidPanel'
//import { useReducer } from 'react';
//import reducer from '../reducers/reducers'
import store from '../../store/store'

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

function getModalStyle() {
    const top = 287 
    const left = 10 
    //const top =225
    //const left = 1
    return {
      //top: `${top}%`,
      //left: `${left}%`,
      top:287,
      left:0
      //transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      flex:1,
      width: "100%",
      height: "60%",
      //height: 165.11,
      //left:0,
      //top:
      backgroundColor: theme.palette.background.paper,
      //border: '2px solid #000',
      //boxShadow: theme.shadows[5],
      //padding: theme.spacing(2, 4, 3),
      //paddingLeft:'5%',
      //paddingRight:'5%'
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35
    },
    wrapper:{
      //top:"287",
      top:'40%',
      left:0,
      display:'absolute',
      width : 375
    },
    title:{
      fontSize:24,
      color:'#A88663',
    },
    closeIcon:{
      position:'absolute',
      right:0,
      paddingRight:'5%'
      //padding: 
      //display:'float',
      //float:'right'
      //marginLeft:'auto'
    },
  }));
  //

const Bid = ({auctionDetails, onChange, handleSubmit, auctionID, propertyID, })=>{
  //const [state, dispatch]= useReducer(reducer)
  //const [userData, dispatch] = useContext(store)
  //const [state, dispatch] = useContext(store)
  const { state, dispatch } = React.useContext(store);
  console.log(state)
  console.log(auctionDetails)

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const handleSubmitBid = async(event)=>{

      
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
        bid: state.myBid,
        submittedTime: new Date().toISOString()
        //body: messageBody.trim()
      };
      console.log(state.myBid)
      console.log(input)
      dispatch({type: 'SEND_BID',payload: auctionID});




    }

      // place your bid modal
      const body = (
       
        <div style={modalStyle} className={classes.paper}>
          <Grid container direction='row' xs={12} alignItems='center' justifyContent='center' >
            <Grid item>
          <h2 id="simple-modal-title" className={classes.title}>Place your bid</h2></Grid>
            <Grid item className={classes.closeIcon}>
           <img src={BidCross} alt='' onClick={handleClose}/></Grid>
          </Grid>
          <p id="simple-modal-description"></p>
          {/**{bidIncrement, currentCall, onBid, onChangeBid} */}
          <BidPanel bidIncrement={auctionDetails.bidIncrement} currentCall={''} onBid={''} onChangeBid={onChange} onSubmitBid={handleSubmitBid} auctionID={auctionID} />
        </div>
       );



    return(
        <>
        <CapsuleButton title="Place Your Bid!" color="#A88663" width="160" height="37.11" onClick={handleOpen} />
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        display="flex"
      >
        {body}
      </Modal>
        
        </>
    )
}


export default Bid
//<Bidding propertyDetails={propertyDetails}/>