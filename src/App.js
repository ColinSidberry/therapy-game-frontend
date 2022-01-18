import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import jwt from "jsonwebtoken";

import Nav from './Nav';
import Routes from './Routes';
import TherapyApi from "./Api"
import UserContext from './UserContext';
import './App.css';
import StartForm from './StartForm';
import TherapyGame from './TherapyGame';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(function updateUserDataOnTokenChange() {
    async function updateUserData() {
      if (token) {
        TherapyApi.token = token; // FIXME: Add the api
        let user = jwt.decode(token).sub;
        setUserData(user);
      };
      setIsLoading(false);
    }
    updateUserData();
  }, [token]);

  if (isLoading) {
    return <i>Loading...</i>
  };

  async function signupUser(formData) {
    const token = await TherapyApi.signupUser(formData);
    setToken(token);
  }

  async function loginUser(formData) {
    const token = await TherapyApi.login(formData);
    setToken(token);
  }


  return (
    // <div className="App">
    //   <StartForm /> {/**Commented out for dev */}
    //   <TherapyGame formData={formData}/>
    // </div>
    <div className="App container-fluid">
      <BrowserRouter>
        <UserContext.Provider value={userData}>
          <Nav handleLogout={handleLogout} />
          <Routes
            loginUser={loginUser}
            signupUser={signupUser}
          />
        </UserContext.Provider>
      </BrowserRouter>

    </div >
  );
}

export default App;
