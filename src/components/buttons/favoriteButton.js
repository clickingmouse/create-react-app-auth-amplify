import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import Store from '../../store/store'

const useStyles = makeStyles({
    root: {
        display:"flex",
        //flex:1,
//        width:43.62,
        width:props => `${props.radius}px`,
        height:props => `${props.radius}px`,
//        height:43.62,
        //backgroundColor:props=>`${props.color}`,
        //[{ backgroundColor:isFavorite ? '#A88663':'black'}, styles.capsuleButtonContainer,]
        // backgroundColor:{
        //     favorites.find(favorite=>favorite.id === props.item) ? "#A88663":"black"
        // },
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center"
        
       
    }
})


const FavoriteButton = (props)=>{
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
    const [isFavorited, setIsFavorited]= useState()

    console.log(store.state.favorites)
    console.log(favorites)
    const [favorite, setFavorite] = useState(false)
    const isFavorite = favorites.find(favorite=>favorite.id === props.item)

    // useEffect(()=>{

    //     const isFavorite = favorites.find(favorite=>favorite.id === props.item)
    //     console.log(isFavorite)

    //     setIsFavorited(isFavorite)
    //       },[isFavorited])






    const handleClick = (event)=>{
        event.stopPropagation();
        event.preventDefault();
        console.log('adding' + props.item +' to favorites')

        //check if currently favorite
        isFavorite?console.log('iscurrentlyfavorite'):console.log('is not currently favorite') 
        isFavorite? dispatch({type: 'TOGGLE_REMOVE_FAVORITE', payload: props.property}) : dispatch({type: 'TOGGLE_ADD_FAVORITE', payload: props.property})
        //const isFavorite = favorites.find(propertyID=>propertyID === props.item)
        isFavorite?console.log('newly added favorite'):console.log('nog longer favorite') 
      
        
       }

    const handleSave = () => {
        console.log(props.item)
        console.log('favored' + props.item.id)
        //value.addToFavorites(props.item)
    }
    return (
        <div className = {classes.root } style={ {backgroundColor:isFavorite ? '#A88663':'black'}} onClick={handleClick}>
            
        <FavoriteBorderIcon style={{fill:'white', fontSize:"medium"}} />
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

export default FavoriteButton