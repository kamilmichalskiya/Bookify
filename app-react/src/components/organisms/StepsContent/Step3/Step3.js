import React, { useState, useEffect, useContext } from 'react';
import {
  IconStyleWrapper,
  ContentLeftTitle,
  ContentLeftSection,
  RowWrapper,
  RowText,
  RowWrapperProvision,
  UserInput,
  ErrorText,
} from './Step3-styled';
import { ExclamationSquareFill } from '@styled-icons/bootstrap/ExclamationSquareFill';
import FormField from 'components/molecules/FormField/FormField';
import { UserDataContext } from 'providers/UserDataProvider';
import '@fontsource/montserrat';

const Step3 = ({ setValidateStep }) => {
  const UserCtx = useContext(UserDataContext);
  const [customerData, setCustomerData] = useState(UserCtx.customerData);
  const [isGuestData, setIsGuestData] = useState(false);
  const [guestData, setGuestData] = useState(UserCtx.guestData);
  const [isInvoiceData, setIsInvoiceData] = useState(false);
  const [invoiceData, setInvoiceData] = useState(UserCtx.invoiceData);
  const [formErrors, setFormErrors] = useState({
    customerData: {},
    guestData: {},
    invoiceData: {},
  });

  const onInputChange = (e, typeOfData) => {
    let { name, value } = e.target;
    switch (typeOfData) {
      case 'customer':
        setCustomerData({ ...customerData, [name]: value });
        break;
      case 'guest':
        setGuestData({ ...guestData, [name]: value, active: true });
        break;
      case 'invoice':
        setInvoiceData({ ...invoiceData, [name]: value, active: true });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setValidateStep(() => (UserCtx) => validateStep(UserCtx));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const validateStep = (UserCtx) => {
    const errors = validate(UserCtx);
    setFormErrors(errors);
    if (!Object.keys(errors.customerData).length && !Object.keys(errors.guestData).length && !Object.keys(errors.invoiceData).length) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (!isGuestData) {
      setGuestData({ name: '', surname: '', email: '', active: false });
    } else {
      setGuestData({ ...guestData, active: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGuestData]);

  useEffect(() => {
    if (!isInvoiceData) {
      setInvoiceData({ companyName: '', nip: '', street: '', postalCode: '', city: '', country: '', active: false });
    } else {
      setInvoiceData({ ...invoiceData, active: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInvoiceData]);

  useEffect(() => {
    UserCtx.setUserData({ ...UserCtx, customerData, guestData, invoiceData });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerData, guestData, invoiceData]);

  const validate = (UserCtx) => {
    const values = UserCtx;
    const errors = {
      customerData: {},
      guestData: {},
      invoiceData: {},
    };
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.customerData.name) {
      errors.customerData.name = 'Imię rezerwującego jest wymagane!';
    }
    if (!values.customerData.surname) {
      errors.customerData.surname = 'Nazwisko rezerwującego jest wymagane!';
    }
    if (!values.customerData.email) {
      errors.customerData.email = 'Email rezerwującego jest wymagany!';
    } else if (!regex.test(values.customerData.email)) {
      errors.customerData.email = 'Adres e-mail musi mieć poprawny format!';
    }

    if (values.guestData.active) {
      if (!values.guestData.name) {
        errors.guestData.name = 'Imię rezerwującego jest wymagane!';
      }
      if (!values.guestData.surname) {
        errors.guestData.surname = 'Nazwisko rezerwującego jest wymagane!';
      }
      if (!values.guestData.email) {
        errors.guestData.email = 'Email rezerwującego jest wymagany!';
      } else if (!regex.test(values.guestData.email)) {
        errors.guestData.email = 'Adres e-mail musi mieć poprawny format!';
      }
    }

    if (values.invoiceData.active) {
      if (!values.invoiceData.companyName) {
        errors.invoiceData.companyName = 'Nazwa firmy jest wymagana!';
      }
      if (!values.invoiceData.nip) {
        errors.invoiceData.nip = 'NIP jest wymagany!';
      }
      if (!values.invoiceData.street) {
        errors.invoiceData.street = 'Nazwa ulicy jest wymagana!';
      }
      if (!values.invoiceData.postalCode) {
        errors.invoiceData.postalCode = 'Kod pocztowy jest wymagany!';
      }
      if (!values.invoiceData.city) {
        errors.invoiceData.city = 'Miasto jest wymagane!';
      }
      if (!values.invoiceData.country) {
        errors.invoiceData.country = 'Państwo jest wymagane!';
      }
    }
    return errors;
  };

  return (
    <>
      <ContentLeftTitle>Dane rezerwującego</ContentLeftTitle>
      <ContentLeftSection>
        <UserInput value={customerData.name} onChange={(e) => onInputChange(e, 'customer')} type="text" name="name" placeholder="Imię*" />
        <ErrorText>{formErrors.customerData.name}</ErrorText>
        <UserInput value={customerData.surname} onChange={(e) => onInputChange(e, 'customer')} type="text" name="surname" placeholder="Nazwisko*" />
        <ErrorText>{formErrors.customerData.surname}</ErrorText>
        <UserInput value={customerData.email} onChange={(e) => onInputChange(e, 'customer')} type="text" name="email" placeholder="Adres e-mail*" />
        <ErrorText>{formErrors.customerData.email}</ErrorText>
        <RowWrapper>
          <FormField
            onChange={() => setIsGuestData((current) => !current)}
            value={isGuestData}
            label="Dane gościa inne niż rezerwującego"
            name="isGuestData"
            id="isGuestData"
            type="checkbox"
          />
        </RowWrapper>
        {isGuestData ? (
          <>
            <UserInput value={guestData.name} onChange={(e) => onInputChange(e, 'guest')} type="text" name="name" placeholder="Imię Gościa*" />
            <ErrorText>{formErrors.guestData.name}</ErrorText>
            <UserInput
              value={guestData.surname}
              onChange={(e) => onInputChange(e, 'guest')}
              type="text"
              name="surname"
              placeholder="Nazwisko Gościa*"
            />
            <ErrorText>{formErrors.guestData.surname}</ErrorText>
            <UserInput
              value={guestData.email}
              onChange={(e) => onInputChange(e, 'guest')}
              type="text"
              name="email"
              placeholder="Adres e-mail Gościa*"
            />
            <ErrorText>{formErrors.guestData.email}</ErrorText>
          </>
        ) : (
          ''
        )}
        <RowWrapper>
          <FormField
            onChange={() => setIsInvoiceData((current) => !current)}
            value={isInvoiceData}
            label="Chcę otrzymać fakturę VAT"
            name="isInvoiceData"
            id="isInvoiceData"
            type="checkbox"
          />
        </RowWrapper>
        {isInvoiceData ? (
          <>
            <UserInput
              value={invoiceData.companyName}
              onChange={(e) => onInputChange(e, 'invoice')}
              type="text"
              name="companyName"
              placeholder="Nazwa Firmy*"
            />
            <ErrorText>{formErrors.invoiceData.companyName}</ErrorText>
            <UserInput value={invoiceData.nip} onChange={(e) => onInputChange(e, 'invoice')} type="text" name="nip" placeholder="NIP*" />
            <ErrorText>{formErrors.invoiceData.nip}</ErrorText>
            <UserInput value={invoiceData.street} onChange={(e) => onInputChange(e, 'invoice')} type="text" name="street" placeholder="Ulica*" />
            <ErrorText>{formErrors.invoiceData.street}</ErrorText>
            <UserInput
              value={invoiceData.postalCode}
              onChange={(e) => onInputChange(e, 'invoice')}
              type="text"
              name="postalCode"
              placeholder="Kod pocztowy*"
            />
            <ErrorText>{formErrors.invoiceData.postalCode}</ErrorText>
            <UserInput value={invoiceData.city} onChange={(e) => onInputChange(e, 'invoice')} type="text" name="city" placeholder="Miasto*" />
            <ErrorText>{formErrors.invoiceData.city}</ErrorText>
            <UserInput value={invoiceData.country} onChange={(e) => onInputChange(e, 'invoice')} type="text" name="country" placeholder="Kraj*" />
            <ErrorText>{formErrors.invoiceData.country}</ErrorText>
          </>
        ) : (
          ''
        )}
        <RowWrapperProvision>
          <IconStyleWrapper>
            <ExclamationSquareFill size="36" />
          </IconStyleWrapper>
          <RowText>
            Poprzez kliknięcie przycisku “Dalej” wyrażasz zgodę na przetwarzanie twoich danych osobowych w celu realizacji rezerwacji. Administratorem
            twoich danych osobowych jest Bookify hotel Łódź Sp. z o. o., Al. Politechniki 420, 93-590 Łódź.
          </RowText>
        </RowWrapperProvision>
      </ContentLeftSection>
    </>
  );
};

export default Step3;
