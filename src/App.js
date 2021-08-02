import React, { useEffect, useState, useReducer  } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import aws_exports from './aws-exports';
import Amplify, { API, graphqlOperation, Storage, Auth } from 'aws-amplify';
import {listPropertys, listFavorites} from './graphql/queries'
import {createFavorite} from './graphql/mutations'
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
  const [isLoadingFav, setIsLoadingFav] = useState(true)
  const [isLoadingFavorites, setIsLoaadingFavorites]= useState(true)
  const [properties, setProperties]= useState()
  const [userProfile, setUserProfile]= useState()
  const [state, dispatch]= useReducer(reducer, {favorites:[],properties:[],profile:{}})

  //get properties data

  useEffect(async()=>{
    //checkUser()
     fetchProperties()
    fetchFavorites()
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
      //console.log(property)
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

const checkUser= async()=> {
  //let user = await Auth.currentAuthenticatedUser();
  let user = await Auth.currentUserInfo()
  //setIsLoading(true);
  if (!!user) {  
  console.log(user)
  setUserProfile(user.attributes)
  }
  console.log(userProfile)
  }
//////

const fetchFavorites = async ()=>{
  console.log('...fetching favorites')
  //kevin.alex.ko@gmail.com
  let user = await Auth.currentUserInfo()
  let uid = user.attributes.sub
  console.log(user)
  try {
    setIsLoadingFav(true)
    const favoriteslist = await API.graphql(graphqlOperation(listFavorites, {
      filter:{
        uid:{eq:uid}
      } 
    }
    ))
    console.log(favoriteslist);
    console.log(favoriteslist.data.listFavorites.items.length)
    if (favoriteslist.data.listFavorites.items.length == 0){
      // create new list
      console.log('NO FAVORITE LIST FOUND')  
      try {
    const result = await API.graphql(graphqlOperation(createFavorite,{input:{uid:uid}}))
    console.log('new favoritlist result', + result)
      dispatch({type: 'FETCH_FAVORITES',payload: [] });
      setIsLoadingFav(false)
      } catch (error){ 
        console.log(error)
      }

      
    } else {
      //favoriteslist.data.listFavorites.items[0].properties =  (favoriteslist.data.listFavorites.items[0].properties == null) ? []: favoriteslist.data.listFavorites.items[0].properties 
      console.log('FETCHED FAVORITES IS', favoriteslist.data.listFavorites.items[0].properties)
      console.log(favoriteslist.data.listFavorites.items[0])
      console.log(favoriteslist.data.listFavorites.items)
      //dispatch({type: 'FETCH_FAVORITES', payload: favoriteslist.data.listFavoritess.items[0].savedProperties});
      //dispatch({type: 'FETCH_FAVORITES', payload: ['ab0a6ca3-6c1b-4d0c-9f86-77903ac4bbd0']});
      //favoriteslist.data.listFavorites.items > 0? 
      //dispatch({type: 'FETCH_FAVORITES', payload: favoriteslist.data.listFavoritess.items[0].properties ?favoriteslist.data.listFavoritess.items[0].properties:[]}):
      //dispatch({type: 'FETCH_FAVORITES', payload: favoriteslist.data.listFavoritess.items
      //dispatch({type: 'FETCH_FAVORITES', payload: favoriteslist.data.listFavoritess.items[0].properties ?favoriteslist.data.listFavoritess.items[0].savedProperties:[]}):
      dispatch({type: 'FETCH_FAVORITES', payload: favoriteslist.data.listFavorites.items[0].properties ?favoriteslist.data.listFavorites.items[0].properties:[]})

      setIsLoadingFav(false)
    }

console.log(state)
  }catch(error){
    console.log(error)
  }

}

  const toggleFav =(property)=>{
    //const isFavorite = favorites.find(favorite=>favorite.id === props.item)
    //isFavorite? dispatch({type: 'TOGGLE_REMOVE_FAVORITE', payload: props.property}) : dispatch({type: 'TOGGLE_ADD_FAVORITE', payload: props.property})
  }

//console.log(properties)
  //render() {
    return (<div>
      <Store.Provider value = {{state, dispatch}}>
{isLoading&&isLoadingFav? <p>...Loading...</p>:
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

      <BottomNavigationAction classes={{root:classes.root, wrapper:classes.wrapper, label:classes.label}} label="Saved" icon={<FavoriteBorderOutlinedIcon style={{fill:"white"}} />} component={Link} to='/saved' />

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
