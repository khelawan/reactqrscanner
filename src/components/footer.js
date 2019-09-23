import React from 'react';
//import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'
import '../components/main.css'
import axios from 'axios' 



const footerbg ={
    backgroundColor:'#209cee',
    padding:'1rem 1.5rem 1rem'
}

const clearLocalStorage = () =>{
  window.localStorage.clear();
  window.location = '/login'
}
const hosted_event_id = localStorage.getItem("hosted_event_id");
const Footer = (props) => {

                    
                    axios.get('https://xo3dnghur7.execute-api.us-east-2.amazonaws.com/dev/registration_app_get_check_in_details?event_id='+hosted_event_id)
                    .then(function (response) {
                    console.log(response.data.length);
                    localStorage.setItem('checkinLength', response.data.length);
                    })

return(
    <footer className="footer" style={footerbg}>
    <div className="columns is-mobile">
    <div className="column is-vcentered">
    <label className="label islabel">Checked-In: {localStorage.getItem('checkinLength')}</label>
    </div>
    <div className="column align-right ">
    <button className="button is-success is-inverted  radiusBtn" onClick={e=>{props.props.history.push("/AddParticiant")}} >Add</button>
    <a className="button is-primary radiusBtn" onClick={clearLocalStorage} >
    <span>Logout</span>
  </a>
    </div>
  </div>
    </footer>
)
};

export default Footer;
