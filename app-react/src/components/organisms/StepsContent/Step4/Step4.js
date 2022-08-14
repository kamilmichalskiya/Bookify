import React, { useState, useContext } from 'react';
import { Wrapper } from './Step4-styled';
import { UserDataContext } from 'providers/UserDataProvider';
import ReCAPTCHA from 'react-google-recaptcha';

const Step4 = () => {
  // eslint-disable-next-line no-unused-vars
  const UserCtx = useContext(UserDataContext);
  const [isRecaptchaValid, setIsRecaptchaValid] = useState(false);
  let recaptchaUrl;
  if (window.location.hostname === 'localhost') {
    recaptchaUrl = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';
  } else {
    recaptchaUrl = '6LdX3nUhAAAAAL32frx95e4pw7i_wNqwh_x-dK2d';
  }

  return (
    <Wrapper>{isRecaptchaValid ? <h1>Step4 Content</h1> : <ReCAPTCHA sitekey={recaptchaUrl} onChange={() => setIsRecaptchaValid(true)} />}</Wrapper>
  );
};

export default Step4;
