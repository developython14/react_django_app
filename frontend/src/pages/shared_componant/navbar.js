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
    <div>
      <Navbar expand="lg">
        <NavbarBrand href="/">INREPM </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <div className='col-3'><Input placeholder='Search' bsSize=""/></div>
          <Nav className="me-auto d-flex align-items-center justify-content-center" navbar>
            <NavItem>
              <NavLink href="/components/">
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
    </div>
  );
}

export default _Navbar;

export {_Navbar}; 