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
  ContentLeftTitle,
  ContentLeftSection,
  RowWrapper,
  RowText,
  ContentRight,
  RowWrapperProvision,
  UserInput,
} from './Step3-styled';
import { AccountCircle } from '@styled-icons/material/AccountCircle';
import { KeyboardArrowLeft } from '@styled-icons/material/KeyboardArrowLeft';
import { KeyboardArrowDown } from '@styled-icons/material/KeyboardArrowDown';
import { CheckBox } from '@styled-icons/material/CheckBox';
import { CheckBoxOutlineBlank } from '@styled-icons/material/CheckBoxOutlineBlank';
import { ExclamationSquareFill } from '@styled-icons/bootstrap/ExclamationSquareFill';
import '@fontsource/montserrat';
import { Redirect } from 'react-router-dom';

const Step3 = () => {
  const [redirectUrl, setRedirectUrl] = useState(null);

  const changeStep = (path = '/') => {
    console.log('Step3: test');
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
            <ContentLeftTitle>Dane rezerwującego</ContentLeftTitle>
            <ContentLeftSection>
              <UserInput type="text" placeholder="Imię*" />
              <UserInput type="text" placeholder="Nazwisko*" />
              <UserInput type="text" placeholder="Adres e-mail*" />
              <RowWrapper>
                <GreenIconStyleWrapper>
                  <CheckBox size="24" />
                </GreenIconStyleWrapper>
                <RowText>Chcę otrzymać fakturę VAT</RowText>
              </RowWrapper>
              <RowWrapper>
                <GreenIconStyleWrapper>
                  <CheckBoxOutlineBlank size="24" />
                </GreenIconStyleWrapper>
                <RowText>Dane gościa inne niż rezerwującego</RowText>
              </RowWrapper>
              <RowWrapperProvision>
                <IconStyleWrapper>
                  <ExclamationSquareFill size="36" />
                </IconStyleWrapper>
                <RowText>
                  Poprzez kliknięcie przycisku “Dalej” wyrażasz zgodę na przetwarzanie twoich danych osobowych w celu realizacji rezerwacji.
                  Administratorem twoich danych osobowych jest Bookify hotel Łódź Sp. z o. o., Al. Politechniki 420, 93-590 Łódź.
                </RowText>
              </RowWrapperProvision>
            </ContentLeftSection>
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
                changeStep('/step2');
              }}
            >
              <KeyboardArrowLeft size="36" />
              Wstecz
            </span>
          </IconStyleWrapper>
          <WhiteButton
            onClick={() => {
              changeStep('/step4');
            }}
          >
            Dalej
          </WhiteButton>
        </BottomMenu>
      </Wrapper>
    </>
  );
};

export default Step3;
