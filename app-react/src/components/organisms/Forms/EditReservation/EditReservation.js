import React, { useState, useEffect, useContext } from 'react';
import { SaveButton } from 'components/atoms/Button/Button';
import { Header, ContentWrapper, Footer, ErrorText, OffersBox, DashedLine, RowText, SectionHeader, RowWrapper } from './EditReservation-styled';
import FormField from 'components/molecules/FormField/FormField';
import { LinksContext } from 'providers/LinksProvider';
import { toast } from 'react-toastify';

const EditReservation = ({ reservation, offers, setShowModal, updateReservations, getRoomsOccupation }) => {
  const initialValues = {
    active: reservation.active || false,
    customerData: reservation.customerData || {},
    endDate: reservation.endDate || '',
    guestData: reservation.guestData || {},
    offers: reservation.offers || [],
    paid: reservation.paid || false,
    startDate: reservation.startDate || '',
    totalPrice: reservation.totalPrice || 0,
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const LinksCtx = useContext(LinksContext);

  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;
    if (value && !isNaN(value)) {
      value = parseInt(value);
    }
    if (type === 'checkbox') {
      value = checked;
    }

    if (name.includes('guestData')) {
      const guestData = formValues.guestData || {};
      if (name.includes('Name')) {
        guestData.name = value;
        setFormValues({ ...formValues, guestData });
      } else if (name.includes('Surname')) {
        guestData.surname = value;
        setFormValues({ ...formValues, guestData });
      } else if (name.includes('Email')) {
        guestData.email = value;
        setFormValues({ ...formValues, guestData });
      }
    } else if (name.includes('customerData')) {
      const customerData = formValues.customerData || {};
      if (name.includes('Name')) {
        customerData.name = value;
        setFormValues({ ...formValues, customerData });
      } else if (name.includes('Surname')) {
        customerData.surname = value;
        setFormValues({ ...formValues, customerData });
      } else if (name.includes('Email')) {
        customerData.email = value;
        setFormValues({ ...formValues, customerData });
      }
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const handleOfferSelected = (offer) => {
    if (formValues.offers.find((selectedOffer) => offer.name === selectedOffer.name)) {
      const newOffers = formValues.offers.filter((selectedOffer) => offer.name !== selectedOffer.name);
      setFormValues({ ...formValues, offers: newOffers, totalPrice: formValues.totalPrice - offer.price });
    } else {
      const newOffers = formValues.offers;
      newOffers.push(offer);
      setFormValues({ ...formValues, offers: newOffers, totalPrice: formValues.totalPrice + offer.price });
    }
  };

  useEffect(() => {
    const updateReservation = async () => {
      const updateReservationUrl = reservation._links.UPDATE_RESERVATION[0].href;
      const requestOptions = {
        method: 'PUT',
        body: JSON.stringify(formValues),
        headers: new Headers({ 'content-type': 'application/json' }),
      };
      const response = await fetch(updateReservationUrl, requestOptions);
      const data = await response.json();
      const { status, error } = data;
      if (response.ok) {
        toast.success('Rezerwacja zaaktualizowana pomyślnie!');
        setShowModal(false);
        updateReservations();
        getRoomsOccupation();
      } else {
        toast.error(`ERROR: ${status}: ${error}`);
      }
    };

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(`Submitted Reservation: ${JSON.stringify(formValues)}`);
      updateReservation();
    }
  }, [LinksCtx.offers, formErrors, formValues, getRoomsOccupation, isSubmit, reservation, setShowModal, updateReservations]);

  const validate = (values) => {
    const errors = {};
    const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    if (!values.startDate) {
      errors.startDate = 'Data przyjazdu jest wymagana!';
    } else if (!dateRegex.test(values.startDate)) {
      errors.startDate = 'Data przyjazdu ma niepoprawny format!';
    }
    if (!values.endDate) {
      errors.endDate = 'Data wyjazdu jest wymagana!';
    } else if (!dateRegex.test(values.endDate)) {
      errors.endDate = 'Data wyjazdu ma niepoprawny format!';
    }
    if (!values.totalPrice) {
      errors.price = 'Cena jest wymagana!';
    } else if (isNaN(values.totalPrice)) {
      errors.price = 'Cena musi być liczbą!';
    }
    if (!values.customerData.name) {
      if (!errors.customerData) errors.customerData = {};
      errors.customerData.name = 'Imię klienta jest wymagane!';
    }
    if (!values.customerData.surname) {
      if (!errors.customerData) errors.customerData = {};
      errors.customerData.surname = 'Nazwisko klienta jest wymagane!';
    }
    if (!values.customerData.email) {
      if (!errors.customerData) errors.customerData = {};
      errors.customerData.email = 'E-mail klienta jest wymagany!';
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Header>{reservation?.id ? 'Edytuj Rezerwację' : 'Stwórz Rezerwację'}</Header>
      <ContentWrapper>
        <FormField
          value={formValues.active}
          label="Rezerwacja aktywna"
          name="active"
          id="reservationActive"
          type="checkbox"
          onChange={handleChange}
          checked={formValues.active ? 'checked' : ''}
        />
        <FormField
          value={formValues.paid}
          label="Rezerwacja opłacona"
          name="paid"
          id="reservationPaid"
          type="checkbox"
          onChange={handleChange}
          checked={formValues.paid ? 'checked' : ''}
        />
        <FormField
          value={formValues.totalPrice}
          label="Całkowity koszt"
          name="totalPrice"
          id="reservationTotalPrice"
          type="text"
          onChange={handleChange}
        />
        <ErrorText>{formErrors.totalPrice}</ErrorText>
        <FormField
          value={formValues.startDate}
          label="Data przyjazdu (yyyy-mm-dd)"
          name="startDate"
          id="reservationStartDate"
          type="text"
          onChange={handleChange}
        />
        <ErrorText>{formErrors.startDate}</ErrorText>
        <FormField
          value={formValues.endDate}
          label="Data wyjazdu (yyyy-mm-dd)"
          name="endDate"
          id="reservationEndDate"
          type="text"
          onChange={handleChange}
        />
        <ErrorText>{formErrors.endDate}</ErrorText>

        <FormField
          value={formValues.customerData.name}
          label="Imię klienta"
          name="customerDataName"
          id="reservationClientName"
          type="text"
          onChange={handleChange}
        />
        <ErrorText>{formErrors.customerData?.name}</ErrorText>
        <FormField
          value={formValues.customerData.surname}
          label="Nazwisko klienta"
          name="customerDataSurname"
          id="reservationClientSurname"
          type="text"
          onChange={handleChange}
        />
        <ErrorText>{formErrors.customerData?.name}</ErrorText>
        <FormField
          value={formValues.customerData.email}
          label="Adres email klienta"
          name="customerDataEmail"
          id="reservationClientEmail"
          type="text"
          onChange={handleChange}
        />
        <ErrorText>{formErrors.customerData?.name}</ErrorText>

        <FormField
          value={formValues.guestData.name}
          label="Imię gościa"
          name="guestDataName"
          id="reservationGuestName"
          type="text"
          onChange={handleChange}
        />
        <ErrorText>{formErrors.guestData?.name}</ErrorText>
        <FormField
          value={formValues.guestData?.surname}
          label="Nazwisko gościa"
          name="guestDataSurname"
          id="reservationGuestSurname"
          type="text"
          onChange={handleChange}
        />
        <ErrorText>{formErrors.guestData?.name}</ErrorText>
        <FormField
          value={formValues.guestData?.email}
          label="Adres email gościa"
          name="guestDataEmail"
          id="reservationGuestEmail"
          type="text"
          onChange={handleChange}
        />

        <OffersBox>
          <SectionHeader>Dodatkowo płatne oferty:</SectionHeader>
          {offers.map((element, i) => (
            <RowWrapper key={element.id}>
              <FormField
                onChange={() => handleOfferSelected(element)}
                value={formValues.offers.find((offer) => offer.name === element.name) ? true : false}
                checked={formValues.offers.find((offer) => offer.name === element.name) ? true : false}
                label={element.name}
                name={element.name}
                id={`${element.name}-${i}`}
                type="checkbox"
              />
              <DashedLine></DashedLine>
              <RowText>{element.price}zł (cena za noc)</RowText>
            </RowWrapper>
          ))}
        </OffersBox>
      </ContentWrapper>
      <Footer>
        <div></div>
        <SaveButton type="submit">Zapisz</SaveButton>
      </Footer>
    </form>
  );
};

export default EditReservation;
