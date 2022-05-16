/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Header,
  Logo,
  IconStyleWrapper,
  RegistrationContainer,
  RegistrationTitle,
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
  RegistrationFooter,
  LogInWrapper,
  LogInWrapperButton,
  CloseIconStyleWrapper,
} from "./Registration-styled";
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

const Registration = () => {
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

        <RegistrationContainer>
          <CloseIconStyleWrapper>
            <Close size="35" />
          </CloseIconStyleWrapper>
          <RegistrationTitle>Rejestracja</RegistrationTitle>
          <TextSpan>Załóż konto, aby cieszyć się pełną funkcjonalnością Bookify</TextSpan>
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
          <UserInputWrapper>
            <DarkIconStyleWrapper>
              <Lock size="18" />
            </DarkIconStyleWrapper>
            <UserInput type="password" placeholder="Potwierdź hasło" />
            <DarkEyeStyleWrapper>
              <EyeOutline size="24" />
            </DarkEyeStyleWrapper>
          </UserInputWrapper>
          <PrimaryButton>Załóż konto</PrimaryButton>
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
          <RegistrationFooter>
            <LogInWrapper>
              <TextSpan>Masz konto?</TextSpan>
              <LogInWrapperButton>Zaloguj się</LogInWrapperButton>
            </LogInWrapper>
            <TextSpan>
              &copy;2022 <GreenTextWrapper>B</GreenTextWrapper>ookify
            </TextSpan>
          </RegistrationFooter>
        </RegistrationContainer>

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

export default Registration;
