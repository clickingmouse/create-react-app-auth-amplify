import React, {useEffect,useState} from 'react';
import FavoritesHeader from './favoritesHeader';
import Container from '@material-ui/core/Container';
//import CardPlaceHolder from './cardPlaceHolder'
import PropertyListCard from '../propertyList/propertyListCard';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Store from '../../store/store'

const Favorites = ({propertyType})=>{
    console.log('favorites')
    const data = React.useContext(Store)
    console.log(data)
    const properties = data.state.favorites
//    var list = 'no favorites'
    const [favorites, setFavorites]=useState(data.state.favorites)

    const list = data.state.favorites.map((property, index )=>{
    return(
        <ListItem key={property.id}>
            <PropertyListCard propertyid= {property.id}/>
        </ListItem>
    )        
    } ) 

//<FavoritesHeader/>
    return(<>
        <FavoritesHeader/>
        <Container xs={6}>
           
            <List>
                {list}                


            </List>



        </Container>
        </>
    )
}

export default Favorites
/*
            
                <ListItem>
                    <CardPlaceHolder/>
                </ListItem>
                <ListItem>
                    <PropertyListCard/>
                </ListItem>
                <ListItem>
                    <CardPlaceHolder/>
                </ListItem>
                <ListItem>
                    <CardPlaceHolder/>
                </ListItem>
                <ListItem>
                    <CardPlaceHolder/>
                </ListItem>
*/