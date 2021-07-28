import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
const useStyles = makeStyles({
    root: {
        display:"flex",
        //flex:1,
//        width:43.62,
        width:props => `${props.radius}px`,
        height:props => `${props.radius}px`,
//        height:43.62,
        backgroundColor:"#A88663",
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center"
        
       
    }
})


const FavoriteButton = (props)=>{
    //console.log(props)
    const classes = useStyles(props);
    //classes = {...props, {width:props.width}, {height:props.height}}
    //classes.root.width = props.radius
    //classes.root.height = props.radius
    const handleClick = ()=>{}
    return (
        <div className = {classes.root} onClick={handleClick}>
            
        <FavoriteBorderIcon style={{fill:'white'}}/>
        </div>
    )
}

export default FavoriteButton