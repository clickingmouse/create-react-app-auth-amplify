import React from "react"
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
// Import Swiper styles
import 'swiper/swiper.scss';
import "swiper/swiper.min.css";
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import AppBar from '@material-ui/core/AppBar';

import Slider from "react-slick";
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


  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
const PropertyDetails = ()=>{
    const classes = useStyles();

    return(<>

        <Container xs={12}>
        <AppBar position="absolute" color="transparent" elevation={0} styles={{color: "transparent!important"}}>
        <Toolbar styles={{justifyContent:"space-between"}}>
        <Button>
        <BackButton radius="39"/>
        </Button>
        
        <FavoriteButton radius="39"/>
        
        </Toolbar>
      </AppBar>

        
        <Swiper
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
      
    </Swiper>


        </Container>
</>
    )
}

export default PropertyDetails
//position:"fixed"
//<div className="123" styles={{ display:"flex", flexDirection:"row"}}><FavoriteButton radius="39" styles={{flex:1}}/><BackButton radius="39" styles={{flex:1}}/></div>