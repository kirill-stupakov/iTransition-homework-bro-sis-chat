import React, { useState } from "react";
import socketIO from "socket.io-client";

import "./App.scss";
import SigninPanel from "./components/SigninPanel";
import AuthorizedPanel from "./components/AuthorizedfPanel";
import Stats from "./components/Stats";

const socket = socketIO("https://bro-sis-chat.herokuapp.com/");

function App() {
  const [userName, setUserName] = useState<string | null>(null);

  return (
    <div className="App d-flex justify-content-center align-items-center bg-primary bg-opacity-10">
      <div className="text-center">
        <img src="/icon.svg" alt="Logo" className="mx-auto" />
        <h1 className="display-5 fw-bold my-3">Welcome to BroSisChat!</h1>
        <Stats socket={socket} />
        <div className="my-5">
          {userName === null ? (
            <SigninPanel setUserName={setUserName} />
          ) : (
            <AuthorizedPanel
              userName={userName}
              socket={socket}
              onLogOut={() => setUserName(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
