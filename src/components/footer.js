import React from 'react';
//import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'
import '../components/main.css'


const footerbg ={
    backgroundColor:'#209cee',
    padding:'1rem 1.5rem 1rem'
}

const Footer = (props) => {
return(
    <footer className="footer" style={footerbg}>
    <div className="columns is-mobile">
    <div className="column is-vcentered">
    <label className="label islabel">Total Checked-In:999</label>
    </div>
   
    <div className="column has-text-centered ">
    <button className="button is-success is-inverted islabel " onClick={e=>{props.props.history.push("/AddParticiant")}} >Add</button>
    </div>
  </div>
    </footer>
)
};

export default Footer;
