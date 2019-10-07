import React ,{useState} from 'react';
//import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'
import '../components/main.css'
import axios from 'axios' 



const footerbg ={
    backgroundColor:'black',
    padding:'1rem 1.5rem 1rem'
}

const clearLocalStorage = () =>{
  window.localStorage.clear();
  window.location = '/login'
}
const hosted_event_id = localStorage.getItem("hosted_event_id");



const Footer = (props) => { 

  const [intvalue,afvalue] = useState('0');
  let value = localStorage.getItem('checkinLength');
  console.log(value);

function handleafvalueChange(e){
  afvalue(localStorage.getItem('checkinLength'));
}

                    axios.get('https://xo3dnghur7.execute-api.us-east-2.amazonaws.com/dev/registration_app_get_check_in_details?event_id='+hosted_event_id)
                    .then(function (response) {
                    console.log(response.data.length);
                    localStorage.setItem('checkinLength', response.data.length);
                    })
return(
    <footer className="footer" style={footerbg}>
    <div className="columns is-mobile">
    <div className="column is-vcentered">
    <label className="label islabel">Checked-In: {localStorage.getItem("checkinLength")}</label>
    </div>
    <div className="column align-right ">
    <button className="button is-info is-inverted  radiusBtn" onClick={e=>{props.props.history.push("/AddParticiant")}} >Spot Registration</button> 
    </div>
    </div>
    <div className='has-text-centered'>
    <a className="button is-info radiusBtn widthfull" onClick={clearLocalStorage} ><span>Change Event</span></a>
    </div>
    </footer>
)
};

export default Footer;
