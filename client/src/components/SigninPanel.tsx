import React from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
// @ts-ignore
import VkLogin from "react-vkontakte-login";
// import VkLogin from "react-vk-login-button";

interface Props {
  setUserName: (s: string) => void;
}

const SigninPanel: React.FC<Props> = ({ setUserName }) => {
  return (
    <>
      <h3>Please, sign in to send messages</h3>
      <GoogleLogin
        clientId="478708871018-ajcn2uoal7polm30lch28j38luopscbd.apps.googleusercontent.com"
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="btn btn-primary px-4 rounded m-3 shadow-sm"
          >
            Google
          </button>
        )}
        onSuccess={(res: any) => setUserName(res.profileObj.name)}
        cookiePolicy="single_host_origin"
        icon={false}
      />
      <FacebookLogin
        appId="313394383566103"
        callback={(res: any) => setUserName(res.name)}
        cssClass="btn btn-primary px-4 rounded m-3 shadow-sm"
        textButton="Facebook"
      />
      <VkLogin
        clientId="7990349"
        callback={(res: any) => console.log(res)}
        render={(renderProps: any) => (
          <button
            onClick={renderProps.onClick}
            className="btn btn-primary px-4 rounded m-3 shadow-sm"
          >
            VK
          </button>
        )}
      />
    </>
  );
};

export default SigninPanel;
