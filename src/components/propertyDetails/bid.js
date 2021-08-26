import React from 'react'
import CapsuleButton from '../buttons/capsuleButton'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Bidding from './bidding/bidding';
import BidCross from '../../assets/svg/bid-cross.svg'

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
    }
  }));
const Bid = ()=>{
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };


      const body = (
       
        <div style={modalStyle} className={classes.paper}>
          <Grid container direction='row' xs={12} alignItems='center'>
            <Grid item>
          <h2 id="simple-modal-title" className={classes.title}>Place your bid</h2></Grid>
            <Grid item>
           <img src={BidCross} alt='' onClick={handleClose}/></Grid>
          </Grid>
          <p id="simple-modal-description"></p>
          <Bidding/>

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