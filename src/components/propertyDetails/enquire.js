import React from 'react'
import CapsuleButton from '../buttons/capsuleButton'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider'
import Container from '@material-ui/core/Container'

import CircleButton from '../buttons/circleButton';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import SmsRoundedIcon from '@material-ui/icons/SmsRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import BidCross from '../../assets/svg/bid-cross.svg'


function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

function getModalStyle() {
    const top = 60 + rand();
    const left = 50 + rand();
  
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
      //width: 375,
      width:'90%',
      height:'60%',
      //height: 165.11,
      backgroundColor: theme.palette.background.paper,
      //border: '2px solid #000',
      boxShadow: theme.shadows[5],
      //padding: theme.spacing(2, 4, 3),
      //padding:'5%'
      paddingLeft:'5%',
      paddingRight:'5%'

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
    ty:{
      fontSize:32,
      color:'#A88663',
      

    },
    txt:{
      color:'#3D3D3D',
      fontSize:20

    },
    contact:{
      fontSize:'13',
      color:'#A88663'

    }

  }));
const Enquire = ()=>{
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
        <>
        
        <div style={modalStyle} className={classes.paper}>
        <Grid container direction='row' xs={12} alignItems='center' justifyContent='center' >
            <Grid item>
          <h2 id="simple-modal-title" className={classes.title}>Enquire</h2></Grid>
            <Grid item className={classes.closeIcon}>
           <img src={BidCross} alt='' onClick={handleClose}/></Grid>
          </Grid>  
          <p id="simple-modal-description">
            
          </p>

          <Grid Container direction='column' xs={12} alignItems='center' justifyContent='center'>
          
          <Typography className={classes.ty} align='center'>Thank You</Typography>
          <Grid item>          
          <Typography className={classes.txt } align='center'>for your interest!</Typography>
          </Grid>
          </Grid>

          <br/>
          <Typography  className={classes.contact } align='center'> Contact Us</Typography>
          


          <Divider/>
          <Grid container
spacing ={3}
  direction="row"
  justifyContent="center"
  alignItems="center">

      <Grid item>
<CircleButton icon={<SmsRoundedIcon style={{fill:"white"}}/>} radius="43.62" color="#A88663"/> 
</Grid>
<Grid item><CircleButton icon = {<MailOutlineRoundedIcon style={{fill:"white"}}/> }radius="43.62" color="#A88663"/>
</Grid>

<Grid item>
<CircleButton icon={<WhatsAppIcon style={{fill:"white"}}/>} radius="43.62" color="#A88663"/>
</Grid>

</Grid>
</div>

        </>
      );



    return(
        <>
        <CapsuleButton title="Enquire1" color="black" width="160" height="37.11" onClick={handleOpen} />
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
        
        </>
    )
}


export default Enquire