import React from "react";

const SigninPanel = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="container rounded p-3">
          <h1>Welcome to BroSisChat</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button type="button" className="btn btn-primary w-10 rounded-pill">
            Bro!
          </button>
        </div>
        <div className="col">
          <button type="button" className="btn btn-primary rounded-pill">
            Sis!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SigninPanel;
