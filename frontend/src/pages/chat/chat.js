import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Offcanvas
  ,OffcanvasHeader
  ,OffcanvasBody,Button,Input
} from 'reactstrap';
import './chat.css';
import _Navbar from '../shared_componant/navbar';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import AttachmentIcon from '@mui/icons-material/Attachment';


function Chat (){
    
    return (
        <div className='d-flex flex-column'>
   <_Navbar></_Navbar>
        <div className='d-flex flex-row p-5'>
            <div className='section1 p-2'>
                <h3>Message</h3>
                <p>223 Messages , 2 unread</p>
                <TextField id="outlined-basic" label="Search" variant="outlined" className='pb-3' />
                <Message_componant></Message_componant>

            </div>
            <div className='section2 flex-row p-3'>
                <div className='d-flex flex-column ref'>
                    <h6>Mustapha Belkassam</h6>
                    <p>Online</p>
                </div>
                    <Messages></Messages>
                <Input
                    id="exampleText"
                    name="text"
                    type="textarea"
                    placeholder='Write A message'
                    />
                <div className='d-flex flex-row justify-content-between'>
                    <div className='d-flex flex-row'>
                        <Button className='m-2'><ImageIcon></ImageIcon></Button>
                        <Button  className='m-2'><AttachmentIcon></AttachmentIcon></Button>
                    </div>
                    <Button className='m-2'>Send</Button>

                </div>

            </div>
            
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
        <div className='d-flex flex-column col-12' style={{height:'400px' , overflow:'auto'}}>
        {Messages}
        </div>

    )
}

function Messages(){
    let x = [3,3,4,5,5,6,7,7,9,,6,7,7,9,33,6,7,7,9];
    const Messages = x.map((e)=> {return(
        <div className='d-flex flex-row bg-light col-12 p-3 align-items-start justify-content-between' >
        <Avatar alt="Remy Sharp" src="https://media.licdn.com/dms/image/C4E03AQG5Jvo_fUP0Sg/profile-displayphoto-shrink_800_800/0/1629473101419?e=1678320000&v=beta&t=2qzS8vDum0nhhuBwRaAgVQbrYV6RyRc3X0FarZSZs3g" />
        <div className='d-flex flex-column'>
            <h6>Mustapha Belkassam</h6>
            <div >salam alikom  lorede RecordRTC RecordRTCre gsgfsd h</div>
        </div>
        <p>30 m</p>
        </div>
    )})


    return (
        <div className='dissc' style={{overflowY:'scroll' , overflowX:'hidden' , marginBottom:'10px'}}>
            {Messages}
    </div>
    )
    
}





export {Chat};
