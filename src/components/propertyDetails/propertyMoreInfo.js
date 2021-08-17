import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid'
import CapsuleFAB from '../buttons/capsuleFAB'
import LocationIcon from '../../assets/svg/location.svg'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize:15,
      //theme.typography.pxToRem(15),
      flexBasis: '60%',
      flexShrink: 0,
      backgroundColor:"#FBFBFB",
color:"#A88663",

    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    accordianHeader:{
      '&:before': {
        display: 'none',
      },
      backgroundColor:'#F3F3F3'

    },
    label:{
      fontSize:13,
      color:"#A88663"
    },
    address:{
      color:'#3C3C3C',
      fontSize:13
    },
    info:{
      fontSize:13,
      color:"#3C3C3C",
      //alignItems:"flex-start",
      justifyContent:"flex-start"

    },
    facilities:{
      fontSize:13,
      color:"#3C3C3C",
    }
  }));

  const PropertyMoreInfo =({p})=>{
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    return(
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} elevation={0} className={classes.accordianHeader}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1bh-content"
      id="panel1bh-header"
    >
      <Typography className={classes.heading}>Property Details</Typography>
      <Typography className={classes.secondaryHeading}></Typography>
    </AccordionSummary>
    <AccordionDetails>
        <Grid container direction='column'>

        <Grid container direction='row' justifyContent="space-between">
<Grid item xs={7}>
<Typography className={classes.label}>Address</Typography>
<Typography className={classes.address}>{p.address}</Typography>
</Grid>

<Grid item xs={5} container direction='column' alignItems='flex-end' justifyContent='center'>
    
    <CapsuleFAB title="Map View" width="94" height="27.2" color="#A88663" icon={LocationIcon} />
</Grid>
</Grid>

<Grid container direction='row' >
            <Grid item xs={6}>
                <Typography className={classes.label}>Saleable Area: </Typography>
                <Typography className={classes.label}>Gross Area: </Typography>
                <Typography className={classes.label}>Building Age: </Typography>
                <Typography className={classes.label}>Floor Zone: </Typography>
                <Typography className={classes.label}>Property Orientation: </Typography>
                <Typography className={classes.label}>Views:</Typography>
                

            </Grid>
            <Grid item xs={6}>
            <Typography className={classes.info}>{p.saleableArea} sqft </Typography>
                <Typography className={classes.info}>{p.grossArea} sqft </Typography>
                <Typography className={classes.info}>{p.buildingAge}  </Typography>
                <Typography className={classes.info}>{p.floor} level</Typography>
                <Typography className={classes.info}>{p.propertyDirection}</Typography>
                <Typography className={classes.info}>{p.propertyView}</Typography>

            </Grid>
        </Grid>
        <Grid container>
            <Typography className={classes.label}>Clubhouse /& Facilities:</Typography><br/>




            </Grid>

      <Typography className={classes.facilities}>
        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
        maximus est, id dignissim quam.
      </Typography>
      </Grid>
    </AccordionDetails>
  </Accordion>
    )
  }

  export default PropertyMoreInfo