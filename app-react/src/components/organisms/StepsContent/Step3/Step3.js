import React from 'react';
import {
  IconStyleWrapper,
  GreenIconStyleWrapper,
  ContentLeftContainer,
  ContentLeftTitle,
  ContentLeftSection,
  RowWrapper,
  RowText,
  RowWrapperProvision,
  UserInput,
} from './Step3-styled';
import { CheckBox } from '@styled-icons/material/CheckBox';
import { CheckBoxOutlineBlank } from '@styled-icons/material/CheckBoxOutlineBlank';
import { ExclamationSquareFill } from '@styled-icons/bootstrap/ExclamationSquareFill';
import '@fontsource/montserrat';

const Step3 = () => {
  return (
    <>
      <ContentLeftContainer>
        <ContentLeftTitle>Dane rezerwującego</ContentLeftTitle>
        <ContentLeftSection>
          <UserInput type="text" placeholder="Imię*" />
          <UserInput type="text" placeholder="Nazwisko*" />
          <UserInput type="text" placeholder="Adres e-mail*" />
          <RowWrapper>
            <GreenIconStyleWrapper>
              <CheckBox size="24" />
            </GreenIconStyleWrapper>
            <RowText>Chcę otrzymać fakturę VAT</RowText>
          </RowWrapper>
          <RowWrapper>
            <GreenIconStyleWrapper>
              <CheckBoxOutlineBlank size="24" />
            </GreenIconStyleWrapper>
            <RowText>Dane gościa inne niż rezerwującego</RowText>
          </RowWrapper>
          <RowWrapperProvision>
            <IconStyleWrapper>
              <ExclamationSquareFill size="36" />
            </IconStyleWrapper>
            <RowText>
              Poprzez kliknięcie przycisku “Dalej” wyrażasz zgodę na przetwarzanie twoich danych osobowych w celu realizacji rezerwacji.
              Administratorem twoich danych osobowych jest Bookify hotel Łódź Sp. z o. o., Al. Politechniki 420, 93-590 Łódź.
            </RowText>
          </RowWrapperProvision>
        </ContentLeftSection>
      </ContentLeftContainer>
    </>
  );
};

export default Step3;
