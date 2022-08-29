import React, { useState } from 'react';
import { UserInputWrapper, UserInput, DarkEyeStyleWrapper } from './PasswordFormField-styled';
import { EyeOutline } from '@styled-icons/evaicons-outline/EyeOutline';

const PasswordFormField = ({ name, value, onChange, autoComplete, placeholder }) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <UserInputWrapper>
      <UserInput
        type={passwordShown ? 'text' : 'password'}
        name={name}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <DarkEyeStyleWrapper onClick={togglePassword}>
        <EyeOutline size="24" />
      </DarkEyeStyleWrapper>
    </UserInputWrapper>
  );
};

export default PasswordFormField;
