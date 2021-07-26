import React from 'react';
import PropertyListHeader from './propertyListHeader';
import Container from '@material-ui/core/Container';
import CardPlaceHolder from './cardPlaceHolder'
import PropertyListCard from './propertyListCard';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Store from '../../store/store'

const PropertiesList = ({propertyType})=>{
    const data = React.useContext(Store)
    console.log(data)
    const properties = data.state.properties
    console.log(properties)
    const propertiesOfType = properties.filter(property => property.propertyType == '1')
    console.log(propertiesOfType)

    const list = properties.map((property, index )=>{
    return(
        <ListItem key={property.id}>
            <PropertyListCard propertyid= {property.id}/>
        </ListItem>
    )        
    } ) 

    return(
        <Container>
            <PropertyListHeader/>
            <List>
                {list}


            </List>



        </Container>
    )
}

export default PropertiesList
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