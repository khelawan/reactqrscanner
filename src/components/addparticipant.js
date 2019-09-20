import React from 'react';
import axios from 'axios' 
import useForm from 'react-hook-form';
import Header from './header';


const inputStyle = {
    marginTop:'10px',
    marginBottom:'5px',
    borderRadius: '27px'
}

const heroStyle = {
    padding: '5px 5px 5px',
    borderRadius:'5px',
   
}

const hero ={
  marginBottom:'20px'
}

const AddParticiant =()=>{   
    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const onSubmit = data => {
      console.log(data);
      let _pdataSend = data;
      console.log(_pdataSend);
       _pdataSend.hosted_event_id = localStorage.getItem("hosted_event_id");
      console.log(_pdataSend);
     
      axios.post('https://dstc324xgg.execute-api.us-east-2.amazonaws.com/test/add_participants_on_spot',_pdataSend)
      .then(function(response){
        console.log(response)
        window.alert("Participant added");
        window.location.reload(true);
       
      })
      .catch(function (error) {   
        console.log(error);
        window.alert("Oops! participant Couldnot be added");
      });
    };
    return(
        <div >
        <Header/>
<div className="hero is-primary radius" style={hero}>
  <div className="" style={heroStyle}>
    <div className="container has-text-centered">
      <h2 className="subtitle">
        On Spot Registration
      </h2>
    </div>
  </div>
</div>
        <form onSubmit={handleSubmit(onSubmit)}>    
        <input className="input is-primary" name="name" placeholder='Name' ref={register({ required: true })}   style={inputStyle} />
        {errors.name && 'Name is required.'}  
        <input className="input is-primary" name="email_id"  placeholder='Email-id' style={inputStyle} ref={register({ required: true })}  />
        {errors.email_id && 'Email-id is required.'}
        <input className="input is-primary" name="phone_number"  placeholder='Phone Number' style={inputStyle} ref={register({ pattern: /\d+/ })}  />
        {errors.phone_number && 'Phone number is required.'}
        <input className="input is-primary" name="organisation" placeholder='Organisation' style={inputStyle} ref={register({ required: true })}  />
        {errors.organisation && 'Please enter organisation.'}
        <br></br>
        <div className="has-text-centered">
        <button className="button is-primary is-normal radiusBtn" type="submit">  Register </button>
        <a className="button is-warning is-normal radiusBtn" href="/routele"> Back</a>
        </div>
      </form>
      </div>    
    ) 
}
 
export default  AddParticiant;