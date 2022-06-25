import React, { useState, useEffect, useContext } from 'react';
import { IconStyleWrapper, ContentLeftTitle, ContentLeftSection, RowWrapper, RowText, RowWrapperProvision, UserInput } from './Step3-styled';
import { ExclamationSquareFill } from '@styled-icons/bootstrap/ExclamationSquareFill';
import FormField from 'components/molecules/FormField/FormField';
import { UserDataContext } from 'providers/UserDataProvider';
import '@fontsource/montserrat';

const Step3 = () => {
  const UserCtx = useContext(UserDataContext);
  const [customerData, setCustomerData] = useState({
    name: '',
    surname: '',
    email: '',
  });
  const [guestData, setGuestData] = useState({
    name: '',
    surname: '',
    email: '',
  });
  const [isGuestData, setIsGuestData] = useState(false);
  const [isVat, setIsVat] = useState(false);

  const onCustomerDataChange = (e) => {
    let { name, value } = e.target;
    setCustomerData({ ...customerData, [name]: value });
  };

  const onGuestDataChange = (e) => {
    let { name, value } = e.target;
    setGuestData({ ...guestData, [name]: value });
  };

  useEffect(() => {
    if (!isGuestData) {
      setGuestData({ name: '', surname: '', email: '' });
    }
  }, [isGuestData]);

  useEffect(() => {
    UserCtx.setUserData({ ...UserCtx, customerData: customerData, guestData: guestData });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerData, guestData]);

  return (
    <>
      <ContentLeftTitle>Dane rezerwującego</ContentLeftTitle>
      <ContentLeftSection>
        <UserInput value={customerData.name} onChange={onCustomerDataChange} type="text" name="name" placeholder="Imię*" />
        <UserInput value={customerData.surname} onChange={onCustomerDataChange} type="text" name="surname" placeholder="Nazwisko*" />
        <UserInput value={customerData.email} onChange={onCustomerDataChange} type="text" name="email" placeholder="Adres e-mail*" />
        <RowWrapper>
          <FormField onChange={() => setIsVat(!isVat)} value={isVat} label="Chcę otrzymać fakturę VAT" name="isVat" id="isVat" type="checkbox" />
        </RowWrapper>
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
            <UserInput value={guestData.name} onChange={onGuestDataChange} type="text" name="name" placeholder="Imię Gościa*" />
            <UserInput value={guestData.surname} onChange={onGuestDataChange} type="text" name="surname" placeholder="Nazwisko Gościa*" />
            <UserInput value={guestData.email} onChange={onGuestDataChange} type="text" name="email" placeholder="Adres e-mail Gościa*" />
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
