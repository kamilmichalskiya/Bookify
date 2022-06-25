import React, { useState, useEffect, useContext } from 'react';
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
import { UserDataContext } from 'providers/UserDataProvider';

const List = ({ rooms, onRoomDetailsClickHandler }) => {
  const UserCtx = useContext(UserDataContext);
  const [days, setDays] = useState(1);

  useEffect(() => {
    const calculateDays = (startDate, endDate) => {
      const nativeStartDate = new Date(startDate);
      const nativeEndDate = new Date(endDate);
      let difference = nativeEndDate.getTime() - nativeStartDate.getTime();
      let days = Math.ceil(difference / (1000 * 3600 * 24));
      setDays(days);
    };

    calculateDays(UserCtx.startDate, UserCtx.endDate);
  }, [UserCtx.endDate, UserCtx.startDate]);

  useEffect(() => {
    const calculateDays = (startDate, endDate) => {
      const nativeStartDate = new Date(startDate);
      const nativeEndDate = new Date(endDate);
      let difference = nativeEndDate.getTime() - nativeStartDate.getTime();
      let days = Math.ceil(difference / (1000 * 3600 * 24));
      setDays(days);
    };

    calculateDays(UserCtx.startDate, UserCtx.endDate);
  }, [UserCtx.endDate, UserCtx.startDate]);

  const calculatePrice = (price) => {
    return price * (days || 1);
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
                  {room.singleBeds ? <li key="double-bed">{room.singleBeds} łóżko podwójne</li> : ''}
                  {room.doubleBeds ? <li key="single-bed">{room.doubleBeds} łóżko pojedyncze</li> : ''}
                  <li key="bathrom">1 łazienka</li>
                </RoomFeatures>
              </RoomContainerContextDataLeft>
              <RoomContainerContextDataRight>
                {`(cena za ${days || 2} noce)`}
                <RoomPrice>
                  {calculatePrice(room.price)}
                  zł
                </RoomPrice>
                <SecondaryButton onClick={() => onRoomDetailsClickHandler(room, days)}>Szczegóły</SecondaryButton>
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
