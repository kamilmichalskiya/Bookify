import React, { useEffect, useContext } from 'react';
import {
  ContentLeftTitle,
  RoomContainerPhotoWrapper,
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
import '@fontsource/montserrat';
import { Resize } from '@styled-icons/ionicons-outline/Resize';
import { Bed } from '@styled-icons/fa-solid/Bed';
import { Wifi } from '@styled-icons/fa-solid/Wifi';
import { Check } from '@styled-icons/material/Check';
import { UserDataContext } from 'providers/UserDataProvider';
import RoomGalery from 'components/molecules/RoomGalery/RoomGalery';

const Step1 = ({ setValidateStep }) => {
  const UserCtx = useContext(UserDataContext);

  useEffect(() => {
    setValidateStep(() => () => true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ContentLeftTitle>Szczegóły pokoju</ContentLeftTitle>
      <RoomContainerPhotoWrapper>
        <RoomGalery images={UserCtx.room.images} options={{ showBullets: UserCtx.room.images.length > 1 ? true : false }} />
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
