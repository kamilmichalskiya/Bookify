import React, { useState, useContext, useEffect } from 'react';
import { Wrapper, ContentLeftTitle, ReCaptchaWrapper, GreenTextWrapper, PaymentHeader, PaymentButtonWrapper, ErrorText } from './Step4-styled';
import { UserDataContext } from 'providers/UserDataProvider';
import ReCAPTCHA from 'react-google-recaptcha';
import Card from 'components/atoms/Card/Card';
import FormField from 'components/molecules/FormField/FormField';
import { SaveButton } from 'components/atoms/Button/Button';
import { formatCreditCardNumber, formatCVC, formatExpirationDate } from 'helpers/cardUtils';

const Step4 = ({ totalPrice, changeStep, setValidateStep }) => {
  const [cardState, setCardState] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const UserCtx = useContext(UserDataContext);
  const [isRecaptchaValid, setIsRecaptchaValid] = useState(false);
  let recaptchaUrl = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

  useEffect(() => {
    setValidateStep(() => () => true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputFocus = (e) => {
    setCardState({ ...cardState, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const formattedValue = formatValue(name, value);
    setCardState({ ...cardState, [name]: formattedValue });
  };

  const formatValue = (name, value) => {
    switch (name) {
      case 'number':
        return formatCreditCardNumber(value);
      case 'expiry':
        return formatExpirationDate(value);
      case 'cvc':
        return formatCVC(value);
      default:
        return value;
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.number) {
      errors.number = 'Numer karty jest wymagany!';
    } else if (isNaN(values.number.replaceAll(' ', ''))) {
      errors.number = 'Numer karty musi być liczbą!';
    }
    if (!values.name) {
      errors.name = 'Właściciel Karty jest wymagany!';
    } else if (values.name.length < 4) {
      errors.name = 'Nazwa właściciela Karty jest zbyt krótka!';
    }
    if (!values.expiry) {
      errors.expiry = 'Data wygaśnięcia jest wymagana!';
    } else if (isNaN(values.expiry.replace('/', ''))) {
      errors.expiry = 'Data wygaśnięcia musi być liczbą!';
    } else if (values.expiry.substr(0, 2) > 12) {
      errors.expiry = 'Data wygaśnięcia ma niepoprawny miesiąc';
    }
    if (!values.cvc) {
      errors.cvc = 'Kod CVC jest wymagany!';
    } else if (isNaN(values.cvc)) {
      errors.cvc = 'Kod CVC musi być liczbą!';
    } else if (values.cvc.length < 3) {
      errors.cvc = 'Kod CVC jest zbyt krótki!';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(cardState));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setTimeout(() => {
        changeStep('next');
      }, 1000);
    }
  }, [isSubmit, formErrors, changeStep]);

  return (
    <Wrapper>
      <ContentLeftTitle>Przedpłata</ContentLeftTitle>
      {isRecaptchaValid ? (
        <>
          <PaymentHeader>
            W celu złożenia rezerwacji pokoju konieczne będzie złożenie przedpłaty wynoszącej:
            <GreenTextWrapper> {totalPrice}zł</GreenTextWrapper>
          </PaymentHeader>
          <h2>Opłać rezerwację przy pomocy karty płatniczej</h2>
          <Card cvc={cardState.cvc} expiry={cardState.expiry} focused={cardState.focus} name={cardState.name} number={cardState.number} />
          <form>
            <FormField
              onChange={handleInputChange}
              value={cardState.number}
              label="Numer karty"
              name="number"
              id="card-number"
              type="text"
              onFocus={handleInputFocus}
              maxLength="19"
            />
            <ErrorText>{formErrors.number}</ErrorText>
            <FormField
              onChange={handleInputChange}
              value={cardState.name}
              label="Właściciel karty"
              name="name"
              id="card-owner"
              type="text"
              onFocus={handleInputFocus}
              maxLength="16"
            />
            <ErrorText>{formErrors.name}</ErrorText>
            <FormField
              onChange={handleInputChange}
              value={cardState.expiry}
              label="Data wygaśnięcia"
              name="expiry"
              id="card-expiration-date"
              type="text"
              onFocus={handleInputFocus}
              maxLength="5"
            />
            <ErrorText>{formErrors.expiry}</ErrorText>
            <FormField
              onChange={handleInputChange}
              value={cardState.cvc}
              label="CVC"
              name="cvc"
              id="card-cvc"
              type="text"
              onFocus={handleInputFocus}
              maxLength="3"
            />
            <ErrorText>{formErrors.cvc}</ErrorText>
            <PaymentButtonWrapper>
              <SaveButton onClick={handleSubmit}>Zapłać</SaveButton>
            </PaymentButtonWrapper>
          </form>
        </>
      ) : (
        <ReCaptchaWrapper>
          <ReCAPTCHA sitekey={recaptchaUrl} onChange={() => setIsRecaptchaValid(true)} />
        </ReCaptchaWrapper>
      )}
    </Wrapper>
  );
};

export default Step4;
