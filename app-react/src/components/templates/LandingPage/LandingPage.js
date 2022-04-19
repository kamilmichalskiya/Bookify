/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Wrapper,
  Header,
  Logo,
  IconStyleWrapper,
  DarkIconStyleWrapper,
  SearchBarContainer,
  FindButton,
  SearchBarTextContainer,
  SearchBarTextCol,
  SearchBarValue,
  RoomContainer,
  RoomContainerPhoto,
  RoomContainerContext,
  RoomContainerContextTitle,
  RoomContainerContextData,
  RoomContainerContextDataLeft,
  RoomContainerContextDataRight,
  RoomFeatures,
  RoomPrice,
  DetailsButton,
  Footer,
  GreenTextWrapper,
} from './LandingPage-styled';
import { AccountCircle } from '@styled-icons/material/AccountCircle';
import { MagnifyingGlass } from '@styled-icons/entypo/MagnifyingGlass';
import '@fontsource/montserrat';
const LandingPage = () => {
  return (
    <Wrapper>
      <Header>
        <Logo>Bookify</Logo>
        <IconStyleWrapper>
          <AccountCircle size="60" />
        </IconStyleWrapper>
      </Header>
      {/* search bar */}
      <SearchBarContainer>
        <DarkIconStyleWrapper>
          <MagnifyingGlass size="24" />
        </DarkIconStyleWrapper>
        <SearchBarTextContainer>
          <SearchBarTextCol>
            Przyjazd
            <SearchBarValue>15 kwietnia 2022</SearchBarValue>
          </SearchBarTextCol>
          <SearchBarTextCol>
            Wyjazd
            <SearchBarValue>17 kwietnia 2022</SearchBarValue>
          </SearchBarTextCol>
          <SearchBarTextCol>
            Goście
            <SearchBarValue>2 dorosłych, 1 dziecko</SearchBarValue>
          </SearchBarTextCol>
          <SearchBarTextCol>
            Cechy pokoju
            <SearchBarValue>Klimatyzacja, lodówka</SearchBarValue>
          </SearchBarTextCol>
        </SearchBarTextContainer>
        <FindButton>Szukaj</FindButton>
      </SearchBarContainer>
      {/* rooms */}
      <RoomContainer>
        <RoomContainerPhoto></RoomContainerPhoto>
        <RoomContainerContext>
          <RoomContainerContextTitle>Pokój Standard (2 osobowy)</RoomContainerContextTitle>
          <RoomContainerContextData>
            <RoomContainerContextDataLeft>
              <RoomFeatures>
                <li>2 gości</li>
                <li>1 sypialnia</li>
                <li>1 łóżko podwójne</li>
                <li>1 łazienka</li>
              </RoomFeatures>
            </RoomContainerContextDataLeft>
            <RoomContainerContextDataRight>
              (cena za 2 noce)
              <RoomPrice>748zł</RoomPrice>
              <DetailsButton>Szczegóły</DetailsButton>
            </RoomContainerContextDataRight>
          </RoomContainerContextData>
        </RoomContainerContext>
      </RoomContainer>
      <RoomContainer>
        <RoomContainerPhoto></RoomContainerPhoto>
        <RoomContainerContext>
          <RoomContainerContextTitle>Pokój Standard (2 osobowy)</RoomContainerContextTitle>
          <RoomContainerContextData>
            <RoomContainerContextDataLeft>
              <RoomFeatures>
                <li>2 gości</li>
                <li>1 sypialnia</li>
                <li>1 łóżko podwójne</li>
                <li>1 łazienka</li>
              </RoomFeatures>
            </RoomContainerContextDataLeft>
            <RoomContainerContextDataRight>
              (cena za 2 noce)
              <RoomPrice>748zł</RoomPrice>
              <DetailsButton>Szczegóły</DetailsButton>
            </RoomContainerContextDataRight>
          </RoomContainerContextData>
        </RoomContainerContext>
      </RoomContainer>
      <RoomContainer>
        <RoomContainerPhoto></RoomContainerPhoto>
        <RoomContainerContext>
          <RoomContainerContextTitle>Pokój Standard (2 osobowy)</RoomContainerContextTitle>
          <RoomContainerContextData>
            <RoomContainerContextDataLeft>
              <RoomFeatures>
                <li>2 gości</li>
                <li>1 sypialnia</li>
                <li>1 łóżko podwójne</li>
                <li>1 łazienka</li>
              </RoomFeatures>
            </RoomContainerContextDataLeft>
            <RoomContainerContextDataRight>
              (cena za 2 noce)
              <RoomPrice>748zł</RoomPrice>
              <DetailsButton>Szczegóły</DetailsButton>
            </RoomContainerContextDataRight>
          </RoomContainerContextData>
        </RoomContainerContext>
      </RoomContainer>
      <RoomContainer>
        <RoomContainerPhoto></RoomContainerPhoto>
        <RoomContainerContext>
          <RoomContainerContextTitle>Pokój Standard (2 osobowy)</RoomContainerContextTitle>
          <RoomContainerContextData>
            <RoomContainerContextDataLeft>
              <RoomFeatures>
                <li>2 gości</li>
                <li>1 sypialnia</li>
                <li>1 łóżko podwójne</li>
                <li>1 łazienka</li>
              </RoomFeatures>
            </RoomContainerContextDataLeft>
            <RoomContainerContextDataRight>
              (cena za 2 noce)
              <RoomPrice>748zł</RoomPrice>
              <DetailsButton>Szczegóły</DetailsButton>
            </RoomContainerContextDataRight>
          </RoomContainerContextData>
        </RoomContainerContext>
      </RoomContainer>
      <Footer>
        <span>Więcej informacji</span>
        <span>&copy;2022 <GreenTextWrapper>B</GreenTextWrapper>ookify</span>
        <span>Polityka prywatności</span>
      </Footer>
    </Wrapper>
  );
};

export default LandingPage;
