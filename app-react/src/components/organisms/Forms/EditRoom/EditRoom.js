import React from 'react';
import { DeleteButton, SaveButton } from 'components/atoms/Button/Button';
import { Header, ContentWrapper, Footer } from './EditRoom-styled';
import FormField from 'components/molecules/FormField/FormField';

const EditRoom = ({ room }) => {
  return (
    <>
      <Header>{room?.id ? 'Edytuj Pokój' : 'Stwórz Pokój'}</Header>
      <ContentWrapper>
        <FormField value={room.image ? room.image : ''} label="Url Zdjęcia" name="roomImage" id="roomImage" type="text"></FormField>
        <FormField value={room.roomType ? room.roomType : ''} label="Typ pokoju" name="roomType" id="roomType" type="text"></FormField>
        <FormField value={room.price ? room.price : ''} label="Koszt za noc (zł)" name="roomPrice" id="roomPrice" type="text"></FormField>
        <FormField value={room.capacity ? room.capacity : ''} label="Ilość miejsc" name="roomCapacity" id="roomCapacity" type="text"></FormField>
        <FormField value={room.beds?.length ? room.beds?.length : ''} label="Ilość łóżek" name="roomBeds" id="roomBeds" type="text"></FormField>
        <FormField
          value={room.description ? room.description : ''}
          label="Opis"
          name="roomDescription"
          id="roomDescription"
          type="textarea"
        ></FormField>
        <FormField value={room.area ? room.area : ''} label="Metraż" name="roomArea" id="roomArea" type="text"></FormField>
      </ContentWrapper>
      <Footer>
        {room?.id ? <DeleteButton>Usuń</DeleteButton> : <div></div>}
        <SaveButton>Zapisz</SaveButton>
      </Footer>
    </>
  );
};

export default EditRoom;
