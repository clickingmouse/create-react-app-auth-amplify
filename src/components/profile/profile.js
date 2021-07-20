import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import ProfileHeader  from './profileHeader';
import MembershipCard from './membershipCard';

import ProfileDetails from './profileDetails'
import ProfileContactUs from './profileContactUs';
const Profile = ()=>{
    return(
        <Container maxWidth="sm" >
            <ProfileHeader/>
            
            <MembershipCard/>
            <ProfileDetails/>
            <ProfileContactUs/>


        </Container>
    )
}

export default Profile