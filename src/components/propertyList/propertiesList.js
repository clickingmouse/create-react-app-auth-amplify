import React from 'react';
import PropertyListHeader from './propertyListHeader';
import Container from '@material-ui/core/Container';
import CardPlaceHolder from './cardPlaceHolder'
import PropertyListCard from './propertyListCard';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
const PropertiesList = ()=>{
    return(
        <Container>
            <PropertyListHeader/>
            
            <List>
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

            </List>



        </Container>
    )
}

export default PropertiesList