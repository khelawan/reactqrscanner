import React, { Component }  from 'react'
import QrReader from 'react-qr-reader'
import axios from 'axios' 
import 'bulma/css/bulma.css'


let _pdata = "";
let pname = "";
let pno = "";
let pemail = "";

//let modalClass="modal";
const styleModal = {
  margin: "0px",
  backgroundColor: "white"
};

const modalStyle = {
    backgroundColor: 'white',
    zIndex: 1,
    borderRadius:'5px',
    minWidth:'100%'
}

const styleModalContent = {

  borderRadius:'5px',
  marginTop: '30px'  

}
class Test extends Component {
    
  constructor(props){
      super(props)
    this.state = {
        modalClass:"modal ",
        alertmodal:"modal",
        errormsg:""
    }
   
  }


//  changetext(){
//   this.setState ({
       
//   })
// }

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
        console.log(_pdata.indexOf("Booking Id"))
        _pdata = _pdata.split("Booking Id:");
        //console.log(_pdata);
        _pdata = _pdata[1];
        _pdata = _pdata.trim();
        console.log(_pdata);
         
        pname = scanData.split("Name:");
        pname = pname[1].split("Email Id:");
        pname = pname[0].trim();
        console.log(pname);

        pno = scanData.split("Phone Number:");
        pno = pno[1].split("Booking Id");
        pno = pno[0].trim();
        console.log(pno);

        pemail = scanData.split("Email Id:");
        pemail = pemail[1].split("Phone Number");
        pemail = pemail[0].trim();
        console.log(pemail);
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
            "booking_id": _pdata,"hosted_event_id":localStorage.getItem("hosted_event_id")   
      })
      .then(function (response) {
        
        if(response.data == 400){
          that.setState({
            modalClass : "modal"
          })
         
          that.setState({
            alertmodal:"modal is-active",
            errormsg:"Invalid QR Code"

          })

        }
        else if(response.data == 404){
          that.setState({
            alertmodal:"modal is-active",
            errormsg:"Participant Not Available"

          })
          
        }
        else if (response.data == 409){
           // this.changetext();
          //window.alert("Participant already checked-in")
          that.setState({
            alertmodal:"modal is-active",
            errormsg:"Participant already checked-in"

          })
        }
        else{
          console.log(response);
          that.setState({
            modalClass : "modal",
            alertmodal:"modal is-active",
            errormsg:"Particiapnt Checked-in"

          }) 
         
         // console.log(that.state)

        }      
      })
      .catch(function (error) {
        console.log(error);
        localStorage.clear();
      });
}

  render() {
    return (
      <div>
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
        <div style={styleModalContent}>
        <p>Name: {pname}</p>
        <p>Email Id: {pemail}</p>
        <p>Phone : {pno}</p>
        <p>Booking Id : {_pdata}</p>
        </div> 
        </div>
        <div className="columns">
        <div className="column">
        <a className="button buttonCheck is-success" onClick={() => this.onClickSendData()}>Check-In</a> 
         </div>
        </div>
       </div>
       <button className="modal-close is-large" aria-label="close" onClick={() => this.onClickClose()}></button>
      </div>  



      <div className={this.state.alertmodal}  >
        <div className="modal-background"></div>
        <div className="modal-content">
            <header className="modal-card-head">
            <p className="modal-card-title"></p>
          </header>
          <section className="modal-card-body has-text-centered" style={styleModal}>
           <h3>{this.state.errormsg}</h3><br>
           </br>
           <button className="button is-info is-rounded" onClick={() => this.onClickCloseAlert()} >OK</button>
          </section>
         </div>
         </div>

     
     

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


  onClickCloseAlert(){
    const that = this;
    that.setState({
      alertmodal : "modal"
     })
     console.log(that.state)
    }

}
//<a className="button is-link is-rounded">List</a>

export default Test;
