import React, { useState, useEffect, useContext } from 'react';
import { IconStyleWrapper, ContentLeftTitle, ContentLeftSection, RowWrapper, RowText, RowWrapperProvision, UserInput } from './Step3-styled';
import { ExclamationSquareFill } from '@styled-icons/bootstrap/ExclamationSquareFill';
import FormField from 'components/molecules/FormField/FormField';
import { UserDataContext } from 'providers/UserDataProvider';
import '@fontsource/montserrat';

const Step3 = () => {
  const UserCtx = useContext(UserDataContext);
  const [customerData, setCustomerData] = useState(UserCtx.customerData);
  const [isGuestData, setIsGuestData] = useState(false);
  const [guestData, setGuestData] = useState(UserCtx.guestData);
  const [isInvoiceData, setIsInvoiceData] = useState(false);
  const [invoiceData, setInvoiceData] = useState(UserCtx.invoiceData);

  const onInputChange = (e, typeOfData) => {
    let { name, value } = e.target;
    switch (typeOfData) {
      case 'customer':
        setCustomerData({ ...customerData, [name]: value });
        break;
      case 'guest':
        setGuestData({ ...guestData, [name]: value });
        break;
      case 'invoice':
        setInvoiceData({ ...invoiceData, [name]: value });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (!isGuestData) {
      setGuestData({ name: '', surname: '', email: '' });
    }
  }, [isGuestData]);

  useEffect(() => {
    if (!isInvoiceData) {
      setInvoiceData({ companyName: '', nip: '', street: '', postalCode: '', city: '', country: '' });
    }
  }, [isInvoiceData]);

  useEffect(() => {
    UserCtx.setUserData({ ...UserCtx, customerData, guestData, invoiceData });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerData, guestData, invoiceData]);

  return (
    <>
      <ContentLeftTitle>Dane rezerwującego</ContentLeftTitle>
      <ContentLeftSection>
        <UserInput value={customerData.name} onChange={(e) => onInputChange(e, 'customer')} type="text" name="name" placeholder="Imię*" />
        <UserInput value={customerData.surname} onChange={(e) => onInputChange(e, 'customer')} type="text" name="surname" placeholder="Nazwisko*" />
        <UserInput value={customerData.email} onChange={(e) => onInputChange(e, 'customer')} type="text" name="email" placeholder="Adres e-mail*" />
        <RowWrapper>
          <FormField
            onChange={() => setIsGuestData(!isGuestData)}
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
            <UserInput
              value={guestData.surname}
              onChange={(e) => onInputChange(e, 'guest')}
              type="text"
              name="surname"
              placeholder="Nazwisko Gościa*"
            />
            <UserInput
              value={guestData.email}
              onChange={(e) => onInputChange(e, 'guest')}
              type="text"
              name="email"
              placeholder="Adres e-mail Gościa*"
            />
          </>
        ) : (
          ''
        )}
        <RowWrapper>
          <FormField
            onChange={() => setIsInvoiceData(!isInvoiceData)}
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
            <UserInput value={invoiceData.nip} onChange={(e) => onInputChange(e, 'invoice')} type="text" name="nip" placeholder="NIP*" />
            <UserInput value={invoiceData.street} onChange={(e) => onInputChange(e, 'invoice')} type="text" name="street" placeholder="Ulica*" />
            <UserInput
              value={invoiceData.postalCode}
              onChange={(e) => onInputChange(e, 'invoice')}
              type="text"
              name="postalCode"
              placeholder="Kod pocztowy*"
            />
            <UserInput value={invoiceData.city} onChange={(e) => onInputChange(e, 'invoice')} type="text" name="city" placeholder="Miasto*" />
            <UserInput value={invoiceData.country} onChange={(e) => onInputChange(e, 'invoice')} type="text" name="country" placeholder="Kraj*" />
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
