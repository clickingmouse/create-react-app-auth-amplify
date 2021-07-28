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

import KingBedIcon from '@material-ui/icons/KingBed';
import BathtubRoundedIcon from '@material-ui/icons/BathtubRounded';
import HeightRoundedIcon from '@material-ui/icons/HeightRounded';
const useStyles = makeStyles({
  root: {
    maxWidth: 337,
    height:87
  },
  media: {
    height: 87,
    width:140
  },
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
    </Card>
    <BidPanel/>
    </>
  );
}


export default CurrentBidCard