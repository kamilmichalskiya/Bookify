import React from 'react';
import {
  RoomWrapper,
  RoomContainer,
  RoomContainerContext,
  RoomContainerContextTitle,
  RoomContainerContextData,
  RoomContainerContextDataLeft,
  RoomContainerContextDataRight,
  RoomFeatures,
  RoomPrice,
} from './List-styled.js';
import { SecondaryButton } from 'components/atoms/Button/Button';
import { Photo } from 'components/atoms/Photo/Photo';

const List = ({ rooms, onRoomDetailsClickHandler, userSearch }) => {
  const calculatePrice = (price, capacity, days) => {
    return price * capacity * (days || 1);
  };
  return (
    <RoomWrapper>
      {rooms.map(({ roomType, capacity, beds, price }, index) => (
        <RoomContainer>
          <Photo url={`room${index + 1}`}></Photo>
          <RoomContainerContext>
            <RoomContainerContextTitle>
              Pokój {roomType} ({capacity} osobowy)
            </RoomContainerContextTitle>
            <RoomContainerContextData>
              <RoomContainerContextDataLeft>
                <RoomFeatures>
                  <li>{capacity} gości</li>
                  <li>1 sypialnia</li>
                  {beds.includes('DOUBLE_BED') ? <li>1 łóżko podwójne</li> : ''}
                  {beds.includes('SINGLE_BED') ? <li>1 łóżko pojedyńcze</li> : ''}
                  <li>1 łazienka</li>
                </RoomFeatures>
              </RoomContainerContextDataLeft>
              <RoomContainerContextDataRight>
                (cena za 2 noce)
                <RoomPrice>
                  {calculatePrice(price, capacity, userSearch.days)}
                  zł
                </RoomPrice>
                <SecondaryButton onClick={onRoomDetailsClickHandler}>Szczegóły</SecondaryButton>
              </RoomContainerContextDataRight>
            </RoomContainerContextData>
          </RoomContainerContext>
        </RoomContainer>
      ))}
    </RoomWrapper>
  );
};

// List.propTypes = {
//   label: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   type: PropTypes.string,
// };

export default List;
