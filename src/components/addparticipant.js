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

const containerWidth ={
  width:'95%',
  
}

const AddParticiant =()=>{   
    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const onSubmit = data => {
      console.log(data);
      let _pdataSend = data;
      console.log(_pdataSend);
       _pdataSend.hosted_event_id = localStorage.getItem("hosted_event_id");
      console.log(_pdataSend);
     
      axios.post('https://dstc324xgg.execute-api.us-east-2.amazonaws.com/test/participants/add-participants',_pdataSend)
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
<div className="hero  radius" style={hero}>
  <div className="" style={heroStyle}>
    <div className="container has-text-centered">
      <h2 className="subtitle">
        On Spot Registration
      </h2>
    </div>
  </div>
</div>
<div className="container" style={containerWidth}>
        <form onSubmit={handleSubmit(onSubmit)}>    
        <input className="input is-info" name="name" placeholder='Name*' ref={register({ required: true })}   style={inputStyle} />
        {errors.name && 'Please enter name'}  
        <input className="input is-info" name="email_id"  placeholder='Email-id*' style={inputStyle} ref={register({ pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}  />
        {errors.email_id && 'Please enter email-id'}
        <input className="input is-info" name="phone_number"  placeholder='Phone Number*' style={inputStyle} ref={register({ pattern: /\d/ })}  />
        {errors.phone_number && 'Please enter phone number'}
        <input className="input is-info" name="organisation" placeholder='Organisation*' style={inputStyle} ref={register({ required: true })}  />
        {errors.organisation && 'Please enter organisation'}
        <br></br><br/>
        <div className="has-text-centered">
        <button className="button is-info is-normal is-rounded" type="submit">Register</button>
        <a className="button  radiusBtn" href="/routele">&nbsp;&nbsp; Back &nbsp;&nbsp;</a>
        </div>
      </form>
      </div>
      </div>    
    ) 
}
 
export default  AddParticiant;