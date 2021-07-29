import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { classes } from 'istanbul-lib-coverage';

const useStyles = makeStyles({
    root: {
        display:"flex",
        //flex:1,
//        width:43.62,
        width:props => `${props.radius}px`,
        height:props => `${props.radius}px`,
//        height:43.62,
        backgroundColor:"#A88663",
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center"
        
       
    },
    wrapper:{
        width:51,
        height:36,
        backgroundColor:"#A88663",
        borderTopLeftRadius:"50%",
        borderBottomLeftRadius:25,
        position:"absolute"
    },
    circle:{
      width:8,
      height: 8,
      backgroundColor: 'white',
      borderRadius: '50%',
      position: "absolute",
      //top:"50%",
      //position: "relative",
      transform: "translateX(100%) translateY(175%)",
      //translateX:"-50%",
      //translateY:"-50%" 
    },
    line:{
        height:2,
        width:16,
        //length:20,
        backgroundColor: 'white',
        position:"absolute",
        top:"45%",
        left:"8%"
        //translateX:"-300%",
        //translateY:"-200%"
    }

})
const FilterButton = ()=>{


    return(
        <div className={classes.wrapper}>
                      <div className={classes.circle}/>
          <div className={classes.line}/>
        </div>
    )

}


export default FilterButton