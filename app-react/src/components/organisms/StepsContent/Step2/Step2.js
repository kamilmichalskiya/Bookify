import React, { useState, useEffect, useContext } from 'react';
import {
  IconStyleWrapper,
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
import FormField from 'components/molecules/FormField/FormField';
import { Info } from '@styled-icons/material-outlined/Info';
import { ExclamationSquareFill } from '@styled-icons/bootstrap/ExclamationSquareFill';
import '@fontsource/montserrat';
import { UserDataContext } from 'providers/UserDataProvider';

const setBoolCheckboxStateObject = (offers) => {
  const stateObject = {};
  for (const offer of offers) {
    stateObject[offer.name] = false;
  }
  return stateObject;
};

const Step2 = ({ offers, setOfferPrice }) => {
  const UserCtx = useContext(UserDataContext);
  const [offersSelected, setOffersSelected] = useState(setBoolCheckboxStateObject(offers));
  const [totalPrice, setTotalPrice] = useState(0);
  const [days, setDays] = useState(1);

  const handleOfferSelected = (offer) => {
    setOffersSelected({ ...offersSelected, [offer.name]: !offersSelected[offer.name] });
  };

  useEffect(() => {
    const calculateDays = (startDate, endDate) => {
      const nativeStartDate = new Date(startDate);
      const nativeEndDate = new Date(endDate);
      let difference = nativeEndDate.getTime() - nativeStartDate.getTime();
      let days = Math.ceil(difference / (1000 * 3600 * 24));
      setDays(days);
    };
    calculateDays(UserCtx.startDate, UserCtx.endDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offers, offersSelected]);

  useEffect(() => {
    const calculateOfferTotalPrice = () => {
      let price = 0;
      const activeOffers = [];
      for (const offer of offers) {
        if (offersSelected[offer.name]) {
          price += offer.price;
          activeOffers.push(offer);
        }
      }
      UserCtx.setUserData({ ...UserCtx, offers: activeOffers });
      setTotalPrice((price * days).toString());
      setOfferPrice(price * days);
    };
    calculateOfferTotalPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offers, offersSelected]);

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
        {offers.map((element, i) => (
          <RowWrapper key={element.id}>
            <FormField
              onChange={() => handleOfferSelected(element)}
              value={offersSelected[element.name]}
              label={element.name}
              name={element.name}
              id={`${element.name}-${i}`}
              type="checkbox"
            />
            <IconStyleWrapper style={{ margin: '0px 0px 0px 10px' }}>
              <Info size="18" />
            </IconStyleWrapper>
            <DashedLine></DashedLine>
            <RowText>{element.price} zł (os./noc)</RowText>
          </RowWrapper>
        ))}
        <SectionSummary>
          Dodatki łącznie: <GreenTextWrapper>{totalPrice}zł</GreenTextWrapper>
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
