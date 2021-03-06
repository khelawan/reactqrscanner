import React, { useState } from 'react';

import 'bulma/css/bulma.css'
import axios from 'axios' 

let _list = [];



const style = {
    width: '96%',
    marginLeft:'10px',
    marginRight:'10px',
    marginBottom:'10px',
    marginTop: '10px',
    boxShadow: '0px 0px 6px'
}
const bold = {
    fontSize:'18px',
    fontWeight:'500'

}

const List = () =>{
    const [participants, pdata] = useState([]);
    const [_getData, setGetData] = useState(true);

    const hosted_event_id = localStorage.getItem("hosted_event_id");

    const getData = () => {
        if(!_getData)return;
        axios.get('https://xo3dnghur7.execute-api.us-east-2.amazonaws.com/dev/registration_app_get_check_in_details?event_id='+hosted_event_id)
        .then(function (response) { 
            setGetData(false);   
            _list = response.data;
           pdata(response.data);
           console.log(response);
           
           console.log(response.data.length);
           
           localStorage.setItem('checkinLength', response.data.length);
           if(response.data == ''){
               window.alert("No participant checked-in");
           }
      
        })
        .catch(function (error) {
          setGetData(false)  
          console.log(error);
        })
    }
    getData(); 
    function downloadCsv() {
        console.log();
        axios.get('https://dstc324xgg.execute-api.us-east-2.amazonaws.com/test/participants/'+hosted_event_id)
        .then(function (response) { 
            console.log(response.data);
            window.open(response.data);
            })
          }
    return(
        <div className=" is-hoverable">
                    <div className="has-text-centered">
                         <button className="button is-info is-rounded" onClick={e => {downloadCsv()}} >Download CSV</button>
                    </div>
            <input style={style}  className="input is-rounded search-box" type="text" placeholder="Start typing name to search" onChange={e => {pdata(_list.filter(v => {
            return v.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
            }))
            }} /> 
             {
            participants.map(e => {
                return(
             <a className="list-item">
             <p>Name:<span style={bold} className='is-capitalized'> {e.name}</span></p>
             <p>Email-id: {e.email_id}</p>
             <p>Organisation: {e.organisation}</p>
             <p>Checkin Time: {e.check_in_time}</p>
             </a>
                )
            })
        }
       </div>
    )
}

export default List