import React,{useState} from 'react';
import axios from 'axios' 
import imgkonfhub from '../components/images/konfhub.png';


const style = {
    marginBottom:'10px',
    marginLeft: '10px',
    marginRight: '10px',
    borderRadius:'34px'
}

const style2 = {
    borderRadius:'20px',
}


const Login = (props) => {
     
    const [_userId, setUserId] = useState("");
      
    if(localStorage.getItem("eventId") != null ) {
        props.history.push('/routele');
        console.log("Routing to scan page")
        return(<div>loading...</div>)
    }
    else{
        const handleSubmit = e => {
        
            localStorage.setItem('eventId', _userId);
            axios.get('https://dstc324xgg.execute-api.us-east-2.amazonaws.com/test/registration_authentication/'+_userId)
            .then(function(response){
                console.log(response.data.hosetd_event_id);
                if(response.data == 400){
                    window.alert("Event Does Not Exist");
                    localStorage.clear();
                    props.history.push('/login');
                }
                else{
                    let event_details = JSON.stringify(response.data);
                    localStorage.setItem('event_details',event_details);
                    localStorage.setItem('hosted_event_id',response.data.hosetd_event_id)
                    props.history.push('/routele');
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
               
              })
              e.preventDefault();
        }
      
        return (
            <div>
             <div className="bodyLogin">
            <div className="has-text-centered ">
            <img className='top' src={imgkonfhub}  width="200"/>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="field">  
            <div style={style} className='top2'> 
                <input className="input" style={style2} id="userId" name="userId" placeholder="Event Id" value={_userId} onChange={e => {setUserId(e.target.value)}} required />
             </div>
            </div>
            <div className="field">
            <div className="has-text-centered ">
                <button type="submit"  className="button is-primary is-normal radiusBtn top3">Login</button>
             </div>
            </div>
            </form>              
            </div>
            </div>
        );
    }   
   
};

export default Login;