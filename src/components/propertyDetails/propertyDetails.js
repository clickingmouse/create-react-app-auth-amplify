import React, {useState} from "react"
import Container from "@material-ui/core/Container"
import BackButton from '../buttons/backButton'
import FavoriteButton from '../buttons/favoriteButton'
import ImageGallery from 'react-image-gallery';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination, Navigation} from 'swiper'
import Grid from "@material-ui/core/Grid"
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Store from '../../store/store'

import CapsuleButton from '../buttons/capsuleButton'
import PropertyDetailsMenu from './propertyDetailsMenu'
import PropertySummary from './propertySummary'
import PropertyMoreInfo from './propertyMoreInfo'
// Import Swiper styles
import 'swiper/swiper.scss';
import "swiper/swiper.min.css";
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import {
//  BrowserRouter as Router,
//  Switch,
//  Route,
  Link,
  useParams
} from "react-router-dom";
import { useHistory } from "react-router-dom";


import AppBar from '@material-ui/core/AppBar';
import Enquire from './enquire'
import Bid from './bid'

import {createBid} from '../../graphql/mutations'

//import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import Slider from "react-slick";
import { Typography } from "@material-ui/core";
// Import css files
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

SwiperCore.use([Navigation, Pagination])

const images = [
    {
      original: require("../../assets/placeholders/駿景園.jpg"),
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: require("../../assets/placeholders/駿景園02.jpg"),
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: require("../../assets/placeholders/駿景園03.jpg"),
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  // bidding stuff





  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,

    },
    appBar:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    wrapper:{
      padding:0
    },
    swiperWrapper:{
      height:287,
      zIndex:-1
    },
    menuWrapper:{
     // position:'absolute'
     marginTop: '-8%'

    },
    swiperWrapperEnd:{
      backgroundColor:'black',
      zIndex:2,
      //position:'absolute'
    },
    swiperContainerEnd:{
    position:'absolute',
      backgroundColor:'#eee',
      color:'black',
      padding:10,
      zIndex:3
    }, 
    summaryWrapper:{
      padding:''
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          margin: theme.spacing(1),
        },
        
    },
    button:{
        display:'flex!important',
        flexDirection:'column',
        //alignItems: 'center'
    },
    oprions:{
justifyContent:"space-apart",
flexGrow:1
    }
    
  }));
const PropertyDetails = ({test, location})=>{
    const classes = useStyles();
    //const { auctionID} = location.state || {}
    //console.log(auctionID)
    let { propertyId } = useParams();
    
    const data = React.useContext(Store)
    console.log(data)
    const properties = data.state.properties
    console.log(properties)
    const property = properties.find(property => property.id == propertyId)
    console.log(property)

    console.log(propertyId)
    const auctions=data.state.auctions
console.log(property.prn)

    const liveAuctionProperty = auctions.find(auction =>  auction.propertyID == property.prn)
    console.log(liveAuctionProperty)
    const auctionDetails = auctions.find(auction => auction.propertyID == property.prn)
    console.log(auctionDetails)
    //const [liveAuction, setLiveAuction] = useState(true)
    // check if auction is live
    const [isLive, setIsLive]=useState(auctionDetails.isLive)
    console.log(isLive)

    const user = React.useContext(Store).state.profile
    console.log(user)

    const bids = data.state.bids
    //const bidIncrement = 10000
    //const [myBid, setMyBid]=useState(bidIncrement + currentCall)
    console.log(bids)

    //setLiveAuction(false)
    //const actionButtons = liveAuction?return(<><button/><button/></>):<button/> 
    const liveAuction = true

    //const auctionId = data.state.properties.find(property=> property.prn= )
    const submitBid =  async(event)=>{
      console.log(data.state)
      console.log('submitting bid for property' + propertyId) 
      event.preventDefault();
      event.stopPropagation();
      console.log('submitting bid::')
      console.log(event.target)
      const input = {
        //get time, username, useruid, bid,uid, bid,
        auctionID:auctionDetails.id,
        bidderName:user.username,
        bidderID: user.id,
        bid: data.state.myBid,
        submittedTime: new Date().toISOString()
        //body: messageBody.trim()
      };
  
      console.log(input)
      try {
        //setMyBid('');
        //await API.graphql(graphqlOperation(createBid, { input }))
      } catch (error) {
        console.warn(error);
      }
    


    }

    return(<>

        <Container xs={12} className={classes.wrapper}>
        <AppBar position="absolute" color="transparent" elevation={0} styles={{color: "transparent!important"}}>
        <Toolbar className={classes.appBar}>
        
        <BackButton radius="39" fill="black" iconColor="white" />
        
        <FavoriteButton radius="39" item={property.id} property={property}/>
        
        </Toolbar>
      </AppBar>

        
        <Swiper
        className={classes.swiperWrapper}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
      pagination
      
    >
      <SwiperSlide ><div height="287" width="375"><img src={require("../../assets/placeholders/駿景園.jpg")} height="287" width="375"/> </div></SwiperSlide>
      <SwiperSlide><img src={require("../../assets/placeholders/駿景園02.jpg")} height="287" width="511"/></SwiperSlide>
      <SwiperSlide><img src={require("../../assets/placeholders/駿景園03.jpg")} height="287"/></SwiperSlide>
      <SwiperSlide><img src={require("../../assets/placeholders/駿景園04.jpg")} height="287"/></SwiperSlide>
      <span slot="wrapper-end" className={classes.swiperWrapperEnd}>Wrapper End</span>
      <span slot="container-end" className={classes.swiperContainerEnd}>Container End</span>
    </Swiper>
<Container>
<Grid container direction="row" justifyContent="center" className={classes.menuWrapper}>
  <Grid item >
    <PropertyDetailsMenu />
  </Grid>
  </Grid>

  <br/>

<PropertySummary className={classes.summaryWrapper} p={property}/>
<PropertyMoreInfo p={property}/>


{liveAuction?<Grid container justifyContent="center" direction="row"  className={classes.options} spacing={2}><Grid item><Enquire/></Grid>  
<Grid item><Bid auctionDetails={auctionDetails} onChange={test} handleSubmit={submitBid} propertyID={propertyId} auctionID={auctionDetails.id}/></Grid></Grid>
:<Grid container direction="row"><CapsuleButton title="Enquire" color="black" width="160" height="37.11"/></Grid> }
</Container>
        </Container>
</>
    )
}

export default PropertyDetails
//position:"fixed"
//<div className="123" styles={{ display:"flex", flexDirection:"row"}}><FavoriteButton radius="39" styles={{flex:1}}/><BackButton radius="39" styles={{flex:1}}/></div>

//<Grid container direction="row" justifyContent="center">
//  <Grid item><PropertyDetailsMenu /></Grid>
//  </Grid>
