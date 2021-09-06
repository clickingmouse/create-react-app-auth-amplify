import React, { useEffect, useState, useReducer  } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import aws_exports from './aws-exports';
import Amplify, { API, graphqlOperation, Storage, Auth } from 'aws-amplify';
import {listPropertys, listFavorites, listAuctions, listBids, listMessages} from './graphql/queries'
import { createMessage } from './graphql/mutations';
import { onCreateMessage } from './graphql/subscriptions';

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

import WonAuctions from './components/auctionResults/wonAuctions'
import LostAuctions from './components/auctionResults/lostAuctions'
import AuctionResults from './components/auctionResults/auctionResults'


import BiddingPlayground from './components/biddingPlayground/biddingPlayground'
import AuctionPlayground from './components/biddingPlayground/auctionPlayground'
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

import Filter from './components/filter/filter'
import ExploreIcon from './assets/svg/nav/explore.svg'
import SavedIcon from './assets/svg/nav/saved.svg'
import MyBidIcon from './assets/svg/nav/myBid.svg'
import ProfileIcon from './assets/svg/nav/profile.svg'
import SvgIcon from '@material-ui/core/SvgIcon';

Amplify.configure(aws_exports);



//class App extends Component {
const App = () =>{


const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [isLoadingData, setIsLoadingData]= useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingFav, setIsLoadingFav] = useState(true)
  const [isLoadingFavorites, setIsLoaadingFavorites]= useState(true)
  const [properties, setProperties]= useState()
  const [userProfile, setUserProfile]= useState()
  const [state, dispatch]= useReducer(reducer, {favorites:[],properties:[],profile:{}, auctions:[]})
  const [isLoadingAuctions, setIsLoadingAuctions] =useState(false)
  const [isLoadingBids, setIsLoadingBids] =useState(false)
  const [auctionRooms, setAuctionRooms] = useState([]);
  const [messages, setMessages] = useState([]);
  //const [isLoadingAuctions, setIsLoadingAuctions]= useState(false)
  //const [isLoadingBids, setIsLoadingBids]= useState(false)

  // bidding states
  


  //get properties data
  console.log('<APP.JS>')
  useEffect( ()=>{
    //setIsLoadingData(true)
    //checkUser()
    //fetchProperties()
    //fetchFavorites()
    //checkUser()
    //fetchFonts()
     //fetchAuctionRoom()
    //setIsLoadingData(false)
  },[])

  useEffect (()=>{
    fetchProperties()
  },[])
  useEffect (()=>{
    fetchFavorites()
  },[])
  useEffect (()=>{
    fetchAuctionRoom()
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
  setIsLoadingFav(true)
  console.log('...fetching favorites')
  //kevin.alex.ko@gmail.com
 
  
  try {
    let user = await Auth.currentUserInfo()
    if(!!user){
      const uid = user.attributes.sub

      console.log(user)
      console.log(user.attributes.sub)
      dispatch({type: 'FETCH_USER',payload: user });
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
      
    const result = await API.graphql(graphqlOperation(createFavorite,{input:{uid:uid}}))
    console.log('new favoritlist result', + result)
      dispatch({type: 'FETCH_FAVORITES',payload: [] });
      setIsLoadingFav(false)
      
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
  }
  }catch(error){
    console.log(error)
  }

}

///


const fetchAuctionRoom = async (auctionID) =>{
  setIsLoadingAuctions(true)
  console.log('...loading auctions...')
  
    try{
      setIsLoadingAuctions(true)
      API
        .graphql(graphqlOperation(listAuctions, {
          //filter:{
          //auctionID: auctionID},
          //sortDirection:'ASC',
          
          //sortDirection:'DESC'

       }
      ))
        .then((response) => {
          console.log(response)
          const items = response.data?.listAuctions?.items;
          if (items) {
              setAuctionRooms(items);
              console.log(items)
              dispatch({type: 'FETCH_AUCTIONS',payload: response.data.listAuctions.items });
              //console.log(Store)
              //08-26

              // setLiveAuction
              setLiveAuction(response.data.listAuctions.items.find(auction=>auction.isLive==true))
             

              
          }


        })
      }catch(error){
        console.log('error')
      }

    setIsLoadingAuctions(false)
    }

const [liveAuction, setLiveAuction]=useState()
const [liveAuctionProperty, setLiveAuctionProperty]=useState()
const [myBid, setMyBid]=useState()
const handleBidCall= (event, value)=>{
  console.log(value)
  setMyBid(value)
}

    
    /*
    useEffect(() => {
      try{
        API
          .graphql(graphqlOperation(listMessages))
          .then((response) => {
          const items = response.data?.listMessages?.items;
          
            if (items) {
              setMessages(items);
             
            }
          })
        } catch (error) {
        console.log(error)
        } 
      },[]);
   */
  const fetchBids =()=>{
    setIsLoadingBids(true)
    console.log('...loading bids...')
    
      try{
        
        API
          .graphql(graphqlOperation(listBids, {
            //filter:{
            //auctionID: auctionID},
            //sortDirection:'ASC',
            
            //sortDirection:'DESC'
  
         }
        ))
          .then((response) => {
            console.log(response)
            const items = response.data?.listBids?.items;
            if (items) {
                //setAuctionRooms(items);
                console.log(items)
                dispatch({type: 'FETCH_BIDS',payload: items });
                //console.log(Store)
                
            }
  
  
          })
        }catch(error){
          console.log('error')

  }
  setIsLoadingBids(false)
}

////
useEffect(() => {
  const subscription = API
    .graphql(graphqlOperation(onCreateMessage))
    .subscribe({
      next: (event) => {
        setMessages([...messages, event.value.data.onCreateMessage]);
      },
      error:(error)=>{
        console.log('subscribe', error)
      }
    });
  
  return () => {
    subscription.unsubscribe();
  };
}, [messages]);
/*
const handleChange = (event) => {
  setMessageBody(event.target.value);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  const input = {
    channelID: '1',
    author: 'Dave',
    body: messageBody.trim()
  };

  try {
    setMessageBody('');
    await API.graphql(graphqlOperation(createMessage, { input }))
  } catch (error) {
    console.warn(error);
  }
};
*/
  const toggleFav =(property)=>{
    //const isFavorite = favorites.find(favorite=>favorite.id === props.item)
    //isFavorite? dispatch({type: 'TOGGLE_REMOVE_FAVORITE', payload: props.property}) : dispatch({type: 'TOGGLE_ADD_FAVORITE', payload: props.property})
  }

//console.log(properties)
//<Route path exact path="/">
//<BiddingPlayground />
//</Route>
  //render() {
    return (<div>
      <Store.Provider value = {{state, dispatch}}>
{ isLoading && isLoadingFav  ?   <p>...Loading...{isLoading && isLoadingFav && isLoadingAuctions}</p>:
<Router>

<Switch>  
        <Route  exact path="/">
          <Landing />
        </Route>

          <Route path="/explore">
            <Landing liveAuction={liveAuction} onChangeBid={handleBidCall} myBid={myBid}/>
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
          <Route path="/auctionList">
            <AuctionPlayground  />
          </Route>
          <Route path="/auction/:auctionId">
            <BiddingPlayground  />
          </Route>
          <Route path="/filter">
            <Filter  />
          </Route>
          <Route path="/myAuctions/results">
            <AuctionResults  />
          </Route>
          <Route path="/myAuctions/won">
            <WonAuctions  />
          </Route>
          <Route path="/myAuctions/lost">
            <LostAuctions  />
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
      <BottomNavigationAction classes={{root:classes.root, wrapper:classes.wrapper, label:classes.label }} label="Explore" icon={<img src={require('./assets/svg/nav/explore.svg')}/>}  component={Link} to='/explore'/>} />

      <BottomNavigationAction classes={{root:classes.root, wrapper:classes.wrapper, label:classes.label}} label="Saved" icon={<img src={require('./assets/svg/nav/saved.svg')}/>} component={Link} to='/saved' />

      <BottomNavigationAction classes={{root:classes.root, wrapper:classes.wrapper, label:classes.label}} label="MyBid" icon={<img src={require('./assets/svg/nav/myBid.svg')}/>} component={Link} to='/myBid'/>
      <BottomNavigationAction classes={{root:classes.root, wrapper:classes.wrapper, label:classes.label}} label="Profile"icon={<img src={require('./assets/svg/nav/profile.svg')}/>} component={Link} to='/profile'/>
    </BottomNavigation>
    </Router>}
    </Store.Provider>
</div>
    );
  //}
}


