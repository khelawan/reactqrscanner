import React, {useState} from 'react';

import Test from './qr';
import Header from './header';
import Search from './search';
import List from './list';
import AddParticiant from './addparticipant';
//import Login from './login';


function Routele() {

    //  if(localStorage.getItem("eventId") != null || localStorage.getItem("eventId") != undefined || localStorage.getItem("eventId") != "") {
    //     props.history.push('/routele');
    // }

    const [show, setShow] = useState(true);
    let event_name = localStorage.getItem("event_details");
    event_name = JSON.parse(event_name);
    //console.log(JSON.parse(event_name));
    let display_event_name = event_name.name;
    console.log(display_event_name);

    return (
      <div >
          <Header/>  
          
          <div  className=" tabs is-centered  is-toggle title" ><ul className='title1'>{display_event_name}</ul></div>
          <div className="tabs is-toggle is-centered">
          <ul>
            <li className="" onClick={e => {setShow(true)}}>
              <a>      
            <span>Scan QR Code</span>
              </a>
            </li>
            <li onClick={e => {setShow(false)}}>
              <a>
                <span>Participants List</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          {
              (()=>{
                  if(show){
                    return( <div><Search/><Test/>
                      <AddParticiant/>
                      
                      </div>)
                  }else{
                    return <List/>
                  }
              })()
          }
          </div>
      </div>
    
    );
  }
  
  export default Routele;