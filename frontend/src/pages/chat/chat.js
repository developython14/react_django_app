import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Offcanvas
  ,OffcanvasHeader
  ,OffcanvasBody,Button
} from 'reactstrap';

import _Navbar from '../shared_componant/navbar';
import TextField from '@mui/material/TextField';


function Chat (){
    
    return (
        <div className='d-flex flex-row'>
            <div className='section1'>
                <h3>Message</h3>
                <p>223 Messages , 2 unread</p>
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
            <div className='section2'></div>
            
        </div>
  
    )
}


export {Chat};
