import React from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
// @ts-ignore
import VkLogin from "react-vkontakte-login";

interface Props {
  setUserName: (s: string) => void;
}

const SigninPanel: React.FC<Props> = ({ setUserName }) => {
  const googleAuth = (res: any) =>
    res.profileObj.name && setUserName(res.profileObj.name);
  const facebookAuth = (res: any) => res.name && setUserName(res.name);
  const VkAuth = (res: any) => console.log(res);

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
        onSuccess={googleAuth}
        cookiePolicy="single_host_origin"
        icon={false}
      />
      <FacebookLogin
        appId="313394383566103"
        callback={facebookAuth}
        cssClass="btn btn-primary px-4 rounded m-3 shadow-sm"
        textButton="Facebook"
      />
      <VkLogin
        clientId="7990349"
        callback={VkAuth}
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
