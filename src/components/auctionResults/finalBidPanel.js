import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
//import { classes } from 'istanbul-lib-coverage';
import {Container, Grid, Typography} from '@material-ui/core'


const useStyles = makeStyles({
    container:{

        backgroundColor:'#A88663',
        height:57,
        width:'100%',

    },
    label:{
        fontSize:8,
        color:'white',
    },
    price:{
        fontSize:20,
        color:'white',

    },
    hkd:{        
        fontSize:11,
        color:'white',
},
    date:{        
        fontSize:16,
        color:'white',
}
})


const FinalBidPanel = ()=>{

const classes=useStyles()

    return(

        <div className={classes.container}>
            <Grid direction='column'>
                <Grid item container direction='row'>
                    <Grid item><Typography className={classes.label}>Final Bid Price</Typography></Grid>
                    <Grid item><Typography className={classes.label}>Bid closes in</Typography></Grid>
                </Grid>

                <Grid item container direction='row'>
                    <Grid item container direction='row' xs={6}>

                        <Typography className={classes.price}>6850000</Typography><Typography className={classes.white}>hkd</Typography>
                    </Grid>
                    
                    <Grid item xs={6}><Typography className={classes.date}>11/5/2021</Typography></Grid>
                </Grid>


            </Grid>
        </div>
    )
}

export default FinalBidPanel