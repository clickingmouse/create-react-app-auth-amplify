import React, { useEffect, useState, useReducer  } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import aws_exports from './aws-exports';
import Amplify, { API, graphqlOperation, Storage, Auth } from 'aws-amplify';
import {listPropertys, listFavoritess} from './graphql/queries'
//listPropertys


//import Store from './src/store/store'
//import reducer from './src/reducers/reducer'




import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from './components/landing/landing'
import Favorites from './components/favorites/favorites'
import Profile from './components/profile/profile'
import MyBid from './components/myBid/myBid'

///
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';



Amplify.configure(aws_exports);

const useStyles = makeStyles({
  BottomNavigation: {
    width: 500,
  },
});


//class App extends Component {
const App = () =>{


const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [isLoading, setIsLoading] = useState(true)
  const [properties, setProperties]= useState()
  //get properties data

  useEffect(()=>{
    //checkUser()
    fetchProperties()
    //fetchFavorites()
    //checkUser()
    //fetchFonts()
  },[])

  const fetchProperties = async () =>{
    console.log('fetching propereties...')
    try {
      setIsLoading(true)
      const propertyListData = await API.graphql(graphqlOperation(listPropertys))
      console.log(propertyListData)
   const propertiesList = await Promise.all(propertyListData.data.listPropertys.items.map(async property => {
     const image = await Storage.get(property.coverPhoto)
     property.s3Image = image

    //console.log('properties list', propertiesLisData)
      console.log(property)
      return property
    }))
      setProperties(propertiesList)
      //dispatch({type: 'FETCH_PROPERTIES',payload: propertiesList});
      //-setProperties(propertyListData.data.listPropertys.items)
//
      setIsLoading(false)
      //console.log(properties)
      //console.log(state)

    } catch(error){
      console.log('ERROR', error)
    }
}




console.log(properties)
  //render() {
    return (<div>

<Router>

<Switch>
          <Route path="/explore">
            <Landing />
          </Route>
          <Route path="/saved">
            <Favorites />
          </Route>
          <Route path="/myBid">
            <MyBid />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>

        </Switch>
       
<BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Explore" icon={<RestoreIcon component={Link} to='/explore'/>} />
      <BottomNavigationAction label="Saved" icon={<FavoriteIcon />} component={Link} to='/favorites' />
      <BottomNavigationAction label="MyBid" icon={<LocationOnIcon />} component={Link} to='/myBid'/>
      <BottomNavigationAction label="Profile" icon={<LocationOnIcon />} component={Link} to='/profile'/>
    </BottomNavigation>
    </Router>
</div>
    );
  //}
}


export default withAuthenticator(App);

//export default withAuthenticator(App, true);
