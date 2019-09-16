import React, {useState} from 'react';

import Test from './qr';
import Header from './header';
import Search from './search';
import List from './list';
import AddParticiant from './addparticipant';
//import Login from './login';


function Routele() {
    const [show, setShow] = useState(true);
    return (
      <div >
          <Header/>  
          
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