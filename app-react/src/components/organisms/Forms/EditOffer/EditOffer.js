import React, { useState, useEffect, useContext } from 'react';
import { SaveButton } from 'components/atoms/Button/Button';
import { Header, ContentWrapper, Footer, ErrorText } from './EditOffer-styled';
import FormField from 'components/molecules/FormField/FormField';
import { LinksContext } from 'providers/LinksProvider';

const EditOffer = ({ offer, setShowModal, updateData }) => {
  const initialValues = {
    active: offer.active || false,
    name: offer.name || offer.name || '',
    price: offer.price || '',
    details: offer.details || '',
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
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    const updateOffer = async () => {
      const updateOfferUrl = offer._links.UPDATE_OFFER.href;
      const requestOptions = {
        method: 'PUT',
        body: JSON.stringify(formValues),
        headers: new Headers({ 'content-type': 'application/json' }),
      };
      const response = await fetch(updateOfferUrl, requestOptions);
      const data = await response.json();
      const { status, error } = data;
      if (response.ok) {
        alert('Oferta zaaktualizowana pomyślnie!');
        setShowModal(false);
        updateData('offers');
      } else {
        alert(`ERROR: An Error occured: ${status}: ${error}`);
      }
    };

    const createOffer = async () => {
      const createOfferUrl = LinksCtx.offers;
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify(formValues),
        headers: new Headers({ 'content-type': 'application/json' }),
      };
      const response = await fetch(createOfferUrl, requestOptions);
      const data = await response.json();
      const { status, error } = data;
      if (response.ok) {
        alert('Oferta stworzona pomyślnie!');
        setShowModal(false);
        updateData('offers');
      } else {
        alert(`ERROR: An Error occured: ${status}: ${error}`);
      }
    };

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(`Submitted Offer: ${JSON.stringify(formValues)}`);
      if (offer.isNew) {
        createOffer();
      } else {
        updateOffer();
      }
    }
  }, [LinksCtx.offers, formErrors, formValues, isSubmit, offer, setShowModal, updateData]);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Nazwa Oferty jest wymagana!';
    }
    if (!values.price) {
      errors.price = 'Cena jest wymagana!';
    } else if (isNaN(values.price)) {
      errors.price = 'Cena musi być liczbą!';
    }
    if (!values.details) {
      errors.details = 'Szczegóły są wymagane!';
    }
    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Header>{offer?.id ? 'Edytuj Ofertę' : 'Stwórz Ofertę'}</Header>
      <ContentWrapper>
        <FormField
          value={formValues.active}
          label="Oferta aktywna"
          name="active"
          id="offerActive"
          type="checkbox"
          onChange={handleChange}
        ></FormField>
        <FormField value={formValues.name} label="Nazwa Oferty" name="name" id="offerName" type="text" onChange={handleChange}></FormField>
        <ErrorText>{formErrors.name}</ErrorText>
        <FormField value={formValues.price} label="Cena za noc (zł)" name="price" id="offerPrice" type="text" onChange={handleChange}></FormField>
        <ErrorText>{formErrors.price}</ErrorText>
        <FormField
          value={formValues.details}
          label="Szczegóły oferty"
          name="details"
          id="offerDetails"
          type="textarea"
          onChange={handleChange}
        ></FormField>
        <ErrorText>{formErrors.details}</ErrorText>
      </ContentWrapper>
      <Footer>
        <div></div>
        <SaveButton>Zapisz</SaveButton>
      </Footer>
    </form>
  );
};

export default EditOffer;
