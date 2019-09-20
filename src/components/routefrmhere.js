import React, {useState} from 'react';

import Test from './qr';
import Header from './header';
import Search from './search';
import List from './list';
import AddParticiant from './addparticipant';
import Footer from './footer';


const margin = {
marginBottom : '.5rem',
borderRadius: '22px !important'
}
const margin2 = {
  borderRadius: '22px',
  marginRight:'5px',
  marginLeft:'5px'
  }


function Routele(props) {

    //  if(localStorage.getItem("eventId") != null || localStorage.getItem("eventId") != undefined || localStorage.getItem("eventId") != "") {
    //     props.history.push('/routele');
    // }
    //console.log(props);

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
          <div className="tabs is-toggle is-centered" style={margin}>
          <ul>
            <li className="" onClick={e => {setShow(true)}}>
              <a style={margin2}>      
            <span>Scan QR Code</span>
              </a>
            </li>
            <li onClick={e => {setShow(false)}}>
              <a style={margin2}>
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
                      
                      </div>)
                  }else{
                    return <List/>
                  }
              })()
          }
          </div><br/>
          <Footer props={props} />
      </div>
    
    );
  }
  
  export default Routele;