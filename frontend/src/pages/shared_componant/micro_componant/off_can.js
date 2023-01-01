import React,  { useState , Component  } from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import 'bootstrap/dist/css/bootstrap.min.css';
import './off_can.css';
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
import SchoolIcon from '@mui/icons-material/School';
import { color } from '@mui/system';
import Avatar from '@mui/material/Avatar';

import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
  import PropTypes from 'prop-types';
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
        <OffcanvasBody className='d-flex flex-column align-items-center justify-content-start gap-4 rounded-start'>
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
        <div className='d-flex flex-wrap flex-row justify-content-evenly '>

        <div className='d-flex flex-column col-3  align-items-center '>
            <Link to='/chat' ><ChatIcon fontSize='large'></ChatIcon></Link>
            <p>Chat</p>
        </div>
        <div className='d-flex flex-column col-3 align-items-center'>
            <Link><AutoStoriesIcon fontSize='large'></AutoStoriesIcon></Link>
            <p>pages</p>
        </div>
        <div className='d-flex flex-column col-3 align-items-center'>
            <Link><AccountTreeIcon fontSize='large'></AccountTreeIcon></Link>
            <p>Project</p>
        </div>
        <div className='d-flex flex-column col-3 align-items-center'>
            <Link><UnsubscribeIcon fontSize='large'></UnsubscribeIcon></Link>
            <p>Newsletter</p>
        </div>
        <div className='d-flex flex-column col-3 align-items-center'>
            <Link><DocumentScannerIcon fontSize='large'></DocumentScannerIcon></Link>
            <p>Articles</p>
        </div>
        <div className='d-flex flex-column col-3 align-items-center'>
            <Link><EventAvailableIcon fontSize='large'></EventAvailableIcon></Link>
            <p>Events</p>
        </div>
        <div className='d-flex flex-column col-3 align-items-center'>
            <Link><FormatListNumberedRtlIcon fontSize='large'></FormatListNumberedRtlIcon></Link>
            <p>To Do List</p>
        </div>
        <div className='d-flex flex-column col-3 align-items-center'>
            <Link to='/videoconfrence'><VideocamIcon fontSize='large'></VideocamIcon></Link>
            <p>visioconférence</p>
        </div>
        <div className='d-flex flex-column col-3 align-items-center'>
            <Link><ChairIcon fontSize='large'></ChairIcon></Link>
            <p>salons</p>
        </div>

        <div className='d-flex flex-column col-3 align-items-center'>
            <Link><ChairIcon fontSize='large'></ChairIcon></Link>
            <p>salons</p>
        </div>
        <div className='d-flex flex-column col-3 align-items-center'>
            <Link><SchoolIcon fontSize='large'></SchoolIcon></Link>
            <p>Formations</p>
        </div>
        <div className='d-flex flex-column col-3 align-items-center'>
            <Link><SchoolIcon fontSize='large'></SchoolIcon></Link>
            <p>Organigramme</p>
        </div>
        </div>

    );
  }




  function Drop_profile({ direction, ...args }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggle = () => setDropdownOpen((prevState) => !prevState);
  
    return (
      <div className="d-flex">
        <Dropdown size='lg' isOpen={dropdownOpen} toggle={toggle} direction={direction} >
          <DropdownToggle caret color='light'>
            <div className='d-flex flex-column'>
            <Avatar alt="Remy Sharp" src="https://media.licdn.com/dms/image/C4E03AQG5Jvo_fUP0Sg/profile-displayphoto-shrink_800_800/0/1629473101419?e=1678320000&v=beta&t=2qzS8vDum0nhhuBwRaAgVQbrYV6RyRc3X0FarZSZs3g" />
            </div>
          </DropdownToggle>
          <DropdownMenu {...args} >
            <div className='d-flex flex-column'>
            <Avatar alt="Remy Sharp" src="https://media.licdn.com/dms/image/C4E03AQG5Jvo_fUP0Sg/profile-displayphoto-shrink_800_800/0/1629473101419?e=1678320000&v=beta&t=2qzS8vDum0nhhuBwRaAgVQbrYV6RyRc3X0FarZSZs3g" />
            <div className='d-flex flex-column'>
                <h5>Belkassam Mustapha</h5>
                <p>Software enginer</p>
            </div>
            <Button color='light'>open profile</Button>
            </div>
            <DropdownItem header>Profile</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem text>Help</DropdownItem>
            <DropdownItem disabled>Language</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Log out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
  
  Drop_profile.propTypes = {
    direction: PropTypes.string,
  };
  




export {Off_canvas ,Drop_profile}