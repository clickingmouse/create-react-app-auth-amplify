import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        display:"flex",
        //flex:1,
//        width:43.62,
        width:props => `${props.radius}px`,
        height:props => `${props.radius}px`,
//        height:43.62,
        //backgroundColor:"#FFFFFF",
        backgroundColor:props=>`${props.fill}`,

        borderRadius:30,
        alignItems:"center",
        justifyContent:"center"
        
       
    }
})


const BackButton = (props)=>{
    let history = useHistory();
    //console.log(props)
    const classes = useStyles(props);
    //classes = {...props, {width:props.width}, {height:props.height}}
    //classes.root.width = props.radius
    //classes.root.height = props.radius
    const handleClick = ()=>{
        console.log('back clicked')
        history.goBack()
    }
    return (
        <div className = {classes.root} onClick={handleClick}>
            
        <ArrowBackIosRoundedIcon style={{fill:props.iconColor}}/>
        </div>
    )
}

export default BackButton