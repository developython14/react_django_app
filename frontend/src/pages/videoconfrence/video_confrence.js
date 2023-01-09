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
         <video autoPlay = {true} controls>
        <source src="http://techslides.com/demos/sample-videos/small.mp4"
                type="video/mp4" /> 
        </video>

        <div className='container d-flex flex-row justify-content-evenly'>
          <div className='d-flex flex-row justify-content-center'>
            <p>01:15</p>
            <p>fsdfas-fdsdfas</p>
          </div>
          <div className='d-flex flex-row justify-content-evenly'>
            <Button>
              <KeyboardVoiceIcon></KeyboardVoiceIcon>
            </Button>
            <Button>
              <VideocamIcon></VideocamIcon>
            </Button>
            <Button>
              <PanToolIcon></PanToolIcon>
            </Button>
            <Button>
              <IosShareIcon></IosShareIcon>
            </Button>
            <Button>
              <PhoneDisabledIcon></PhoneDisabledIcon>
            </Button>
          </div>
          <div className='d-flex flex-row justify-content-evenly'>
            <Button>
              <InfoIcon></InfoIcon>
            </Button>
            <Button>
              <PeopleAltIcon></PeopleAltIcon>
            </Button>
            <Button>
              <ChatIcon></ChatIcon>
            </Button>
            <Button>
              <ChatIcon></ChatIcon>
            </Button>

          </div>
        </div>
        </div>
  
    )
}

export {Video_stream};