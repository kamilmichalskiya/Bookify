import React from 'react';
import {
  ItemWrapper,
  ItemContainer,
  ItemContainerContext,
  ItemContainerContextTitle,
  ItemContainerContextData,
  ItemContainerContextDataLeft,
  ItemContainerContextDataRight,
} from './EmployeeList-styled.js';
import { SecondaryButton } from 'components/atoms/Button/Button';

const EmployeeList = ({ items, openModal }) => {
  const getDateDayDiff = (startDate, endDate) => {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getDateLabel = (startDate, endDate) => {
    const dateDiff = getDateDayDiff(startDate, endDate);
    let dateLabel = 'noc';
    if (dateDiff >= 2 && dateDiff <= 4) {
      dateLabel = 'noce';
    } else if (dateDiff > 4) {
      dateLabel = 'nocy';
    }
    return dateLabel;
  };

  const getActiveOffersLabel = (offers) => {
    if (!Array.isArray(offers) || offers.length === 0) {
      return;
    }
    let activeOffersLabel = '';

    offers.forEach((offer, index) => {
      if (index === 0 && offer.name) {
        activeOffersLabel = offer.name;
      } else if (offer.name) {
        activeOffersLabel += `, ${offer.name}`;
      }
    });

    return activeOffersLabel;
  };

  return (
    <ItemWrapper>
      {items.map((item) => (
        <ItemContainer key={item.id || item.employeeId}>
          <ItemContainerContext>
            <ItemContainerContextData>
              <ItemContainerContextTitle>{`${item.customerData.name} ${item.customerData.surname}`}</ItemContainerContextTitle>
              <ItemContainerContextDataLeft>Numer ID: {item.id}</ItemContainerContextDataLeft>
              <ItemContainerContextDataLeft>Pokój: {item.room.roomType}</ItemContainerContextDataLeft>
              <ItemContainerContextDataLeft>
                Czas: {getDateDayDiff(item.startDate, item.endDate)} {getDateLabel(item.startDate, item.endDate)}
              </ItemContainerContextDataLeft>
              {item.offers.length ? <ItemContainerContextDataLeft>Dodatki: {getActiveOffersLabel(item.offers)}</ItemContainerContextDataLeft> : ''}
              <ItemContainerContextDataLeft>Cena: {item.totalPrice}zł</ItemContainerContextDataLeft>
            </ItemContainerContextData>
            <ItemContainerContextDataRight>
              <SecondaryButton onClick={() => openModal('reservation', item)}>Edytuj</SecondaryButton>
            </ItemContainerContextDataRight>
          </ItemContainerContext>
        </ItemContainer>
      ))}
    </ItemWrapper>
  );
};

export default EmployeeList;
