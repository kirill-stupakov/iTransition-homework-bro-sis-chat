import React from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
// @ts-ignore
// import VkLogin from "react-vk-login";

interface Props {
  setUserName: (s: string) => void;
  socket: any;
}

const SigninPanel: React.FC<Props> = ({ setUserName, socket }) => {
  return (
    <div>
      <h1>Please, sign in</h1>
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
      {/* <VkLogin
        appId="7990349"
        fields="name"
        callback={(res: any) => setUserName(res.name)}
        autoLoad={true}
      /> */}
    </div>
  );
};

export default SigninPanel;
