import React from 'react';
//import ReactDOM from 'react-dom';
import axios from 'axios' 


const style2 = {
    width: '70%',
    marginLeft:'10px',
    marginRight:'10px',
    boxShadow: '0px 0px 6px'
}
const divStyle2 = {
    marginTop:'10px',
    marginBottom:'10px'
}
const searchBtn = {
  // width:'100px'
}

const Search = () => {
      
    // const jsonData = () => {
    //     axios.get('/dummyData.json')
    //     .then(function (response) {
    //       // handle success
    //        console.log(response);
               
    //     })
    //     .catch(function (error) {
    //       // handle error
    //       console.log(error);
    //     })
    // }

    // jsonData();
   






    return(
        <div style={divStyle2}>
        <form>
        <input style={style2}  className="input is-rounded search-box" type="text" placeholder="Type the Booking Id"  />
        <a  style={searchBtn} className="button is-primary is-rounded">Search</a>
        </form>
        </div>
    )}

    export default Search;