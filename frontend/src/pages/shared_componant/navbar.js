import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Input,Offcanvas
  ,OffcanvasHeader
  ,OffcanvasBody,Button,Col
} from 'reactstrap';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Off_canvas ,Drop_profile} from './micro_componant/off_can';
function _Navbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar expand="lg" color="light"  className='ps-5 '>
        <NavbarBrand href="/">INREPM </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <div className='col-3'> <Input></Input></div>
        <Collapse isOpen={isOpen} navbar  className='justify-content-end'>
            <Nav navbar>
            <NavItem>
              <NavLink href="/">
                <div className='d-flex flex-column align-items-center'>
                <HomeIcon></HomeIcon>
                <p>Home</p>
                </div>
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">
                <div className='d-flex flex-column align-items-center'>
                <PersonAddIcon></PersonAddIcon>
                <p>My Network</p>
                </div>
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">
                <div className='d-flex flex-column align-items-center'>
                <EmailIcon></EmailIcon>
                <p>Messenger</p>
                </div>
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">
                <div className='d-flex flex-column align-items-center'>
                <NotificationsIcon></NotificationsIcon>
                <p>Notifications</p>
                </div>
                </NavLink>
            </NavItem>
            <NavItem>
            <Drop_profile></Drop_profile>
            </NavItem>
            <NavItem>
          <Off_canvas></Off_canvas>       
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default _Navbar;

export {_Navbar}; 