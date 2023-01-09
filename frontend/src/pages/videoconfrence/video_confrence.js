import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState , Component } from 'react';
import { Offcanvas
  ,OffcanvasHeader
  ,OffcanvasBody,Button
} from 'reactstrap';

import _Navbar from '../shared_componant/navbar';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideocamIcon from '@mui/icons-material/Videocam';
import PanToolIcon from '@mui/icons-material/PanTool';
import IosShareIcon from '@mui/icons-material/IosShare';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
import InfoIcon from '@mui/icons-material/Info';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ChatIcon from '@mui/icons-material/Chat';
function Video_stream (){
    
    return (
        <div>
         <video autoPlay = {true} controls height={'400px'} width = {'100%'}>
        <source src="http://techslides.com/demos/sample-videos/small.mp4"
                type="video/mp4" /> 
        </video>

        <div className='container d-flex flex-row justify-content-between'>
          <div className='d-flex flex-row justify-content-center'>
            <p>01:15</p>
            <p>fsdfas-fdsdfas</p>
          </div>
          <div className='d-flex flex-row justify-content-evenly'>
            <Button className='m-1'>
              <KeyboardVoiceIcon></KeyboardVoiceIcon>
            </Button>
            <Button className='m-1'>
              <VideocamIcon></VideocamIcon>
            </Button>
            <Button className='m-1'>
              <PanToolIcon></PanToolIcon>
            </Button>
            <Button className='m-1'>
              <IosShareIcon></IosShareIcon>
            </Button>
            <Button className='m-1'>
              <PhoneDisabledIcon></PhoneDisabledIcon>
            </Button>
          </div>
          <div className='d-flex flex-row justify-content-evenly'>
            <Button className='m-1'>
              <InfoIcon></InfoIcon>
            </Button>
            <Button className='m-1'>
              <PeopleAltIcon></PeopleAltIcon>
            </Button>
            <Button className='m-1'>
              <ChatIcon></ChatIcon>
            </Button>
          </div>
        </div>
        </div>
  
    )
}

export {Video_stream};