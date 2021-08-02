import React,{useState} from 'react';
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


const ListingFavoriteButton = (props)=>{
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

    console.log(store.state.favorites)
    //console.log(store.state.favorites[0])
    console.log(typeof(favorites))
    console.log(favorites)
    console.log(favorites[0])

    const [favorite, setFavorite] = useState(false)
    const isFavorite = favorites.find(favorite=>favorite.id === props.item)
    console.log(isFavorite)






    const handleClick = ()=>{




        //check if currently favorite
        isFavorite?console.log('iscurrentlyfavorite, removing from favorite'):console.log('is not currently favorite, adding to favorite...') 
        isFavorite? dispatch({type: 'TOGGLE_REMOVE_FAVORITE', payload: props.property}) : dispatch({type: 'TOGGLE_ADD_FAVORITE', payload: props.property})
        //const isFavorite = favorites.find(propertyID=>propertyID === props.item)
        //isFavorite?console.log('newly added favorite'):console.log('nog longer favorite') 
      
        
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

export default ListingFavoriteButton