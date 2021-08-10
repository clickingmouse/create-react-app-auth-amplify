import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import MapIcon from '../../assets/svg/map.svg'

const useStyles = makeStyles({
    root: {
        display:"flex",
        //flex:1,
//        width:43.62,
        width:props => `${props.width}px`,
        height:props => `${props.height}px`,
//        height:43.62,
        //backgroundColor:props=>`${props.color}`,
        //backgroundColor:'transparent',

        borderRadius:30,
        alignItems:"center",
        justifyContent:"center",
        color:"white",
        borderColor:'#A88663',
        borderStyle:'solid',
        borderWidth:1
       
    },
    title:{
        color:'#A88663',
        fontSize:12

    }
})


const CapsuleButton = (props)=>{
    console.log(props)
    const classes = useStyles(props);
    //classes = {...props, {width:props.width}, {height:props.height}}
    //classes.root.width = props.radius
    //classes.root.height = props.radius
    const handleClick = ()=>{}
    return (
        <div className = {classes.root} onClick={props.onClick}>
         <img src={MapIcon} alt=''/>
        <Typography className={classes.title}>{props.children}{props.title}</Typography>
        </div>
    )
}

export default CapsuleButton