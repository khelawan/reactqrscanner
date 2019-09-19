import React from 'react';
//import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'


const imgStyle = {
    maxHeight: '16.75rem'
}

const Header = () => {
    return(
        <div>
                    <nav className="navbar is-info" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="#">
                        <img style={imgStyle} src="https://firebasestorage.googleapis.com/v0/b/konfhub.appspot.com/o/'%2Fconference-photos%2F'logo2.png?alt=media&token=f8323ab6-d1f2-41cd-9cc9-dad39aeeefa6" width="112" height="28"></img>
                        </a>
                        
                        <div class="navbar-item">
                          <div class="field is-grouped">
                           
                            <p class="control">
                              <a class="button is-primary float-left" href="https://github.com/jgthms/bulma/releases/download/0.7.5/bulma-0.7.5.zip">
                                <span>Logout</span>
                              </a>
                            </p>
                          </div>
                        </div>
                     
                    </div>
                   

                    
                   </nav>
        </div>

    );

}
export default Header;