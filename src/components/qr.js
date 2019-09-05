import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import axios from 'axios' 
import 'bulma/css/bulma.css'


let _pdata = "";

let modalClass="modal";

const modalStyle = {
    backgroundColor: 'white',
    zIndex: 1,
    borderRadius:'5px'
}

class Test extends Component {
    
  constructor(props){
      super(props)
    this.state = {
        modalClass:"modal "
    }
  }

  componentWillMount(){
    //console.log(this)
  }
  handleScan = data => {
    if (data) {
      this.setState({
        result: data,  
      })
      this.setState({
        modalClass : "modal is-active"
    })
    console.log(this.state);
      const scanData = data;
      console.log(scanData);
      localStorage.setItem("scanData",scanData);
      _pdata = localStorage.getItem("scanData");
      if(_pdata.indexOf("Booking Id:")>-1){
        //console.log(_pdata.indexOf("Booking Id"))
        _pdata = _pdata.split("Booking Id:");
        //console.log(_pdata);
        _pdata = _pdata[1];
        _pdata = _pdata.trim();
        //console.log(_pdata);
      } 
      else{
        //console.log("hello")
        //console.log(_pdata);
      } 
    }
  }
  handleError = err => {
    console.error(err)
  }

  onClickSendData(){
    console.log(_pdata);
    const that = this;
    
    axios.post('https://xo3dnghur7.execute-api.us-east-2.amazonaws.com/dev/registration_app_user_check_in', {
            "booking_id": _pdata   
      })
      .then(function (response) {
        console.log(response);
        localStorage.clear();
        that.setState({
            modalClass : "modal"
        })
        console.log(that.state)
      })
      .catch(function (error) {
        console.log(error);
        localStorage.clear();
      });
}

  render() {
    return (
      <div className='scan'>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        
        <div className={this.state.modalClass}>
        <div className="modal-background"></div>
        <div style={modalStyle}>
        <div className="modal-content">
         <p>{this.state.result}</p>
        </div>
        <a className="button buttonCheck is-success" onClick={() => this.onClickSendData()}>Check-In</a>
        <a className="button is-danger buttonCheck" onClick={() => this.onClickClose()}>close</a>
        </div>
       <button className="modal-close is-large" aria-label="close" onClick={() => this.onClickClose()}></button>
      </div>  
      </div>
    )
  } 

  onClickClose(){
  const that = this;
  that.setState({
    modalClass : "modal"
   })
   console.log(that.state)
  }
}
//<a className="button is-link is-rounded">List</a>

export default Test;
