import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import axios from 'axios' 
import 'bulma/css/bulma.css'


class EventId extends Component {
     
  handleScan = data => {
    if (data) {
      this.setState({
        result: data,  
      })
     
      const scanData = data;
      console.log(scanData);
      localStorage.setItem("EventId",scanData);  
    }
    }
     handleError = err => {
     console.error(err)
    }

  onClickSendData(){
    console.log(_pdata);
    const that = this;
    
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
       
         <p>{this.state.result}</p>
     
      </div>
    )
  } 

  
}
//<a className="button is-link is-rounded">List</a>

export default EventId;
