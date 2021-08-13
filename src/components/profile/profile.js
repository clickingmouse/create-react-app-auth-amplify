import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import ProfileHeader  from './profileHeader';
import MembershipCard from './membershipCard';

import ProfileDetails from './profileDetails'
import ProfileContactUs from './profileContactUs';
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles({
    container :{height:'100%'},
    details:{height:'40%'}

})
const Profile = ()=>{
    const classes=useStyles()
    return(
        <Container maxWidth="sm" className={classes.container}>
            <ProfileHeader/>
            
            <MembershipCard/>
            <ProfileDetails className={classes.details}/>
            <ProfileContactUs/>


        </Container>
    )
}

export default Profile