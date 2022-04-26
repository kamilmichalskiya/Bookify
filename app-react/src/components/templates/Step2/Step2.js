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
  ContentLeftSection1,
  ContentLeftSection2,
  UnorderedList,
  ListItem,
  SectionHeader,
  RowWrapper,
  DashedLine,
  RowText,
  GreenTextWrapper,
  SectionSummary,
  ContentRight,
} from './Step2-styled';
import { AccountCircle } from '@styled-icons/material/AccountCircle';
import { KeyboardArrowLeft } from '@styled-icons/material/KeyboardArrowLeft';
import { KeyboardArrowDown } from '@styled-icons/material/KeyboardArrowDown';
import { CheckBox } from '@styled-icons/material/CheckBox';
import { CheckBoxOutlineBlank } from '@styled-icons/material/CheckBoxOutlineBlank';
import { Info } from '@styled-icons/material-outlined/Info';
import { ExclamationSquareFill } from '@styled-icons/bootstrap/ExclamationSquareFill';
import '@fontsource/montserrat';
import { Redirect } from 'react-router-dom';

const Step2 = () => {
  const [redirectUrl, setRedirectUrl] = useState(null);

  const changeStep = (path = '/') => {
    console.log('Step2: test');
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
            <ContentLeftTitle>Szczegóły oferty</ContentLeftTitle>
            <ContentLeftSection1>
              <SectionHeader>Oferta zawiera:</SectionHeader>
              <UnorderedList>
                <ListItem>rabat od stawki elastycznej uzależniony od długości pobytu i hotelu</ListItem>
                <ListItem>bezpłatny, nieograniczony dostęp do internetu</ListItem>
                <ListItem>bezpłatne wypożyczenie rowerów</ListItem>
                <ListItem>8% VAT</ListItem>
              </UnorderedList>
            </ContentLeftSection1>
            <ContentLeftSection2>
              <SectionHeader>Dodatkowo płatne:</SectionHeader>
              <RowWrapper>
                <GreenIconStyleWrapper>
                  <CheckBox size="24" />
                </GreenIconStyleWrapper>
                <RowText>Śniadanie</RowText>
                <IconStyleWrapper>
                  <Info size="18" />
                </IconStyleWrapper>
                <DashedLine></DashedLine>
                <RowText>69 zł (os./noc)</RowText>
              </RowWrapper>
              <RowWrapper>
                <GreenIconStyleWrapper>
                  <CheckBoxOutlineBlank size="24" />
                </GreenIconStyleWrapper>
                <RowText>Parking</RowText>
                <IconStyleWrapper>
                  <Info size="18" />
                </IconStyleWrapper>
                <DashedLine></DashedLine>
                <RowText>10 zł (pojazd/noc)</RowText>
              </RowWrapper>
              <RowWrapper>
                <GreenIconStyleWrapper>
                  <CheckBox size="24" />
                </GreenIconStyleWrapper>
                <RowText>Pobyt zwierzęcia</RowText>
                <IconStyleWrapper>
                  <Info size="18" />
                </IconStyleWrapper>
                <DashedLine></DashedLine>
                <RowText>bez dopłaty</RowText>
              </RowWrapper>
              <SectionSummary>
                Dodatki łącznie: <GreenTextWrapper>276zł</GreenTextWrapper>
              </SectionSummary>
              <RowWrapper>
                <ExclamationSquareFill size="36" />
                <RowText>W przypadku rezerwacji więcej niż 10 pokoi mogą obowiązywać inne warunki i dodatkowe opłaty.</RowText>
              </RowWrapper>
            </ContentLeftSection2>
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
                changeStep('/step1');
              }}
            >
              <KeyboardArrowLeft size="36" />
              Wstecz
            </span>
          </IconStyleWrapper>
          <WhiteButton
            onClick={() => {
              changeStep('/step3');
            }}
          >
            Dalej
          </WhiteButton>
        </BottomMenu>
      </Wrapper>
    </>
  );
};

export default Step2;
