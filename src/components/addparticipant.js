import React from 'react';
import useForm from 'react-hook-form';

const style = {
    marginBottom:'10px',
    marginLeft: '10px',
    marginRight: '10px'
}



const inputStyle = {
    marginTop:'5px',
    marginBottom:'5px'
}

const heroStyle = {
    padding: '5px 5px 5px',
    borderRadius:'5px'
}

const AddParticiant =()=>{

   
    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const onSubmit = data => {
      console.log(data);
    };

    
    return(

        <div style={style}>
        

<section class="hero is-primary radius">
  <div class="" style={heroStyle}>
    <div class="container has-text-centered">
      <h2 class="subtitle">
        Add Participant
      </h2>
    </div>
  </div>
</section>

        <form onSubmit={handleSubmit(onSubmit)}>    
        <input className="input is-primary" name="name" placeholder='Name' ref={register({ required: true })}   style={inputStyle} />
        {errors.name && 'Name is required.'}  
        <input className="input is-primary" name="email"  placeholder='Email-id' style={inputStyle} ref={register({ required: true })}  />
        {errors.email && 'Email-id is required.'}
        <input className="input is-primary" name="phone"  placeholder='Phone Number' style={inputStyle} ref={register({ pattern: /\d+/ })}  />
        {errors.phone && 'Phone number is required.'}
        <input className="input is-primary" name="organisation" placeholder='Organisation' style={inputStyle} ref={register({ required: true })}  />
        {errors.organisation && 'Please enter organisation.'}
        <br></br>
        <button className="button is-primary is-normal" type="submit">add</button>
      </form>
      </div>
        
    )
   
}
 
export default  AddParticiant;