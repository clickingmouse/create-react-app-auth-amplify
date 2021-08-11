import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
      width: 300,
    },
    margin: {
      height: theme.spacing(3),
    },
  }));
  
  const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];
  
  function ValueLabelComponent(props) {
    const { children, open, value } = props;
  
    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }
  ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
  };
  function valuetext(value) {
    return `${value}°C`;
  }
  
  export default function PriceSlider() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Typography id="price-slider" gutterBottom>
          
        </Typography>
        <Slider
                 min={0}
                 step={10000}
                 max={12500000}
          defaultValue={20}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-custom"
          //step={10}
          valueLabelDisplay="auto"
          //marks={marks}
          ValueLabelComponent={ValueLabelComponent}
        />
      </div>
    );
  }

{/* <Slider
defaultValue={80}
getAriaValueText={valuetext}
aria-labelledby="discrete-slider-always"
step={10}
marks={marks}
valueLabelDisplay="on"
/> */}

//export default PriceSlider