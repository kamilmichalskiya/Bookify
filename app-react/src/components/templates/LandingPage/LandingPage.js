import React, { useState } from 'react';
import { SecondaryButton } from '../../atoms/Button/Button';
import {
  Wrapper,
  RoomContainer,
  RoomContainerPhoto,
  RoomContainerContext,
  RoomContainerContextTitle,
  RoomContainerContextData,
  RoomContainerContextDataLeft,
  RoomContainerContextDataRight,
  RoomFeatures,
  RoomPrice,
  Footer,
  GreenTextWrapper,
} from './LandingPage-styled';
import Header from 'components/molecules/Header/Header';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import '@fontsource/montserrat';
import { Redirect } from 'react-router-dom';

const LandingPage = () => {
  const [shouldRedirect, setRedirect] = useState(false);

  const onRoomDetailsClickHandler = () => {
    console.log('test');
    setRedirect(true);
  };

  return (
    <>
      {shouldRedirect ? <Redirect push to={{ pathname: '/step1' }} /> : null}
      <Wrapper>
        <Header title="Bookify"></Header>
        <SearchBar></SearchBar>
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
                <SecondaryButton onClick={onRoomDetailsClickHandler}>Szczegóły</SecondaryButton>
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
                <SecondaryButton onClick={onRoomDetailsClickHandler}>Szczegóły</SecondaryButton>
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
                <SecondaryButton onClick={onRoomDetailsClickHandler}>Szczegóły</SecondaryButton>
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
                <SecondaryButton onClick={onRoomDetailsClickHandler}>Szczegóły</SecondaryButton>
              </RoomContainerContextDataRight>
            </RoomContainerContextData>
          </RoomContainerContext>
        </RoomContainer>
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

export default LandingPage;
