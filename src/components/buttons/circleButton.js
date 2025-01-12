import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
    root:{
    display:"flex",
    //flex:1,
//        width:43.62,
    width:props => `${props.radius}px`,
    height:props => `${props.radius}px`,
//        height:43.62,
    backgroundColor:props=>`${props.color}`,
    borderRadius:30,
    alignItems:"center",
    justifyContent:"center",
    }
})


const CircleButton = (props)=>{
    const classes = useStyles(props);

    //classes = {...props, {width:props.width}, {height:props.height}}
//    classes.root.width = props.width
//    classes.root.height = props.height
    
    return (
        <div className = {classes.root} onClick={console.log("clicked")}>
            {props.icon}
        </div>
    )
}

export default CircleButton