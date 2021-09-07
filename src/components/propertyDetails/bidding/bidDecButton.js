import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import CircleButtonMinus from '../../../assets/svg/CircleButtonMinus.svg'

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
    }
})


const BidDecButton = (props)=>{
    const classes = useStyles(props);

    //classes = {...props, {width:props.width}, {height:props.height}}
//    classes.root.width = props.width
//    classes.root.height = props.height
    
    return (
        <div className = {classes.root} onClick={props.onClick}>
            <img src={CircleButtonMinus} alt=''/>
        </div>
    )
}

export default BidDecButton