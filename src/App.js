import React, { useEffect, useState, useReducer  } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import aws_exports from './aws-exports';
import Amplify, { API, graphqlOperation, Storage, Auth } from 'aws-amplify';
import {listPropertys, listFavoritess} from './graphql/queries'
import Store from './store/store'
import reducer from './reducers/reducers'
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
import PropertiesList from './components/propertyList/propertiesList'
import PropertyDetails from './components/propertyDetails/propertyDetails' 
///
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import GavelOutlinedIcon from '@material-ui/icons/GavelOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
Amplify.configure(aws_exports);

const useStyles = makeStyles({
  root:{
    padding:'0px 12px 0px 0px',
  },
  BottomNavigation: {
    //maxWidth: 300,
    height:57,
    position: 'fixed',
    borderRadius:30,

    //bottom: 23,
    top: 607,
    left:'5%',
    backgroundColor:"#000000"
  },
  navWrapper:{
    width:283,
    height:57,
    borderRadius:30,
    backgroundColor:'black',
    position:'fixed',
    top:'60%',
    left:'10%'


  },
  wrapper:{
    padding:0,
  },


  label:{color:'white'},
});


//class App extends Component {
const App = () =>{


const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [isLoading, setIsLoading] = useState(true)
  const [properties, setProperties]= useState()
  const [state, dispatch]= useReducer(reducer, {})
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
      dispatch({type: 'FETCH_PROPERTIES',payload: propertiesList});
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




//console.log(properties)
  //render() {
    return (<div>
      <Store.Provider value = {{state, dispatch}}>
{isLoading? <p>...Loading...</p>:
<Router>

<Switch>  
          <Route path="/explore">
            <Landing />
          </Route>
          <Route path="/saved">
            <PropertiesList />
          </Route>
          <Route path="/myBid">
            <MyBid />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/placeholder">
            <PropertyDetails />
          </Route>
          <Route path="/residential-listings">
            <PropertiesList propertyType='1' />
          </Route>
          <Route path="/property/:propertyId">
            <PropertyDetails  />
          </Route>
        </Switch>
   
<BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.BottomNavigation}
    >
      <BottomNavigationAction classes={{root:classes.root, wrapper:classes.wrapper, label:classes.label }} label="Explore" icon={<ExploreOutlinedIcon style={{fill:"white"}}/>}  component={Link} to='/explore'/>} />

      <BottomNavigationAction classes={{root:classes.root, wrapper:classes.wrapper, label:classes.label}} label="Saved" icon={<FavoriteBorderOutlinedIcon style={{fill:"white"}} />} component={Link} to='/favorites' />

      <BottomNavigationAction classes={{root:classes.root, wrapper:classes.wrapper, label:classes.label}} label="MyBid" icon={<GavelOutlinedIcon style={{fill:"white"}}/>} component={Link} to='/myBid'/>
      <BottomNavigationAction classes={{root:classes.root, wrapper:classes.wrapper, label:classes.label}} label="Profile" icon={<PersonOutlineOutlinedIcon style={{fill:"white"}}/>} component={Link} to='/profile'/>
    </BottomNavigation>
    </Router>}
    </Store.Provider>
</div>
    );
  //}
}


export default withAuthenticator(App);

//export default withAuthenticator(App, true);
