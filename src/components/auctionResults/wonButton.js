import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        display:"flex",
        //flex:1,
        width:156,
        //width:props => `${props.width}px`,
        //height:props => `${props.height}px`,
        height:37.11,
        backgroundColor:props=>`${props.color}`,
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center",
        color:"white",
        
       
    }
})


const WonButton = (props)=>{
    //console.log(props)
    const classes = useStyles(props);
    //classes = {...props, {width:props.width}, {height:props.height}}
    //classes.root.width = props.radius
    //classes.root.height = props.radius
    const handleClick = ()=>{}
    return (
        <div className = {classes.root} onClick={props.onClick}>
            
        <Typography>{props.title}</Typography>
        </div>
    )
}

export default WonButton