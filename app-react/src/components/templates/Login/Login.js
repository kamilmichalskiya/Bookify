/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Header,
  Logo,
  IconStyleWrapper,
  LoginContainer,
  LoginTitle,
  TextSpan,
  Footer,
  GreenTextWrapper,
  UserInputWrapper,
  UserInput,
  DarkIconStyleWrapper,
  DarkEyeStyleWrapper,
  PrimaryButton,
  DividerWrapper,
  Line,
  IconsContainer,
  IconsWrapper,
  GoogleIconStyleWrapper,
  FacebookIconStyleWrapper,
  AppleIconStyleWrapper,
  LoginFooter,
  RegistrationWrapper,
  RegistrationWrapperButton,
  CloseIconStyleWrapper,
} from "./Login-styled";
import { AccountCircle } from "@styled-icons/material/AccountCircle";
import { Close } from "@styled-icons/ionicons-outline/Close";
import { PersonFill } from "@styled-icons/bootstrap/PersonFill";
import { Lock } from "@styled-icons/fa-solid/Lock";
import { EyeOutline } from "@styled-icons/evaicons-outline/EyeOutline";
import { Google } from "@styled-icons/fa-brands/Google";
import { FacebookF } from "@styled-icons/fa-brands/FacebookF";
import { Apple } from "@styled-icons/fa-brands/Apple";
import "@fontsource/montserrat";
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";

const Login = () => {
  const [shouldRedirect, setRedirect] = useState(false);

  return (
    <>
      {shouldRedirect ? <Redirect push to={{ pathname: "/step1" }} /> : null}
      <Wrapper>
        <Header>
          <Logo>Bookify</Logo>
          <IconStyleWrapper>
            <AccountCircle size="60" />
          </IconStyleWrapper>
        </Header>

        <LoginContainer>
          <CloseIconStyleWrapper>
            <Close size="35" />
          </CloseIconStyleWrapper>
          <LoginTitle>Witaj w <GreenTextWrapper>B</GreenTextWrapper>ookify!</LoginTitle>
          <TextSpan>Zaloguj się, aby uzyskać dostęp do wszystkich funkcjonalności.</TextSpan>
          <UserInputWrapper>
            <DarkIconStyleWrapper>
              <PersonFill size="18" />
            </DarkIconStyleWrapper>
            <UserInput type="email" placeholder="Adres email" />
          </UserInputWrapper>
          <UserInputWrapper>
            <DarkIconStyleWrapper>
              <Lock size="18" />
            </DarkIconStyleWrapper>
            <UserInput type="password" placeholder="Hasło" />
            <DarkEyeStyleWrapper>
              <EyeOutline size="24" />
            </DarkEyeStyleWrapper>
          </UserInputWrapper>
          <PrimaryButton>Zaloguj się</PrimaryButton>
          <DividerWrapper>
            <Line></Line>LUB<Line></Line>
          </DividerWrapper>
          <IconsContainer>
            <IconsWrapper>
              <GoogleIconStyleWrapper>
                <Google size="35" />
              </GoogleIconStyleWrapper>
            </IconsWrapper>
            <IconsWrapper>
              <FacebookIconStyleWrapper>
                <FacebookF size="35" />
              </FacebookIconStyleWrapper>
            </IconsWrapper>
            <IconsWrapper>
              <AppleIconStyleWrapper>
                <Apple size="35" />
              </AppleIconStyleWrapper>
            </IconsWrapper>
          </IconsContainer>
          <LoginFooter>
            <RegistrationWrapper>
              <TextSpan>Nie masz konta?</TextSpan>
              <RegistrationWrapperButton>Zarejestruj się</RegistrationWrapperButton>
            </RegistrationWrapper>
            <TextSpan>
              &copy;2022 <GreenTextWrapper>B</GreenTextWrapper>ookify
            </TextSpan>
          </LoginFooter>
        </LoginContainer>

        <Footer>
          <span>Więcej informacji</span>
          <span>
            &copy;2022 <GreenTextWrapper>B</GreenTextWrapper>ookify
          </span>
          <span>Polityka prywatności</span>
        </Footer>
      </Wrapper>
    </>
  );
};

export default Login;
