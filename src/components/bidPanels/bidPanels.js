import React from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core"
import { stubArray } from "lodash";
import { styles } from "dom7";


//#A88663
//OR
//black
const useStyles = makeStyles({
root: {
    display:"flex",
    //flex:1,
//        width:43.62,
    width:'100%',
    height:props => `${props.height}px`,
//        height:43.62,
    //backgroundColor:props=>`${props.color}`,
    backgroundColor:"black",
    borderRadius:30,
    alignItems:"center",
    justifyContent:"center",
    //color:"white",
    
   
}
})

//1. current bid price
//2. your bid price + closing time
//3. final bid price + closing time
//4. final bid price
//5.  Your bid price + closing time


const BidPanel =(props)=>{
const classes = useStyles(props);

    return(
        <div className={styles.root}>
            <Grid container direction="row" justifyContent="space-between">
                <Grid item>
                    <Grid container direction="row">
                    <Typography>{props.title} {props.amt} </Typography><Typography>HKD</Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                    {props.closingtime ==null?"":<><Typography> Bid closes in </Typography><Typography>{props.closingtime}</Typography></>}
                    </Grid>
                    </Grid>
    
            </Grid>
        </div>
    )


}

export default BidPanel