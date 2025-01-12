import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BidPanel from '../bidPanels/bidPanels'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';


const useStyles = makeStyles({
  root: {
    maxWidth: 337,
    //height:87
    height:147
  },
  media: {
    height: 87,
    width:140
  },
  bid:{
    height:60,
    width:337,
    backgroundColor:'black',
  }
});

function CurrentBidCard({p}) {
  const classes = useStyles();

  return (
    <>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require("../../assets/placeholders/currentBid.png")}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      <div className={classes.bid}>placeholder</div>
    </Card>
    <BidPanel/>
    </>
  );
}


export default CurrentBidCard