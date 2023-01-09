
import{Offcanvas
  ,OffcanvasHeader
  ,OffcanvasBody,Button
} from 'reactstrap';
import InfoIcon from '@mui/icons-material/Info';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ChatIcon from '@mui/icons-material/Chat';

class Info_chat_canvas extends Component {
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
              <InfoIcon></InfoIcon>
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




  class Chat_room_canas extends Component {
    
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
          <ChatIcon></ChatIcon>

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


  
  class Parts_room extends Component {
    
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
          <PeopleAltIcon></PeopleAltIcon>
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

  export {Info_chat_canvas ,Chat_room_canas ,Parts_room }