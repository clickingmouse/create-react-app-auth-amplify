import { Timer } from '@material-ui/icons'
import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const CountDownTimer = ()=>{
    const useStyles = makeStyles({
        wrapper:{
            width:"100%",
            backgroundColor:'black',
            
            height:49,
    
        },
        title:{        
            backgroundColor:'black',
        color:'white',
        fontSize:8,
        padding:0,
        lineHeight:1.2
        },
        clock:{       
            color:'white',
        fontSize:20,
        padding:0,
        lineHeight:1.2,
        fontWeight:'bold'},
        timerLabel:{
            fontSize:8,
            color:'#A88663',
            padding:0,
            lineHeight:1.2
        }

    })
    const calculateTimeLeft = (tmp) => {
        let year = new Date().getFullYear();
        // let today = new Date()
        // let tomorrow = new Date(today)

        // let closingDate = tomorrow.setDate(tomorrow.getDate() + 1)
        // let auctionClose = new Date('August 19, 2021 10:30:00');
        // let tmp = new Date()
        // let tmpTime = new Date().getTime()
        // console.log(tmpTime)
        //closingDate = 
        //closingDate.setHours(10)
        //closingDate = 
        //closingDate.setHours(30)

        //console.log(auctionClost)
        //const difference = +new Date(`${year}-10-1`) - +new Date();
        const difference = +tmp - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            //days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };

      const getAuctionClose = ()=>{
          let today = new Date()
          let tomorrow = today
          tomorrow.setDate(today.getDate()+1)
          tomorrow.setHours('00')
          tomorrow.setMinutes('00')
          tomorrow.setSeconds('00')
          console.log(tomorrow.toString())

        return tomorrow

      }
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      const [year] = useState(new Date().getFullYear());
    
      useEffect(() => {
        const tmp = getAuctionClose()
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft(tmp));
        }, 1000);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
        console.log(interval)
        timerComponents.push(
          <span>
            {timeLeft[interval]} {""}{"   "}
          </span>
        );
      });

      const classes = useStyles()
      return (
        <div>
          <div className={classes.wrapper}>
          <Grid container direction='row' justifyContent='center'>
          {timerComponents.length ? <Typography className={classes.clock}>{timerComponents}</Typography> : <span>Time's up!</span>}
          </Grid>
          <Grid item container direction='row' spacing={3} justifyContent='center'>
            <Grid item><Typography className={classes.timerLabel}>Minutes</Typography></Grid>
            <Grid item><Typography className={classes.timerLabel}>Hours</Typography></Grid>
            <Grid item><Typography className={classes.timerLabel}>Seconds</Typography></Grid>
            </Grid>
          </div>
        </div>
      );

}

export default CountDownTimer