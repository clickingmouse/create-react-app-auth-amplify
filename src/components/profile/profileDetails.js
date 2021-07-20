import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
const ProfileDetails = ({username, email, contactnumber, referalAgent})=>{


    return(
        <>
        <Grid >
            <Grid item >
                Username <br/>
                {username} - Chrischan01
            </Grid>
        </Grid>
        <Grid>
        <Grid item>
                Email <br/>
                {email} - chrischantaiman01@gmail.com
            </Grid>
        </Grid>
        <Grid>
        <Grid item>
                Contact Number <br/>
                {contactnumber} - 98578393
            </Grid>
        </Grid>
        <Grid>
        <Grid item>
                Referal Agent <br/>
                {referalAgent} - Chris Chan
            </Grid>
        </Grid>
</>


    )

}

export default ProfileDetails