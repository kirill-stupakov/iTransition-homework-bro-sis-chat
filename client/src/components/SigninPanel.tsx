import React from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
// @ts-ignore
import VkLogin from "react-vk-auth";

interface Props {
  setUserName: (s: string) => void;
}

const SigninPanel: React.FC<Props> = ({ setUserName }) => {
  const googleAuth = (res: any) =>
    res.profileObj ? setUserName(res.profileObj.name) : console.log(res);
  const facebookAuth = (res: any) =>
    res.name ? setUserName(res.name) : console.log(res);
  const VkAuth = (res: any) =>
    res.session
      ? setUserName(
          `${res.sessin.user.first_name} ${res.session.user.last_name}`
        )
      : console.log(res);

  const buttonClass = "btn btn-primary px-4 rounded m-3 shadow-sm";

  return (
    <>
      <h3>Please, sign in to send messages</h3>
      <GoogleLogin
        clientId="478708871018-ajcn2uoal7polm30lch28j38luopscbd.apps.googleusercontent.com"
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className={buttonClass}
          >
            Google
          </button>
        )}
        onSuccess={googleAuth}
        cookiePolicy="single_host_origin"
        icon={false}
      />
      <FacebookLogin
        appId="469548247724612"
        callback={facebookAuth}
        cssClass={buttonClass}
        textButton="Facebook"
      />
      <VkLogin apiId="7990349" callback={VkAuth} className={buttonClass}>
        VK
      </VkLogin>
    </>
  );
};

export default SigninPanel;
