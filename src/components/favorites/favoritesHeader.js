import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';
import AccountCircle from '@material-ui/icons/AccountCircle';
import BackButton from '../buttons/backButton';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'block',
      color:'#A88663',
      fontSize:24
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const FavoritesHeader=()=> {
  const classes = useStyles();
const handleFilter =()=>{
    console.log('filter clicked')
}
  return (
    <div className={classes.root}>
      <AppBar position="static" color="white" elevation={0}>
        <Toolbar>
            
          <Typography className={classes.title} variant="h6" noWrap>
            Saved
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleFilter}
                color="inherit"
              >
                               <div style={{    width:51,
      height:36,
      backgroundColor:"#A88663",
      borderTopLeftRadius:"50%",
      borderBottomLeftRadius:25,
      position:"absolute"}}>
                      <div style={{width:8,height: 8,
    backgroundColor: 'white',
    borderRadius: '50%',
    position: "absolute",
    transform: "translateX(100%) translateY(165%)"}}/>

          <div style={{height:2,
            width:16,
            //length:20,
            backgroundColor: 'white',
            position:"absolute",
            top:"45%",
            left:"8%"}}/>
        </div>
              </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default FavoritesHeader