import React from 'react'

import CircleButton from './circleButton';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import SmsRoundedIcon from '@material-ui/icons/SmsRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


const ProfileContactUs = ()=>{
return (<>
Contact Us
<hr/>
<Grid container
spacing ={3}
  direction="row"
  justifyContent="center"
  alignItems="center">

      <Grid item>
<CircleButton icon={<SmsRoundedIcon/>}/>
</Grid>
<Grid item><CircleButton icon = {<MailOutlineRoundedIcon/>}/>
</Grid>

<Grid item>
<CircleButton icon={<WhatsAppIcon/>}/>
</Grid>
<Grid item>
<Fab size='medium'><WhatsAppIcon size='large'/></Fab>
</Grid>
</Grid>



</>)
}

export default ProfileContactUs