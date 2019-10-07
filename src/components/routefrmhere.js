import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



import Test from './qr';
import Header from './header';
import Search from './search';
import List from './list';
import AddParticiant from './addparticipant';
import Footer from './footer';
import "../components/main.css";


const margin = {
marginBottom : '.5rem',
borderRadius: '22px !important'
}
const margin2 = {
  borderRadius: '22px',
  marginRight:'5px',
  marginLeft:'5px'
  }

  const buttoncolor ={
    color:'dodgerblue'
  }


const element = <FontAwesomeIcon icon={faCoffee} />

function Routele(props) {

    //  if(localStorage.getItem("eventId") != null || localStorage.getItem("eventId") != undefined || localStorage.getItem("eventId") != "") {
    //     props.history.push('/routele');
    // }
    //console.log(props);

    const [show, setShow] = useState(true);
    

    if (localStorage.getItem('hosted_event_id') == ''){
       window.location.href('/login');
    }
    else{
      return (
        <div >
            
        <Header/>  
           
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
            </div>
            
            <div className="tabs is-toggle is-centered " style={margin}>
            <ul>
              <li className="" onClick={e => {setShow(true)}}>
                <a style={margin2}>      
              <span style={buttoncolor}><FontAwesomeIcon icon={faCoffee} /></span>
                </a>
              </li>
              <li onClick={e => {setShow(false)}}>
                <a style={margin2}>
                  <span style={buttoncolor}>Checked-in Details</span>
                </a>
              </li>
            </ul>
          </div>
           
            
            

            <Footer props={props} />
        </div>
      
      );
    }

    
  }
  
  export default Routele;

 // 