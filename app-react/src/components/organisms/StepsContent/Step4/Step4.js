import React from 'react';
import { GreenIconStyleWrapper, ContentLeftContainer, TextSection, SectionHeader } from './Step4-styled';
import { CheckCircle } from '@styled-icons/material/CheckCircle';
import '@fontsource/montserrat';

const Step4 = () => {
  return (
    <>
      <ContentLeftContainer>
        <GreenIconStyleWrapper>
          <CheckCircle size="96" />
        </GreenIconStyleWrapper>
        <SectionHeader>Dziękujemy!</SectionHeader>
        <TextSection>Twoja rezerwacja została rozpatrzona pozytywnie a jej potwierdzenie otrzymasz wkrótce na podany adres e-mail!</TextSection>
        <TextSection>Dziękujemy za skorzystanie z Bookify.</TextSection>
      </ContentLeftContainer>
    </>
  );
};

export default Step4;
