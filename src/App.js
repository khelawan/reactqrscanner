import React, {useState} from 'react';
import './App.css';
import './index.css';
import  '../src/components/main.css'
import 'bulma/css/bulma.css'
import * as serviceWorker from './sw';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Routele from '../src/components/routefrmhere';
import Login from '../src/components/login';



const style = {
 'background-color':'black'
}



function App() {
  
 
  return (

    <BrowserRouter>
    <Route path={"/"} exact render={props =><Login style={style} {...props}/>} ></Route>
    <Route path={"/routele"}  component = {Routele} ></Route>
    <Route path={"/login"} render={props =><Login {...props}/>} ></Route>
    <Route path={"/"} exact render={props =><Redirect to="/login"/>} ></Route>
    </BrowserRouter>
  );
}

export default App;

