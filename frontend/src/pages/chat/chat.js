import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Offcanvas
  ,OffcanvasHeader
  ,OffcanvasBody,Button
} from 'reactstrap';

import _Navbar from '../shared_componant/navbar';


function Chat (){
    
    return (
        <div>
      <_Navbar></_Navbar>
        <p>hadi chat page</p>
        </div>
  
    )
}


export {Chat};
