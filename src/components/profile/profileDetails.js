import React from 'react'
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    label:{
        fontSize :13,
        color:'#A88663',
    },
    content:{
        fontSize :16,
        color:'#3D3D3D',

    }
})


const ProfileDetails = ({username, email, contactnumber, referalAgent})=>{
    const classes = useStyles();


    return(
        <>
        <Grid >
            <Grid item >
                <Typography className={classes.label}>Username</Typography>
                <Typography className={classes.content} >{username} - Chrischan01</Typography>

                 
                
            </Grid>
        </Grid>
        <Grid>
        <Grid item>
        <Typography className={classes.label} >Email</Typography>
                <Typography className={classes.content} >{email} - chrischantaiman01@gmail.com</Typography>

                 
                
            </Grid>
        </Grid>
        <Grid>
        <Grid item>
        <Typography className={classes.label}>Contact Number</Typography>
                <Typography className={classes.content}>{contactnumber} - 98578393</Typography>

                
                
            </Grid>
        </Grid>
        <Grid>
        <Grid item>
        <Typography className={classes.label}>Referal Agent</Typography>
                <Typography className={classes.content}>{referalAgent} - Chris Chan</Typography>

                
                
            </Grid>
        </Grid>
</>


    )

}

export default ProfileDetails