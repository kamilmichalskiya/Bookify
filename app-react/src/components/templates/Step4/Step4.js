import React, { useState } from 'react';
import {
  Wrapper,
  Header,
  Logo,
  IconStyleWrapper,
  GreenIconStyleWrapper,
  SearchBarImg,
  WhiteButton,
  SearchBarContainer,
  BottomMenu,
  ContentContainer,
  ContentLeftContainer,
  TextSection,
  ContentRight,
  SectionHeader,
} from './Step4-styled';
import { AccountCircle } from '@styled-icons/material/AccountCircle';
import { KeyboardArrowLeft } from '@styled-icons/material/KeyboardArrowLeft';
import { KeyboardArrowDown } from '@styled-icons/material/KeyboardArrowDown';
import { CheckCircle } from '@styled-icons/material/CheckCircle';
import '@fontsource/montserrat';
import { Redirect } from 'react-router-dom';

const Step4 = () => {
  const [redirectUrl, setRedirectUrl] = useState(null);

  const changeStep = (path = '/') => {
    console.log('Step4: test');
    setRedirectUrl(path);
  };

  return (
    <>
      {redirectUrl ? <Redirect push to={{ pathname: redirectUrl }} /> : null}
      <Wrapper>
        <Header>
          <Logo onClick={changeStep}>Bookify</Logo>
          <IconStyleWrapper>
            <AccountCircle size="60" />
          </IconStyleWrapper>
        </Header>
        {/* search bar */}
        <SearchBarContainer>
          <SearchBarImg></SearchBarImg>
        </SearchBarContainer>
        <ContentContainer>
          <ContentLeftContainer>
            <GreenIconStyleWrapper>
              <CheckCircle size="96" />
            </GreenIconStyleWrapper>
            <SectionHeader>Dziękujemy!</SectionHeader>
            <TextSection>Twoja rezerwacja została rozpatrzona pozytywnie a jej potwierdzenie otrzymasz wkrótce na podany adres e-mail!</TextSection>
            <TextSection>Dziękujemy za skorzystanie z Bookify.</TextSection>
          </ContentLeftContainer>
          <ContentRight>
            Podsumowanie rezerwacji
            <GreenIconStyleWrapper>
              <KeyboardArrowDown size="36" />
            </GreenIconStyleWrapper>
          </ContentRight>
        </ContentContainer>
        <BottomMenu>
          <IconStyleWrapper>
            <span
              onClick={() => {
                changeStep('/step3');
              }}
            >
              <KeyboardArrowLeft size="36" />
              Wstecz
            </span>
          </IconStyleWrapper>
          <WhiteButton>Dalej</WhiteButton>
        </BottomMenu>
      </Wrapper>
    </>
  );
};

export default Step4;
