import React from 'react';
import {
  ContentLeft,
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
  GreenIconStyleWrapper,
} from './Step1-styled';
import '@fontsource/montserrat';
import { Resize } from '@styled-icons/ionicons-outline/Resize';
import { Bed } from '@styled-icons/fa-solid/Bed';
import { Wifi } from '@styled-icons/fa-solid/Wifi';
import { Check } from '@styled-icons/material/Check';
import { KeyboardArrowRight } from '@styled-icons/material/KeyboardArrowRight';
import { KeyboardArrowLeft } from '@styled-icons/material/KeyboardArrowLeft';

const Step1 = () => {
  return (
    <>
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
    </>
  );
};

export default Step1;
