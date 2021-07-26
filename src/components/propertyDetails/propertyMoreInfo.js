import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize:15,
      //theme.typography.pxToRem(15),
      flexBasis: '60%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }));

  const PropertyMoreInfo =({p})=>{
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    return(
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
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
<Grid item>
{p.address}
</Grid>
<Grid item>
    <button>Map View</button>
</Grid>
</Grid>

<Grid container direction='row' justifyContent="space-between">
            <Grid item>
                Saleable Area: <br/>
                Gross Area: <br/>
                Building Age: <br/>
                Floor Zone: <br/>
                Property Orientation: <br/>
                Views:<br/>
                

            </Grid>
            <Grid item>
            {p.saleableArea} sqft <br/>
                {p.grossArea} sqft <br/>
                {p.buildingAge} <br/>
                {p.floor}<br/>
                {p.propertyDirection}<br/>
                {p.propertyView}<br/>

            </Grid>
        </Grid>
        <Grid container>
            Clubhouse /& Facilities:<br/>




            </Grid>

      <Typography>
        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
        maximus est, id dignissim quam.
      </Typography>
      </Grid>
    </AccordionDetails>
  </Accordion>
    )
  }

  export default PropertyMoreInfo