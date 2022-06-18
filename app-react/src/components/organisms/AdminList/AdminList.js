import React from 'react';
import {
  ItemWrapper,
  ItemContainer,
  ItemContainerContext,
  ItemContainerContextTitle,
  ItemContainerContextData,
  ItemContainerContextDataLeft,
  ItemContainerContextDataRight,
} from './AdminList-styled.js';
import { SecondaryButton } from 'components/atoms/Button/Button';
import { Photo } from 'components/atoms/Photo/Photo';

const List = ({ items, onEditItemClickHandler }) => {
  return (
    <ItemWrapper>
      {items.map((item) => (
        <ItemContainer key={item.id}>
          {item.image ? <Photo url={item.image}></Photo> : null}
          <ItemContainerContext>
            <ItemContainerContextTitle>
              {item.roomType ? `Pokój ${item.roomType} (${item.capacity} osobowy)` : `${item.name} `}
              {item.surname ? item.surname : ''}
            </ItemContainerContextTitle>
            <ItemContainerContextData>
              <ItemContainerContextDataLeft>Numer ID: {item.id ? item.id : item.employeeId}</ItemContainerContextDataLeft>
              <ItemContainerContextDataRight>
                <SecondaryButton onClick={() => onEditItemClickHandler(item)}>Edytuj</SecondaryButton>
              </ItemContainerContextDataRight>
            </ItemContainerContextData>
          </ItemContainerContext>
        </ItemContainer>
      ))}
    </ItemWrapper>
  );
};

export default List;
