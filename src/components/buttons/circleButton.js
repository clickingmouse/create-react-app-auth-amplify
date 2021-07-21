import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
    root: {
        width:43.62,
        height:43.62,
        backgroundColor:"#A88663",
        borderRadius:30,
       
    }
})


const CircleButton = (props)=>{
    const classes = useStyles();
    //classes = {...props, {width:props.width}, {height:props.height}}
    classes.root.width = props.width
    classes.root.height = props.height
    
    return (
        <div className = {classes.root} onClick={console.log("clicked")}>
            {props.icon}
        </div>
    )
}

export default CircleButton