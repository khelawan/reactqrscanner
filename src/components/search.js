import React, { useState } from "react";
//import ReactDOM from 'react-dom';
import axios from "axios";

const style2 = {
  width: "70%",
  marginLeft: "10px",
  marginRight: "10px",
  boxShadow: "0px 0px 6px"
};
const divStyle2 = {
  marginTop: "10px",
  marginBottom: "10px"
};
const searchBtn = {
  // width:'100px'
};

const styleModal = {
  margin: "0px",
  backgroundColor: "white"
};

const Search = props => {
  const [searchData, setSearchData] = useState([]);
  const [_search, setSearchId] = useState("");

  const [_searchList, _searchListOn] = useState("modal");

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
          window.alert("Invalid QR Code");
        } 
        else if(response.data == 409){
           window.alert("Participant already checked-in")
        }
        else {
          _searchListOn("modal");
          window.alert("Partipant checked-in")
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
        "https://dstc324xgg.execute-api.us-east-2.amazonaws.com/test/participants/search-participants/" +
          _search
      )
      .then(function(response) {
        if (response.data === 400) {
          window.alert("No Data Found");
        } else {
          setSearchData(response.data);
          _searchListOn("modal is-active");
        }
      })
      .catch(function(error) {
        // handle error
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
          className="button is-primary is-rounded"
        >
          Search
        </button>
      </form>

      <div className={_searchList}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">List of Participants</p>
            <button
              className="delete"
              aria-label="close"
              onClick={() => {
                _searchListOn("modal");
              }}
            ></button>
          </header>
          <section className="modal-card-body" style={styleModal}>
            {(() => {
              if (searchData.length) {
                return (
                  <div className="list is-hoverable">
                    {console.log(searchData)}
                    {searchData.map(e => {
                      return (
                        <a
                          className="list-item"
                          onClick={v => {
                            checkInData(e.booking_id);
                          }}
                        >
                          <p className='is-capitalized'>Name: {e.name}</p>
                          <p>Email-id: {e.email_id}</p>
                          <p>Booking-id: {e.booking_id}</p>
                        </a>
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
    </div>
  );
};

export default Search;

// {
//     searchData.map((e)=>
//        <p>e.names</p>

//     )
// }
//<button className="button is-success">Check-In</button>