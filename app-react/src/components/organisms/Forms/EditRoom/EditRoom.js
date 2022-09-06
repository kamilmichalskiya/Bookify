import React, { useState, useEffect, useContext } from 'react';
import { SaveButton, Button, PrimaryButton, SecondaryButton, TertiaryButton, DeleteButton } from 'components/atoms/Button/Button';
import { Header, ContentWrapper, Footer, ErrorText, ImageContainer, DeleteImageButton } from './EditRoom-styled';
import { LinksContext } from 'providers/LinksProvider';
import { roomTypeOptions } from 'data/roomTypeOptions';
import { addOnOptions } from 'data/addOnOptions';
import { Label } from 'components/atoms/Label/Label';
import { convertBase64 } from 'helpers/convertBase64';
import { toast } from 'react-toastify';
import FormField from 'components/molecules/FormField/FormField';
import RoomGalery from 'components/molecules/RoomGalery/RoomGalery';

const EditRoom = ({ room, setShowModal, updateData }) => {
  const initialValues = {
    active: room.active || false,
    images: room.images || '',
    roomType: room.roomType ? { label: room.roomType, value: room.roomType } : '',
    price: room.price || '',
    capacity: room.capacity || 0,
    singleBeds: room.singleBeds || 0,
    doubleBeds: room.doubleBeds || 0,
    description: room.description || '',
    area: room.area || '',
    addOns: room.addOns || [],
    accessories: room.accessories || [],
  };
  if (Array.isArray(room.addOns)) {
    const addOns = [];
    for (const element of room.addOns) {
      addOns.push({
        value: element,
        label: element,
      });
    }
    initialValues.addOns = addOns;
  }
  if (Array.isArray(room.accessories)) {
    const accessories = [];
    for (const element of room.accessories) {
      accessories.push({
        value: element,
        label: element,
      });
    }
    initialValues.accessories = accessories;
  }

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [roomImageIndex, setRoomImageIndex] = useState(0);
  const LinksCtx = useContext(LinksContext);

  const roomImageSwipeCallback = (index) => {
    setRoomImageIndex(index);
  };

  const handleChange = (e) => {
    if (e.type === 'roomType') {
      const { type, value } = e;
      setFormValues({ ...formValues, [type]: value });
      return;
    }

    let { name, value, type, checked } = e.target;
    if (value && !isNaN(value)) {
      value = parseInt(value);
    }
    if (type === 'checkbox') {
      value = checked;
    }
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleAddOnsSelectChange = (options) => {
    setFormValues({ ...formValues, addOns: options });
  };

  const handleAccessoriesSelectChange = (options) => {
    setFormValues({ ...formValues, accessories: options });
  };

  const handleStepperSingleBedChange = (value) => {
    setFormValues({ ...formValues, singleBeds: value });
  };

  const handleStepperDoubleBedChange = (value) => {
    setFormValues({ ...formValues, doubleBeds: value });
  };

  const handlerStepperCapacityChange = (value) => {
    setFormValues({ ...formValues, capacity: value });
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    const updateRoom = async (formFinalValues) => {
      const updateRoomUrl = room._links.UPDATE_ROOM.href;
      const requestOptions = {
        method: 'PUT',
        body: JSON.stringify(formFinalValues),
        headers: new Headers({ 'content-type': 'application/json' }),
      };
      const response = await fetch(updateRoomUrl, requestOptions);
      const data = await response.json();
      const { status, error } = data;
      if (response.ok) {
        toast.success('Pokój zaaktualizowany pomyślnie!');
        setShowModal(false);
        updateData('rooms');
      } else {
        toast.error(`ERROR: ${status}: ${error}`);
      }
    };

    const createRoom = async (formFinalValues) => {
      const createRoomUrl = LinksCtx.rooms;
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify(formFinalValues),
        headers: new Headers({ 'content-type': 'application/json' }),
      };
      const response = await fetch(createRoomUrl, requestOptions);
      const data = await response.json();
      const { status, error } = data;
      if (response.ok) {
        toast.success('Pokój stworzony pomyślnie!');
        setShowModal(false);
        updateData('rooms');
      } else {
        toast.error(`ERROR: ${status}: ${error}`);
      }
    };

    const formFinalValues = { ...formValues };
    formFinalValues.addOns = [];
    formFinalValues.accessories = [];
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      if (Array.isArray(formValues.accessories)) {
        for (const element of formValues.accessories) {
          formFinalValues.accessories.push(element.value);
        }
      }
      if (Array.isArray(formValues.addOns)) {
        for (const element of formValues.addOns) {
          formFinalValues.addOns.push(element.value);
        }
      }
      if (formValues.roomType) {
        formFinalValues.roomType = formValues.roomType.value;
      }
      console.log(`Submitted Room: ${JSON.stringify(formValues)}`);
      if (room.isNew) {
        createRoom(formFinalValues);
      } else {
        updateRoom(formFinalValues);
      }
    }
  }, [LinksCtx.rooms, formErrors, formValues, isSubmit, room, setShowModal, updateData]);

  const validate = (values) => {
    const errors = {};
    if (!values.images || values.images.length === 0) {
      errors.images = 'Minimum jedno zdjęcie jest wymagane!';
    }
    if (!values.roomType) {
      errors.roomType = 'Rodzaj pokoju jest wymagany!';
    }
    if (!values.capacity) {
      errors.capacity = 'Pojemność pokoju jest wymagana!';
    }
    if (!values.singleBeds && !values.doubleBeds) {
      errors.singleBeds = 'Wymagane jest co najmniej jedno łóżko w pokoju!';
      errors.doubleBeds = 'Wymagane jest co najmniej jedno łóżko w pokoju!';
    }
    if (!values.description) {
      errors.description = 'Opis pokoju jest wymagany!';
    }
    if (!values.area) {
      errors.area = 'Metraż jest wymagany!';
    } else if (isNaN(values.area)) {
      errors.price = 'Metraż musi być liczbą!';
    }
    if (Array.isArray(values.addOns) && values.addOns.length === 0) {
      errors.addOns = 'Minimum jeden dodatek jest wymagany!';
    }
    if (Array.isArray(values.accessories) && values.accessories.length === 0) {
      errors.accessories = 'Minimum jeden element wyposażenia jest wymagany!';
    }
    return errors;
  };

  const removeImage = (e) => {
    e.preventDefault();
    if (formValues.images.length >= roomImageIndex) {
      const newImages = formValues.images;
      newImages.splice(roomImageIndex, 1);
      setFormValues({ ...formValues, images: newImages });
      setRoomImageIndex(roomImageIndex - 1);
    }
  };

  const addImage = async (e) => {
    e.preventDefault();
    const files = e.target.files;
    const base64 = await convertBase64(files[0]);
    const newImages = formValues.images;
    newImages.push(base64);
    setFormValues({ ...formValues, images: newImages });
    setRoomImageIndex(roomImageIndex + 1);
  };

  return (
    <form>
      <Header>{room?.id ? 'Edytuj pokój' : 'Stwórz pokój'}</Header>
      <ContentWrapper>
        <FormField
          onChange={handleChange}
          label="Pokój aktywny"
          name="active"
          id="roomActive"
          type="checkbox"
          disabled={false}
          options=""
          checked={formValues.active ? 'checked' : ''}
          value=""
        />
        {formValues.images.length > 0 ? (
          <>
            <Label>Zdjęcie pokoju:</Label>
            <ImageContainer>
              <RoomGalery images={formValues.images} options={{ showNav: false }} roomImageSwipeCallback={roomImageSwipeCallback} />
              <DeleteImageButton onClick={removeImage} title="Usuń zdjęcie">
                X
              </DeleteImageButton>
            </ImageContainer>
            <FormField onChange={addImage} value="" label="Wgraj więcej zdjęć" name="images" id="roomImages" type="file" />
          </>
        ) : (
          <FormField onChange={addImage} value="" label="Wgraj zdjęcie" name="images" id="roomImages" type="file" />
        )}
        <ErrorText>{formErrors.images}</ErrorText>
        <FormField
          onChange={handleChange}
          value={formValues.roomType}
          label="Typ pokoju"
          name="roomType"
          id="roomType"
          type="select"
          disabled={false}
          options={roomTypeOptions}
        />
        <ErrorText>{formErrors.roomType}</ErrorText>
        <FormField onChange={handleChange} value={formValues.price} label="Koszt za noc (zł)" name="price" id="roomPrice" type="text" />
        <ErrorText>{formErrors.price}</ErrorText>
        <FormField
          onChange={handlerStepperCapacityChange}
          value={formValues.capacity}
          label="Ilość miejsc"
          name="capacity"
          id="roomCapacity"
          type="stepper"
        />
        <ErrorText>{formErrors.capacity}</ErrorText>
        <FormField
          onChange={handleStepperSingleBedChange}
          value={formValues.singleBeds}
          label="Ilość pojedynczych łóżek"
          name="singleBeds"
          id="roomSingleBeds"
          type="stepper"
        />
        <ErrorText>{formErrors.singleBeds}</ErrorText>
        <FormField
          onChange={handleStepperDoubleBedChange}
          value={formValues.doubleBeds}
          label="Ilość podwójnych łóżek"
          name="doubleBeds"
          id="roomDoubleBeds"
          type="stepper"
        />
        <ErrorText>{formErrors.doubleBeds}</ErrorText>
        <FormField onChange={handleChange} value={formValues.area} label="Metraż (m²)" name="area" id="roomArea" type="text" />
        <ErrorText>{formErrors.area}</ErrorText>
        <FormField
          onChange={handleAddOnsSelectChange}
          value={formValues.addOns}
          label="Dodatki"
          name="addOns"
          id="roomAddOns"
          type="multiSelect"
          disabled={false}
          options={addOnOptions}
        />
        <ErrorText>{formErrors.addOns}</ErrorText>
        <FormField
          onChange={handleAccessoriesSelectChange}
          value={formValues.accessories}
          label="Wyposażenie"
          name="accessories"
          id="roomAccessories"
          type="creatableSelect"
          options={formValues.accessories}
        />
        <ErrorText>{formErrors.accessories}</ErrorText>
        <FormField
          onChange={handleChange}
          value={formValues.description}
          label="Opis pokoju"
          name="description"
          id="roomDescription"
          type="textarea"
        />
        <ErrorText>{formErrors.description}</ErrorText>
      </ContentWrapper>
      <Footer>
        <div></div>
        <SaveButton onClick={handleSubmit}>Zapisz</SaveButton>
        <Button onClick={handleSubmit}>Button</Button>
        <PrimaryButton onClick={handleSubmit}>Primary</PrimaryButton>
        <SecondaryButton onClick={handleSubmit}>Secondary</SecondaryButton>
        <TertiaryButton onClick={handleSubmit}>Tertiary</TertiaryButton>
        <DeleteButton onClick={handleSubmit}>Delete</DeleteButton>
      </Footer>
    </form>
  );
};

export default EditRoom;
