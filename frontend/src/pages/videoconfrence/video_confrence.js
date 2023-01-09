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
import { Off_canvas } from '../shared_componant/micro_componant/off_can';
function Video_stream (){
    
    return (
        <div>
         <video autoPlay = {true} controls  height={'400px'} width = {'100%'}>
        <source src="http://techslides.com/demos/sample-videos/small.mp4"
                type="video/mp4" /> 
        </video>
        <div className='container d-flex flex-row justify-content-between' style={{overflow:'scroll',overflowY:'hidden'}}>
        <video autoPlay = {true} controls height={'100px'} width = {'200px'}>
        <source src="http://techslides.com/demos/sample-videos/small.mp4"
                type="video/mp4" /> 
        </video>
        <video autoPlay = {true} controls height={'100px'} width = {'200px'}>
        <source src="http://techslides.com/demos/sample-videos/small.mp4"
                type="video/mp4" /> 
        </video>
        <video autoPlay = {true} controls height={'100px'} width = {'200px'}>
        <source src="http://techslides.com/demos/sample-videos/small.mp4"
                type="video/mp4" /> 
        </video>
        <video autoPlay = {true} controls height={'100px'} width = {'200px'}>
        <source src="http://techslides.com/demos/sample-videos/small.mp4"
                type="video/mp4" /> 
        </video>
        <video autoPlay = {true} controls height={'100px'} width = {'200px'}>
        <source src="http://techslides.com/demos/sample-videos/small.mp4"
                type="video/mp4" /> 
        </video>
        <video autoPlay = {true} controls height={'100px'} width = {'200px'}>
        <source src="http://techslides.com/demos/sample-videos/small.mp4"
                type="video/mp4" /> 
        </video>
        <video autoPlay = {true} controls height={'100px'} width = {'200px'}>
        <source src="http://techslides.com/demos/sample-videos/small.mp4"
                type="video/mp4" /> 
        </video>
        <video autoPlay = {true} controls height={'100px'} width = {'200px'}>
        <source src="http://techslides.com/demos/sample-videos/small.mp4"
                type="video/mp4" /> 
        </video>
        </div>

        <div className='container d-flex flex-row justify-content-between align-items-center border border-primary'>
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
            <Off_canvas></Off_canvas>
          </div>
        </div>
        </div>
  
    )
}

export {Video_stream};