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
  ContentLeft,
  ContentRight,
  ContentLeftTitle,
  RoomContainerPhotoWrapper,
  RoomContainerPhoto,
  RoomDescription,
  GreenTextWrapper,
  RoomMainFeaturesContainer,
  RoomMainFeatureWrapper,
  RoomMainFeatureIcon,
  RoomAllFeaturesContainer,
  RoomAllFeaturesTitle,
  RoomAllFeatureWrapper,
  RoomAllFeatureIcon,
} from './Step1-styled';
import { AccountCircle } from '@styled-icons/material/AccountCircle';
import { Resize } from '@styled-icons/ionicons-outline/Resize';
import { Bed } from '@styled-icons/fa-solid/Bed';
import { Wifi } from '@styled-icons/fa-solid/Wifi';
import { KeyboardArrowRight } from '@styled-icons/material/KeyboardArrowRight';
import { KeyboardArrowLeft } from '@styled-icons/material/KeyboardArrowLeft';
// import { KeyboardArrowUp } from "@styled-icons/material/KeyboardArrowUp";
import { KeyboardArrowDown } from '@styled-icons/material/KeyboardArrowDown';
import { Check } from '@styled-icons/material/Check';
import '@fontsource/montserrat';
import { Redirect } from 'react-router-dom';

const Step1 = () => {
  const [redirectUrl, setRedirectUrl] = useState(null);

  const changeStep = (path = '/') => {
    console.log('Step1: test');
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
          <ContentLeft>
            <ContentLeftTitle>Szczegóły pokoju</ContentLeftTitle>
            <RoomContainerPhotoWrapper>
              <GreenIconStyleWrapper>
                <KeyboardArrowLeft size="36" />
              </GreenIconStyleWrapper>
              <RoomContainerPhoto></RoomContainerPhoto>
              <GreenIconStyleWrapper>
                <KeyboardArrowRight size="36" />
              </GreenIconStyleWrapper>
            </RoomContainerPhotoWrapper>
            <RoomDescription>
              Pokój <GreenTextWrapper>Classic Double</GreenTextWrapper> to stylowy i nowoczesny pokój wyposażony w najnowocześniejszy sprzęt.
            </RoomDescription>
            <RoomMainFeaturesContainer>
              <RoomMainFeatureWrapper>
                <RoomMainFeatureIcon>
                  <Resize size="24" />
                </RoomMainFeatureIcon>
                19 m<sup>2</sup>
              </RoomMainFeatureWrapper>
              <RoomMainFeatureWrapper>
                <RoomMainFeatureIcon>
                  <Bed size="24" />
                </RoomMainFeatureIcon>
                1 podwójne łóżko
              </RoomMainFeatureWrapper>
              <RoomMainFeatureWrapper>
                <RoomMainFeatureIcon>
                  <Wifi size="24" />
                </RoomMainFeatureIcon>
                Wi-Fi, telefon stacjonarny
              </RoomMainFeatureWrapper>
            </RoomMainFeaturesContainer>
            <RoomAllFeaturesTitle>
              <GreenTextWrapper>Wyposażenie</GreenTextWrapper>
            </RoomAllFeaturesTitle>
            <RoomAllFeaturesContainer>
              <RoomAllFeatureWrapper>
                <RoomAllFeatureIcon>
                  <Check size="18" />
                </RoomAllFeatureIcon>
                Telewizor z płaskim ekranem
              </RoomAllFeatureWrapper>
              <RoomAllFeatureWrapper>
                <RoomAllFeatureIcon>
                  <Check size="18" />
                </RoomAllFeatureIcon>
                Łazienka z prysznicem
              </RoomAllFeatureWrapper>
              <RoomAllFeatureWrapper>
                <RoomAllFeatureIcon>
                  <Check size="18" />
                </RoomAllFeatureIcon>
                Szafa
              </RoomAllFeatureWrapper>
              <RoomAllFeatureWrapper>
                <RoomAllFeatureIcon>
                  <Check size="18" />
                </RoomAllFeatureIcon>
                Lodówka
              </RoomAllFeatureWrapper>
              <RoomAllFeatureWrapper>
                <RoomAllFeatureIcon>
                  <Check size="18" />
                </RoomAllFeatureIcon>
                Klimatyzacja
              </RoomAllFeatureWrapper>
              <RoomAllFeatureWrapper>
                <RoomAllFeatureIcon>
                  <Check size="18" />
                </RoomAllFeatureIcon>
                Duże i wygodne łóżko
              </RoomAllFeatureWrapper>
              <RoomAllFeatureWrapper>
                <RoomAllFeatureIcon>
                  <Check size="18" />
                </RoomAllFeatureIcon>
                Biurko
              </RoomAllFeatureWrapper>
              <RoomAllFeatureWrapper>
                <RoomAllFeatureIcon>
                  <Check size="18" />
                </RoomAllFeatureIcon>
                Internet w pokoju
              </RoomAllFeatureWrapper>
              <RoomAllFeatureWrapper>
                <RoomAllFeatureIcon>
                  <Check size="18" />
                </RoomAllFeatureIcon>
                Ogrzewanie podłogowe
              </RoomAllFeatureWrapper>
              <RoomAllFeatureWrapper>
                <RoomAllFeatureIcon>
                  <Check size="18" />
                </RoomAllFeatureIcon>
                Kosmetyki
              </RoomAllFeatureWrapper>
            </RoomAllFeaturesContainer>
          </ContentLeft>
          <ContentRight>
            Podsumowanie rezerwacji
            <GreenIconStyleWrapper>
              <KeyboardArrowDown size="36" />
            </GreenIconStyleWrapper>
          </ContentRight>
        </ContentContainer>
        <BottomMenu>
          <IconStyleWrapper>
            <span onClick={changeStep}>
              <KeyboardArrowLeft size="36" />
              Wstecz
            </span>
          </IconStyleWrapper>
          <WhiteButton
            onClick={() => {
              changeStep('/step2');
            }}
          >
            Dalej
          </WhiteButton>
        </BottomMenu>
      </Wrapper>
    </>
  );
};

export default Step1;
