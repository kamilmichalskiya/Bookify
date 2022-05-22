import React from 'react';
import {
  RoomContainer,
  RoomContainerPhoto,
  RoomContainerContext,
  RoomContainerContextTitle,
  RoomContainerContextData,
  RoomContainerContextDataLeft,
  RoomContainerContextDataRight,
  RoomFeatures,
  RoomPrice,
} from './List-styled.js';
import { SecondaryButton } from 'components/atoms/Button/Button';

const List = ({ test }) => {
  return (
    <>
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
              <SecondaryButton onClick={test}>Szczegóły</SecondaryButton>
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
              <SecondaryButton onClick={test}>Szczegóły</SecondaryButton>
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
              <SecondaryButton onClick={test}>Szczegóły</SecondaryButton>
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
              <SecondaryButton onClick={test}>Szczegóły</SecondaryButton>
            </RoomContainerContextDataRight>
          </RoomContainerContextData>
        </RoomContainerContext>
      </RoomContainer>
    </>
  );
};

// List.propTypes = {
//   label: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   type: PropTypes.string,
// };

export default List;
