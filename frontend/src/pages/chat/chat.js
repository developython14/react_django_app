import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Offcanvas
  ,OffcanvasHeader
  ,OffcanvasBody,Button
} from 'reactstrap';
import './chat.css';
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
                <Message_componant></Message_componant>

            </div>
            <div className='section2'>
                crej
            </div>
            
        </div>
  
    )
}




function Message_componant(){
    let x = [3,3,4,5,5,6,7,7,9,,6,7,7,9,33,6,7,7,9]
    const Messages = x.map((e)=> {return(
        <div className='d-flex flex-row bg-light col-12 p-3 align-items-start border-bottom border-dark' style={{height:'100px',overflow:'hidden'}}>
        <Avatar alt="Remy Sharp" src="https://media.licdn.com/dms/image/C4E03AQG5Jvo_fUP0Sg/profile-displayphoto-shrink_800_800/0/1629473101419?e=1678320000&v=beta&t=2qzS8vDum0nhhuBwRaAgVQbrYV6RyRc3X0FarZSZs3g" />
        <div className='d-flex flex-column'>
            <h6>Mustapha Belkassam</h6>
            <div >salam alikom  lorede RecordRTC RecordRTCre gsgfsd h</div>
        </div>
        <p>30 m</p>
        </div>
    )});
    return(
        <div className='d-flex flex-column col-12' style={{height:'500px' , overflow:'auto'}}>
        {Messages}
        </div>

    )
}





export {Chat};
