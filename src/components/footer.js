import React from 'react';
//import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'
import '../components/main.css'


const footerbg ={
    backgroundColor:'teal',
    padding:'1rem 1.5rem 1rem'
}

const Footer = () => {
return(
    <footer className="footer" style={footerbg}>
    <div className="columns is-mobile">
    <div className="column is-vcentered">
    <label className="label islabel">Total Checked-In</label>
    </div>
   
    <div className="column">
    <button className="button is-success is-inverted radiusBtn" >Add Participant</button>
    </div>
  </div>
    <div className="content">   
    </div>
    </footer>
)
};

export default Footer;
