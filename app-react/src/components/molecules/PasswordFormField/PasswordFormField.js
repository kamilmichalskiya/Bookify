import React, { useState } from 'react';
// import { Label } from 'components/atoms/Label/Label';
// import { Input, TextArea } from 'components/atoms/Input/Input';
import { UserInputWrapper, UserInput, DarkEyeStyleWrapper } from './PasswordFormField-styled';
import { EyeOutline } from '@styled-icons/evaicons-outline/EyeOutline';

const PasswordFormField = ({ placeholder }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [userPassword, setUserPassword] = useState('');

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const onPasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  return (
    <UserInputWrapper>
      <UserInput
        type={passwordShown ? 'text' : 'password'}
        name="current-password"
        autoComplete="current-password"
        placeholder={placeholder}
        value={userPassword}
        onChange={onPasswordChange}
      />
      <DarkEyeStyleWrapper onClick={togglePassword}>
        <EyeOutline size="24" />
      </DarkEyeStyleWrapper>
    </UserInputWrapper>
  );
};

export default PasswordFormField;
