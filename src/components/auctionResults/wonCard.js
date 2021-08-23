import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
        height: 87,
        width:140
    },
  });



const WonCard = ()=>{
    const classes = useStyles();
    return(
    <>
    <div>
    <Card>
        <CardMedia
                  className={classes.media}
                  image={require("../../assets/placeholders/currentBid.png")}
                  title="Contemplative Reptile"
        >
            

        </CardMedia>
        <CardContent>
        <Grid container direction='column'>
        
        <Grid item container direction ='row'></Grid>

        <Grid item><Typography></Typography></Grid>

        <Grid item container direction='column'></Grid>
        </Grid>


        </CardContent>

    </Card>
    <div> resutl Content</div>
    </div>


    </>
    )
}

export default WonCard