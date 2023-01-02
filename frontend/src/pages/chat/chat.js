import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Offcanvas
  ,OffcanvasHeader
  ,OffcanvasBody,Button
} from 'reactstrap';

import _Navbar from '../shared_componant/navbar';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';


function Chat (){
    
    return (
        <div className='d-flex flex-row'>
            <div className='section1'>
                <h3>Message</h3>
                <p>223 Messages , 2 unread</p>
                <TextField id="outlined-basic" label="Search" variant="outlined" />
                <div className='d-flex flex-column'>
                <Message_componant></Message_componant>

                </div>
            </div>
            <div className='section2'></div>
            
        </div>
  
    )
}




function Message_componant(){
    return(
        <div className='d-flex flex-row col-7 bg-light p-3 align-items-start'>
        <Avatar alt="Remy Sharp" src="https://media.licdn.com/dms/image/C4E03AQG5Jvo_fUP0Sg/profile-displayphoto-shrink_800_800/0/1629473101419?e=1678320000&v=beta&t=2qzS8vDum0nhhuBwRaAgVQbrYV6RyRc3X0FarZSZs3g" />
        <div className='d-flex flex-column'>
            <h6>Mustapha Belkassam</h6>
            <p>loca FormatListNumberedRtl fwefwwer fsd sfsfsdfsd  fdsaf </p>
        </div>
        <p>30 m</p>
        </div>
    )
}





export {Chat};
