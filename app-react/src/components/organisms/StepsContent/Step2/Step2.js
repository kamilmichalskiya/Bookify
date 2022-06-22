import React from 'react';
import {
  IconStyleWrapper,
  GreenIconStyleWrapper,
  ContentLeftTitle,
  ContentLeftSection1,
  ContentLeftSection2,
  UnorderedList,
  ListItem,
  SectionHeader,
  RowWrapper,
  DashedLine,
  RowText,
  GreenTextWrapper,
  SectionSummary,
} from './Step2-styled';
import { CheckBox } from '@styled-icons/material/CheckBox';
// import { CheckBoxOutlineBlank } from '@styled-icons/material/CheckBoxOutlineBlank';
import { Info } from '@styled-icons/material-outlined/Info';
import { ExclamationSquareFill } from '@styled-icons/bootstrap/ExclamationSquareFill';
import '@fontsource/montserrat';

const Step2 = ({ offers }) => {
  return (
    <>
      <ContentLeftTitle>Szczegóły oferty</ContentLeftTitle>
      <ContentLeftSection1>
        <SectionHeader>Oferta zawiera:</SectionHeader>
        <UnorderedList>
          <ListItem>rabat od stawki elastycznej uzależniony od długości pobytu i hotelu</ListItem>
          <ListItem>bezpłatny, nieograniczony dostęp do internetu</ListItem>
          <ListItem>bezpłatne wypożyczenie rowerów</ListItem>
          <ListItem>8% VAT</ListItem>
        </UnorderedList>
      </ContentLeftSection1>
      <ContentLeftSection2>
        <SectionHeader>Dodatkowo płatne:</SectionHeader>
        {offers.map((element) => (
          <RowWrapper key={element.id}>
            <GreenIconStyleWrapper>
              <CheckBox size="24" />
            </GreenIconStyleWrapper>
            <RowText>{element.name}</RowText>
            <IconStyleWrapper>
              <Info size="18" />
            </IconStyleWrapper>
            <DashedLine></DashedLine>
            <RowText>{element.price} zł (os./noc)</RowText>
          </RowWrapper>
        ))}
        <SectionSummary>
          Dodatki łącznie: <GreenTextWrapper>276zł</GreenTextWrapper>
        </SectionSummary>
        <RowWrapper>
          <ExclamationSquareFill size="36" />
          <RowText>W przypadku rezerwacji więcej niż 10 pokoi mogą obowiązywać inne warunki i dodatkowe opłaty.</RowText>
        </RowWrapper>
      </ContentLeftSection2>
    </>
  );
};

export default Step2;
