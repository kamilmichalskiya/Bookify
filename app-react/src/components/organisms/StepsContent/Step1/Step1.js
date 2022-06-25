import React, { useContext } from 'react';
import {
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
import { UserDataContext } from 'providers/UserDataProvider';

const Step1 = () => {
  const UserCtx = useContext(UserDataContext);
  return (
    <>
      <ContentLeftTitle>Szczegóły pokoju</ContentLeftTitle>
      <RoomContainerPhotoWrapper>
        <GreenIconStyleWrapper>
          <KeyboardArrowLeft size="36" />
        </GreenIconStyleWrapper>
        <RoomContainerPhoto url={UserCtx.room.image} />
        <GreenIconStyleWrapper>
          <KeyboardArrowRight size="36" />
        </GreenIconStyleWrapper>
      </RoomContainerPhotoWrapper>
      <RoomDescription>{UserCtx.room.description}</RoomDescription>
      <RoomMainFeaturesContainer>
        <RoomMainFeatureWrapper>
          <RoomMainFeatureIcon>
            <Resize size="24" />
          </RoomMainFeatureIcon>
          {UserCtx.room.area} m<sup>2</sup>
        </RoomMainFeatureWrapper>
        {UserCtx.room.singleBeds ? (
          <>
            <RoomMainFeatureWrapper>
              <RoomMainFeatureIcon>
                <Bed size="24" />
              </RoomMainFeatureIcon>
              {UserCtx.room.singleBeds} pojedyncze łóżko
            </RoomMainFeatureWrapper>
          </>
        ) : (
          ''
        )}
        {UserCtx.room.doubleBeds ? (
          <>
            <RoomMainFeatureWrapper>
              <RoomMainFeatureIcon>
                <Bed size="24" />
              </RoomMainFeatureIcon>
              {UserCtx.room.doubleBeds} podwójne łóżko
            </RoomMainFeatureWrapper>
          </>
        ) : (
          ''
        )}
        <RoomMainFeatureWrapper>
          <RoomMainFeatureIcon>
            <Wifi size="24" />
          </RoomMainFeatureIcon>
          {UserCtx.room.addOns.map((element) => element).join(' ')}
        </RoomMainFeatureWrapper>
      </RoomMainFeaturesContainer>
      <RoomAllFeaturesTitle>
        <GreenTextWrapper>Wyposażenie</GreenTextWrapper>
      </RoomAllFeaturesTitle>
      <RoomAllFeaturesContainer>
        {UserCtx.room.accessories.map((element) => (
          <RoomAllFeatureWrapper key="element">
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