export default withAuthenticator(App);

//export default withAuthenticator(App, true);

{/* <BottomNavigationAction classes={{root:classes.root, wrapper:classes.wrapper, label:classes.label }} label="Explore" icon={<ExploreOutlinedIcon style={{fill:"white"}}/>}  component={Link} to='/explore'/>} />

<BottomNavigationAction classes={{root:classes.root, wrapper:classes.wrapper, label:classes.label}} label="Saved" icon={<FavoriteBorderOutlinedIcon style={{fill:"white"}} />} component={Link} to='/saved' />

<BottomNavigationAction classes={{root:classes.root, wrapper:classes.wrapper, label:classes.label}} label="MyBid" icon={<GavelOutlinedIcon style={{fill:"white"}}/>} component={Link} to='/myBid'/>
<BottomNavigationAction classes={{root:classes.root, wrapper:classes.wrapper, label:classes.label}} label="Profile" icon={<PersonOutlineOutlinedIcon style={{fill:"white"}}/>} component={Link} to='/profile'/> */}


const useStyles = makeStyles({
  root:{
    //padding:'0px 12px 0px 0px',
    padding:0,
    //display:'flex'
    width:'70%'
    
  },
  navigationWrapper:{
    //width:'25%'

  },
  BottomNavigation: {
    //maxWidth: 300,
    //width:'75%',
    height:57,
    position: 'fixed',
    borderRadius:30,
    padding:0,

    //bottom: 23,
    top: '85%',
    //alignContent: 'center',
    left: '50%',
    transform: 'translateX(-50%)',
    //left:'5%',
    backgroundColor:"#000000"
  },
  navWrapper:{
    //width:'283',
    width:'85%',

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
