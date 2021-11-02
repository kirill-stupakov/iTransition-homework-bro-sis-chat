import React from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

interface Props {
  setUserName: (s: string) => void;
}

const SigninPanel: React.FC<Props> = ({ setUserName }) => {
  return (
    <>
      <h3>Please, sign in to send messages</h3>
      <GoogleLogin
        clientId="478708871018-ajcn2uoal7polm30lch28j38luopscbd.apps.googleusercontent.com"
        buttonText="Google"
        onSuccess={(res: any) => setUserName(res.profileObj.name)}
        cookiePolicy="single_host_origin"
        className="btn btn-primary px-4 rounded m-3 shadow-sm"
        icon={false}
      />
      <FacebookLogin
        appId="313394383566103"
        fields="name"
        callback={(res: any) => setUserName(res.name)}
        cssClass="btn btn-light px-4 rounded m-3 shadow-sm"
        textButton="Facebook"
      />
    </>
  );
};

export default SigninPanel;
