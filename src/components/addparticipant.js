import React from 'react';

const style = {
    marginBottom:'10px',
    marginLeft: '10px',
    marginRight: '10px'
}

const formStyle ={
    display:'block',
}


const AddParticiant =()=>{
    
    return(
                <div>
                    <div style={style}>
                    <a className="button is-fullwidth ">Add Particiapnts</a>
                    </div>
                   <div className="field " style={formStyle} id='forms' >
                    <div className="control" style={style}>
                    <input className="input is-primary" type="text" placeholder="Name" required/>
                    </div>
                    <div className="control" style={style}>
                    <input className="input is-primary" type="text" placeholder="Email-id" required/>
                    </div>
                    <div className="control" style={style}>
                    <input className="input is-primary" type="number" placeholder="Phone" required/>
                    </div>
                    <div className="control" style={style}>
                    <input className="input is-primary" type="text" placeholder="Organisation" required/>
                    </div>
                    <a className="button buttonCheck is-success">Add</a>
                    </div>
           
                 </div>
        
    )

    const showAddparticipant = () =>{
        
    }
}
 
export default  AddParticiant;