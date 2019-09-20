import React from 'react';
//import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'
import '../components/main.css'


const footerbg ={
    backgroundColor:'#209cee',
    padding:'1rem 1.5rem 1rem'
}

const clearLocalStorage = () =>{
  window.localStorage.clear();
  window.location = '/login'
}

const Footer = (props) => {
    


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
