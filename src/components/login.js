import React,{useState} from 'react';
import Axios from 'axios';
import imgkonfhub from '../components/images/512.png';


const style = {
    marginBottom:'10px',
    marginLeft: '10px',
    marginRight: '10px'
}

const Login = (props) => {
    const [_userId, setUserId] = useState("");
    //console.log(_userId)
    const handleSubmit = e => {

        e.preventDefault();
        localStorage.setItem('eventId', _userId);
        Axios.get('https://dstc324xgg.execute-api.us-east-2.amazonaws.com/test/registration_authentication/'+_userId)
        .then(function(response){
            console.log(response);
            props.history.push('/routele');
        })
        .catch(function (error) {
            // handle error
            console.log(error);
           
          })
    }
  
    return (
        <div>
       <div className="bodyLogin">
        <div className="has-text-centered ">
        <img  src={imgkonfhub}  height="62" width="62"/>
        </div>

                            <form onSubmit={handleSubmit}>
                                <div className="field">  
                                <div style={style}> 
                                    <input className="input" id="userId" name="userId" placeholder="Event Id" value={_userId} onChange={e => {setUserId(e.target.value)}} />
                                 </div>
                                </div>
                                <div className="field">
                                <div className="has-text-centered">
                                    <button type="submit" className="button is-primary is-normal radiusBtn">Check</button>
                                 </div>
                                </div>
                             </form>
        </div>
        </div>
    );
};

export default Login;