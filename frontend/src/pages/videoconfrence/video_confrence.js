import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Offcanvas
  ,OffcanvasHeader
  ,OffcanvasBody,Button
} from 'reactstrap';

import _Navbar from '../shared_componant/navbar';


function Video_stream (){
    
    return (
        <div>
      <_Navbar></_Navbar>
        <p>hadi video confrence page</p>
        </div>
  
    )
}


export {Video_stream};