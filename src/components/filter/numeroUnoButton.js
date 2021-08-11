import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import Store from '../../store/store'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        display:"flex",
        //flex:1,
        width:28,
        //width:props => `${props.radius}px`,
        //height:props => `${props.radius}px`,
        height:28,
        //backgroundColor:props=>`${props.color}`,
        //[{ backgroundColor:isFavorite ? '#A88663':'black'}, styles.capsuleButtonContainer,]
        // backgroundColor:{
        //     favorites.find(favorite=>favorite.id === props.item) ? "#A88663":"black"
        // },
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center",
        
        borderColor:'#A88663',
        borderStyle:'solid',
        borderWidth:1
       
    }
})


const NumeroUnoButton = (props)=>{
    console.log(props)
    console.log(props.property)
    const classes = useStyles(props);
    //classes = {...props, {width:props.width}, {height:props.height}}
    //classes.root.width = props.radius
    //classes.root.height = props.radius
    const store = React.useContext(Store)
    console.log(store)
    const {
        state:{favorites=[]},
        //state,
        dispatch
        } = React.useContext(Store)

    //const favorites = state.favorites

    
    //console.log(store.state.favorites)
    //console.log(favorites)
    //const [favorite, setFavorite] = useState(false)
    //const isFavorite = favorites.find(favorite=>favorite.id === props.item)

    const [isSelected, setIsSelected]=useState(false)

    const handleClick = (event)=>{
        console.log('selected Any')

        //event.stopPropagation();
        event.preventDefault();
        setIsSelected(!isSelected)
        //check if currently favorite
        //isFavorite?console.log('iscurrentlyfavorite'):console.log('is not currently favorite') 
        //isFavorite? dispatch({type: 'TOGGLE_REMOVE_FAVORITE', payload: props.property}) : dispatch({type: 'TOGGLE_ADD_FAVORITE', payload: props.property})
        //const isFavorite = favorites.find(propertyID=>propertyID === props.item)
        //isFavorite?console.log('newly added favorite'):console.log('nog longer favorite')               
       }


    return (
        <div className = {classes.root } 
        style={ {
            backgroundColor:isSelected ? '#A88663':'white',
            color:isSelected ? 'white' : '#A88663'
        
    }} 
        onClick={handleClick}>
        <Typography>1</Typography>
        </div>
    )
}

const styles = {
    Active: {
        backgroundColor: 'orange'
    },
    Inactive: {
        backgroundColor: 'grey'
    },
}

export default NumeroUnoButton