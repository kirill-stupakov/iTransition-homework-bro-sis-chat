import React, { useState } from "react";
import "./App.scss";

import SigninPanel from "./components/SigninPanel/SigninPanel";
import AuthorizedPanel from "./components/AuthorizedPanel/AuthorizedfPanel";

function App() {
  const [userName, setUserName] = useState<string | null>("Mike");

  return (
    <div className="App d-flex justify-content-center align-items-center bg-primary bg-opacity-10">
      <div className="text-center">
        <img src="/icon.svg" alt="" className="mx-auto mb-3" />
        <h1 className="display-5 fw-bold mb-4">Welcome to BroSisChat!</h1>
        {userName === null ? <SigninPanel /> : <AuthorizedPanel />}
      </div>
    </div>
  );
}

export default App;
