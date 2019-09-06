import React from 'react';

const style = {
    marginBottom:'10px',
}

const formStyle ={
    display:'none',
}


const AddParticiant =()=>{
    return(
        <div>
                    <div style={style}>
                    <a className="button is-fullwidth">Add Particiapnts</a>
                    </div>
                <div className="field" style={formStyle} id='forms'>
                    <div className="control" style={style}>
                    <input className="input is-primary" type="text" placeholder="Name"/>
                    </div>
                    <div className="control" style={style}>
                    <input className="input is-primary" type="text" placeholder="Email-id"/>
                    </div>
                    <div className="control" style={style}>
                    <input className="input is-primary" type="text" placeholder="Phone"/>
                    </div>
                    <div className="control" style={style}>
                    <input className="input is-primary" type="text" placeholder="Organisation"/>
                    </div>
                </div>
           
        </div>
        
    )

    const showAddparticipant = () =>{
        
    }
}
 
export default  AddParticiant;