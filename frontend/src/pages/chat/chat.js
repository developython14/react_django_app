import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Offcanvas
  ,OffcanvasHeader
  ,OffcanvasBody,Button
} from 'reactstrap';



function Chat (){
    const [isOpen, setIsOpen] = useState(false);

    const open_handle = () => setIsOpen(!isOpen);
    return (<div>
        <Button
          color="primary"
          onClick={function noRefCheck(){}}
        >
          Open
        </Button>
        <Offcanvas
          scrollable
          toggle={ open_handle}
        >
          <OffcanvasHeader toggle={function noRefCheck(){}}>
            Offcanvas
          </OffcanvasHeader>
          <OffcanvasBody>
            <strong>
              This is the Offcanvas body.
            </strong>
          </OffcanvasBody>
        </Offcanvas>
      </div>)
}


export {Chat};
