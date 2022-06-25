import React from 'react';
import { Wrapper, GreenTextWrapper } from './Footer-styled';

const Footer = () => {
  return (
    <>
      <Wrapper>
        <span>Więcej informacji</span>
        <span>
          &copy;2022 <GreenTextWrapper>B</GreenTextWrapper>ookify
        </span>
        <span>Polityka prywatności</span>
      </Wrapper>
    </>
  );
};

export default Footer;
