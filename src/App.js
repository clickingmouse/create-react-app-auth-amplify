import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';




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
