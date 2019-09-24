import React from 'react';
//import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'


const imgStyle = {
    maxHeight: '16.75rem'
}

const Header = () => {
  let event_name = localStorage.getItem("event_details");
    event_name = JSON.parse(event_name);
    //console.log(JSON.parse(event_name));
    let display_event_name = event_name.name;
    console.log(display_event_name);
    return(
        <div>
                    <nav className="navbar is-info" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/routele">
                      

                        </a> 
                        <div  className=" tabs title" ><ul className='title1 has-text-centered'>{display_event_name}</ul></div>
                        <div className="">
                        <div className="navbar-end">
                        <div className="navbar-item ">
                          <div className="field is-grouped navbar-end">
                           
                            <p className="control ">
                             
                            </p>
                          </div>
                        </div>
                        </div>
                        </div>
                    </div>
                   </nav>        
        </div>

    );

}
export default Header;
//this header images goes to line 22
//  <img style={imgStyle} src="https://firebasestorage.googleapis.com/v0/b/konfhub.appspot.com/o/'%2Fconference-photos%2F'logo2.png?alt=media&token=f8323ab6-d1f2-41cd-9cc9-dad39aeeefa6" width="112" height="28"></img>