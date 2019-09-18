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

const styleModal = {
    margin: '0px',
    backgroundColor :'white'
}


const Search = () => {
      
    const [_search, setSearchId] = useState("");

    const [ _searchList , _searchListOn] = useState("modal")

    const handleSubmit = e => {

        localStorage.setItem('search', _search);
        axios.get('https://dstc324xgg.execute-api.us-east-2.amazonaws.com/test/search_participants_details/'+_search)
        .then(function (response) {
          // handle success
           //console.log(response); 
          
          if(response.data == 400){
              window.alert("No Data Found");
            }
            else{
                let seachData = response.data;
                console.log(seachData);
                _searchListOn("modal is-active");
            }   
   
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
               <div>
               <div className={_searchList} >
               <div className="modal-background"></div>
               <div className="modal-card">
               <header className="modal-card-head">
                <p className="modal-card-title">List of Participants</p>
                <button className="delete" aria-label="close"  onClick={() =>{_searchListOn("modal")}}></button>
               </header>
               <section className="modal-card-body" style={styleModal}>
                <h3>hello</h3>
                <h4>khelawan@codeops.tech</h4>
                <h4>CodeOps Technologies LLP</h4>
               </section>
              <footer className="modal-card-foot">
                <button className="button is-success">Check-In</button>
                <button className="button" onClick={() =>{_searchListOn("modal")}}>Cancel</button>
              </footer>
              </div>
              </div>
              </div>
        </div>
    )
   

}

    export default Search;

    // const listItems = seachData.map((number) =>
    // <li key={number.toString()}>
    //   {number}
    // </li>
                                
    //  );