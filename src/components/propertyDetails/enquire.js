import React from 'react'
import CapsuleButton from '../buttons/capsuleButton'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


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
      width: 375,
      height: 165.11,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
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
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          

        </div>
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