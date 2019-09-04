import React from 'react';
//import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'


const style = {
    width: '70%',
    marginLeft:'10px',
    marginRight:'10px',
    boxShadow: '0px 0px 6px'
}
const divStyle = {
    marginTop:'10px',
    marginBottom:'10px'
}
const searchBtn = {
   
}

const Search = () => {
    return(
        <div style={divStyle}>
        <form>
        <input style={style}  className="input is-rounded search-box" type="text" placeholder="Type the Booking Id"  />
        <a  style={searchBtn} className="button is-primary is-rounded">Search</a>
        </form>
        </div>
    )}

    export default Search;