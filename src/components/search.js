import React, { useState } from "react";
//import ReactDOM from 'react-dom';
import axios from "axios";

const style2 = {
  width: "70%",
  marginLeft: "10px",
  boxShadow: "0px 0px 3px"
};
const divStyle2 = {
  marginTop: "10px",
  marginBottom: "10px"
};
const searchBtn = {
  // width:'100px'
  float:'right',
  marginRight:'10px'
};

const styleModal = {
  margin: "0px",
  backgroundColor: "white"
};

const Search = props => {
  const [searchData, setSearchData] = useState([]);
  const [_search, setSearchId] = useState("");

  const [_searchList, _searchListOn] = useState("modal");

  const [_invalidModal, _invalidModalActive] = useState("modal");

  const [_noPF, _errormsg]  = useState(" ");

  const checkInData = bookingId => {
    console.log(bookingId);
    axios
      .post(
        "https://xo3dnghur7.execute-api.us-east-2.amazonaws.com/dev/registration_app_user_check_in",
        {
          booking_id: bookingId,
          hosted_event_id: localStorage.getItem("hosted_event_id")
        }
      )
      .then(function(response) {
        console.log(response);
        if (response.data == 400) {
          _invalidModalActive("modal is-active");
          _errormsg("Participant Couldnot be Checked-In");
          
        } 
        else if(response.data == 409){
          _invalidModalActive("modal is-active");
          _errormsg("Participant Already Checked-In");
        }
        else {
          _searchListOn("modal");
          _invalidModalActive("modal is-active");
          _errormsg("Participant Checked-In");
        }
      })
      .catch(function(error) {
        console.log(error);
        localStorage.clear();
      });
  };

  const handleSubmit = e => {
    localStorage.setItem("search", _search);
    axios
      .get(
        "https://dstc324xgg.execute-api.us-east-2.amazonaws.com/test/participants/search-participants/"+localStorage.getItem('hosted_event_id')+"/"+_search)
      .then(function(response) {
        if (response.data === 400) {
          _invalidModalActive("modal is-active");
          _errormsg("No Participant Found");
          
        } else {
          setSearchData(response.data);
          _searchListOn("modal is-active");
        }
      })
      .catch(function(error) {
       
        console.log(error);
      });
    e.preventDefault();
  };
  return (
    <div style={divStyle2}>
    
      <form onSubmit={handleSubmit}>
        <input
          style={style2}
          className="input is-rounded search-box"
          type="text"
          id="search"
          placeholder="Search by Name, Ph. no, Email"
          value={_search}
          onChange={e => {
            setSearchId(e.target.value);
          }}
        />
        <button
          type="submit"
          style={searchBtn}
          className="button is-info is-rounded">Search</button>
      </form>
      <div className={_searchList}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">List of Participants</p>
           
          </header>
          <section className="modal-card-body" style={styleModal}>
            {(() => {
              if (searchData.length) {
                return (
                  <div className="list is-hoverable">
                    {console.log(searchData)}
                    {searchData.map(e => {
                      return (
                        <div>
                        <a className="list-item" >
                          <p className='is-capitalized'>Name:{e.name}</p>
                          <p>Email-id: {e.email_id}</p>
                          <p>Booking-id: {e.booking_id}</p>
                        
                        <div className="is-pulled-right">
                        <button className="button is-info is-rounded" onClick={v => {checkInData(e.booking_id);}}>CheckIn</button>
                        </div>
                        <hr></hr>
                        </a>
                        
                        </div>
                      );
                    })}
                  </div>
                );
              } else {
                return <div>No Data</div>;
              }
            })()}
          </section>
          <footer className="modal-card-foot">
            
            <button
              className="button is-danger radiusBtn"
              onClick={() => {
                _searchListOn("modal");
              }}
            >
              Cancel
            </button>
          </footer>
        </div>
      </div>
      
      <div className={_invalidModal}>
      <div className="modal-background"></div>
      <div className="modal-content">
          <header className="modal-card-head">
          <p className="modal-card-title">Warning</p>
        </header>
        <section className="modal-card-body has-text-centered" style={styleModal}>
         <h3>{_noPF}</h3><br>
         </br>
         <button className="button is-info is-rounded" onClick={() => {_invalidModalActive("modal");}}>OK</button>
        </section>
      </div>
    </div>
    </div>
  );
};

export default Search;
