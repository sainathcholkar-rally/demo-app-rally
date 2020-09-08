import React, { useState, useEffect, useContext } from "react"
import './App.css';
import { navigate } from '@reach/router';
import * as api from './services/api';
import Details from './Details';

function App() {
  const [navigateDetails, setnavigateDetails] = useState(false);

  function handleLogin() {
    api.login("").then(response => {
      setnavigateDetails(true)
      const path = "/Details"
      navigate(path);
    }).catch((error) => {
      alert("You are not authorized!")
    });
  }

  return (
    !navigateDetails ?
    <div class="main">
        <p class="sign" align="center">LOGIN</p>
        <form class="form1">
            <input class="tb" type="text" align="center" placeholder="ID"/>
            <input class="tb" type="text" align="center" placeholder="Email"/>
            <input class="tb" type="password" align="center" placeholder="Password"/>
            <a class="submit" align="center" onClick={handleLogin}>Login</a>
        </form>
    </div>
    : <Details/>
  );
}

export default App;
