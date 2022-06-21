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

const List = ({ rooms, onRoomDetailsClickHandler, userSelection }) => {
  const calculatePrice = (price, capacity, days) => {
    return price * capacity * (days || 1);
  };
  return (
    <RoomWrapper>
      {rooms.map((room) => (
        <RoomContainer key={room.id}>
          <Photo url={room.image}></Photo>
          <RoomContainerContext>
            <RoomContainerContextTitle>
              Pokój {room.roomType} ({room.capacity} osobowy)
            </RoomContainerContextTitle>
            <RoomContainerContextData>
              <RoomContainerContextDataLeft>
                <RoomFeatures>
                  <li key="capacity">{room.capacity} gości</li>
                  {room.singleBed ? <li key="double-bed">{room.singleBed} łóżko podwójne</li> : ''}
                  {room.doubleBed ? <li key="single-bed">{room.doubleBed} łóżko pojedyńcze</li> : ''}
                  <li key="bathrom">1 łazienka</li>
                </RoomFeatures>
              </RoomContainerContextDataLeft>
              <RoomContainerContextDataRight>
                {`(cena za ${userSelection?.days || 2} noce)`}
                <RoomPrice>
                  {calculatePrice(room.price, room.capacity, userSelection?.days)}
                  zł
                </RoomPrice>
                <SecondaryButton onClick={() => onRoomDetailsClickHandler(room)}>Szczegóły</SecondaryButton>
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
