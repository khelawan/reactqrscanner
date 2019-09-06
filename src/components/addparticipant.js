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
                    <a class="button is-fullwidth">Add Particiapnts</a>
                    </div>
                <div class="field" style={formStyle} id='forms'>
                    <div class="control" style={style}>
                    <input class="input is-primary" type="text" placeholder="Name"/>
                    </div>
                    <div class="control" style={style}>
                    <input class="input is-primary" type="text" placeholder="Email-id"/>
                    </div>
                    <div class="control" style={style}>
                    <input class="input is-primary" type="text" placeholder="Phone"/>
                    </div>
                    <div class="control" style={style}>
                    <input class="input is-primary" type="text" placeholder="Organisation"/>
                    </div>
                </div>
           
        </div>
        
    )

    const showAddparticipant = () =>{
        
    }
}
 
export default  AddParticiant;