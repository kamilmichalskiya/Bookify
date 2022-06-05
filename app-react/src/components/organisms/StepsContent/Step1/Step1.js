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

const Step1 = ({ state }) => {
  return (
    <>
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
      <RoomDescription>{state.selectedRoom.description}</RoomDescription>
      <RoomMainFeaturesContainer>
        <RoomMainFeatureWrapper>
          <RoomMainFeatureIcon>
            <Resize size="24" />
          </RoomMainFeatureIcon>
          {state.selectedRoom.area} m<sup>2</sup>
        </RoomMainFeatureWrapper>
        {state.selectedRoom.beds.includes('DOUBLE_BED') ? (
          <>
            <RoomMainFeatureWrapper>
              <RoomMainFeatureIcon>
                <Bed size="24" />
              </RoomMainFeatureIcon>
              1 podwójne łóżko
            </RoomMainFeatureWrapper>
          </>
        ) : (
          ''
        )}
        {state.selectedRoom.beds.includes('SINGLE_BED') ? (
          <>
            <RoomMainFeatureWrapper>
              <RoomMainFeatureIcon>
                <Bed size="24" />
              </RoomMainFeatureIcon>
              1 pojedyńcze łóżko
            </RoomMainFeatureWrapper>
          </>
        ) : (
          ''
        )}
        <RoomMainFeatureWrapper>
          <RoomMainFeatureIcon>
            <Wifi size="24" />
          </RoomMainFeatureIcon>
          {state.selectedRoom.addOns.map((element) => element).join(' ')}
        </RoomMainFeatureWrapper>
      </RoomMainFeaturesContainer>
      <RoomAllFeaturesTitle>
        <GreenTextWrapper>Wyposażenie</GreenTextWrapper>
      </RoomAllFeaturesTitle>
      <RoomAllFeaturesContainer>
        {state.selectedRoom.accessories.map((element) => (
          <RoomAllFeatureWrapper>
            <RoomAllFeatureIcon>
              <Check size="18" />
            </RoomAllFeatureIcon>
            {element}
          </RoomAllFeatureWrapper>
        ))}
      </RoomAllFeaturesContainer>
    </>
  );
};

export default Step1;
