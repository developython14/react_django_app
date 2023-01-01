import React,  { useState , Component  } from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import 'bootstrap/dist/css/bootstrap.min.css';

import{Offcanvas
  ,OffcanvasHeader
  ,OffcanvasBody,Button
} from 'reactstrap';
import ChatIcon from '@mui/icons-material/Chat';


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
            Visit More LinkedIn Products
          </strong>
          <div className='d-flex flex-wrap flex-column'>
            <p>cv</p>
            <App_items></App_items>
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </div>;
    }
  }



  function App_items(props){
    return (
        <div className='d-flex flex_column'>
            <ChatIcon></ChatIcon>
        </div>
    );
  }