import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CircleButtonPlus from '../../../assets/svg/CircleButtonPlus.svg'
// from '../../buttons/circleButton';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles({
    root:{
    display:"flex",
    //flex:1,
//        width:43.62,
    width:props => `${props.radius}px`,
    height:props => `${props.radius}px`,
//        height:43.62,
    backgroundColor:props=>`${props.color}`,
    borderRadius:'50%',
    alignItems:"center",
    justifyContent:"center",
    padding:0,
    margin:0
    },
    symbol:{
        width:'100%',
        height:'100%',
        color:'white',
        alignSelf:'center'
    }
})


const BidIncButton = (props)=>{
    const classes = useStyles(props);

    //classes = {...props, {width:props.width}, {height:props.height}}
//    classes.root.width = props.width
//    classes.root.height = props.height
    
    return (
        <div className = {classes.root} onClick={props.onClick}>
            <img src={CircleButtonPlus} alt=''/>
        </div>
    )
}

export default BidIncButton
//           <Typography className={classes.symbol} align='center'>+</Typography>
