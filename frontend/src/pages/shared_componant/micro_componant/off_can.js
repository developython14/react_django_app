import React,  { useState , Component  } from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import 'bootstrap/dist/css/bootstrap.min.css';

import{Offcanvas
  ,OffcanvasHeader
  ,OffcanvasBody,Button
} from 'reactstrap';
import ChatIcon from '@mui/icons-material/Chat';
import { Link } from 'react-router-dom';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import UnsubscribeIcon from '@mui/icons-material/Unsubscribe';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import VideocamIcon from '@mui/icons-material/Videocam';
import ChairIcon from '@mui/icons-material/Chair';

class Off_canvas extends Component {
    
    constructor(props){
        super(props);
        this.state = { isopen: false };
        this.updatestate = this.updatestate.bind(this);
    }
    updatestate() {
        console.log('update state fucntion was called');
        this.setState(
            // Important: read `state` instead of `this.state` when updating.
            {isopen: !this.state.isopen}
          )
        console.log('the new state is ' ,  this.state.isopen)
        
    }
    render() {
      return <div>
      <Button
        color="light"
        onClick={this.updatestate}
      >
          <div className='d-flex flex-column align-items-center'>
                <AppsIcon></AppsIcon>
                <p>Apps</p>
                </div>
      </Button>
      <Offcanvas
        direction="end"
        scrollable
        isOpen ={this.state.isopen}
        toggle={this.updatestate}
      >
        <OffcanvasHeader toggle={this.updatestate}>
            Our apps
        </OffcanvasHeader>
        <OffcanvasBody>
          <strong>
            Visit More INREPM Products
          </strong>
            <App_items></App_items>
        </OffcanvasBody>
      </Offcanvas>
    </div>;
    }
  }



  function App_items(){
    return (
        <div className='d-flex flex-wrap flex-row justify-content-evenly'>

        <div className='d-flex flex-column col-3'>
            <Link><ChatIcon fontSize='large'></ChatIcon></Link>
            <p>Chat</p>
        </div>
        <div className='d-flex flex-column col-3'>
            <Link><AutoStoriesIcon fontSize='large'></AutoStoriesIcon></Link>
            <p>pages</p>
        </div>
        <div className='d-flex flex-column col-3'>
            <Link><AccountTreeIcon fontSize='large'></AccountTreeIcon></Link>
            <p>Project</p>
        </div>
        <div className='d-flex flex-column col-3'>
            <Link><UnsubscribeIcon fontSize='large'></UnsubscribeIcon></Link>
            <p>Newsletter</p>
        </div>
        <div className='d-flex flex-column col-3'>
            <Link><DocumentScannerIcon fontSize='large'></DocumentScannerIcon></Link>
            <p>Articles</p>
        </div>
        <div className='d-flex flex-column col-3'>
            <Link><EventAvailableIcon fontSize='large'></EventAvailableIcon></Link>
            <p>Events</p>
        </div>
        <div className='d-flex flex-column col-3'>
            <Link><FormatListNumberedRtlIcon fontSize='large'></FormatListNumberedRtlIcon></Link>
            <p>To Do List</p>
        </div>
        <div className='d-flex flex-column col-3'>
            <Link><VideocamIcon fontSize='large'></VideocamIcon></Link>
            <p>visioconférence</p>
        </div>
        <div className='d-flex flex-column col-3'>
            <Link><ChairIcon fontSize='large'></ChairIcon></Link>
            <p>salons</p>
        </div>

        <div className='d-flex flex-column col-3'>
            <Link><ChairIcon fontSize='large'></ChairIcon></Link>
            <p>salons</p>
        </div>
        <div className='d-flex flex-column col-3'>
            <Link><ChairIcon fontSize='large'></ChairIcon></Link>
            <p>Formations</p>
        </div>
        </div>

    );
  }






export {Off_canvas}