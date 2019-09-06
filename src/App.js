import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import  '../src/components/main.css'
import 'bulma/css/bulma.css'
//import App from './App';
import * as serviceWorker from './sw';
import Test from '../src/components/qr';
import Header from '../src/components/header';
import Search from '../src/components/search';
import List from '../src/components/list';
import AddParticiant from '../src/components/addparticipant';


function App() {
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

export default App;

//<div><Search/></div>