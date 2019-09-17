import React, {useState} from 'react';
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

//let searchData = [{"name": "Srushith", "email_id": "srushith.codeops@gmail.com", "designation": "CodeOps Tech", "organisation": "CodeOps Tech", "phone_number": "8686519259"}, {"name": "Srushith", "email_id": "srushith.codeops@gmail.com", "designation": "CodeOps Tech", "organisation": "CodeOps Tech", "phone_number": "08686519259"}, {"name": "Srushith", "email_id": "srushi007@gmail.com", "designation": "Dev", "organisation": "CodeOps", "phone_number": "08686519259"}, {"name": "Srushith", "email_id": "parikannappan@gmail.com", "designation": "HOE", "organisation": "Codeops", "phone_number": "09986432541"}, {"name": "Srushith", "email_id": "parikannappan@gmail.com", "designation": "Architect", "organisation": "HCL", "phone_number": "09986432541"}]

const Search = () => {
      
    const [_search, setSearchId] = useState("");
    

    const handleSubmit = e => {

        localStorage.setItem('search', _search);
        axios.get('https://dstc324xgg.execute-api.us-east-2.amazonaws.com/test/search_participants_details/'+_search)
        .then(function (response) {
          // handle success
           console.log(response);
               
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        e.preventDefault();
    }

    return(
        <div style={divStyle2}>
        <form onSubmit={handleSubmit}>
        <input style={style2}  className="input is-rounded search-box" type="text" id="search" placeholder="Type the Booking Id" value={_search} onChange={e => {setSearchId(e.target.value)}} />
        <button  type="submit" style={searchBtn} className="button is-primary is-rounded">Search</button>
        </form>
        </div>
    )}

    export default Search;