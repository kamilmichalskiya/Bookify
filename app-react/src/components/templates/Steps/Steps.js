import React, { useState, useEffect, useContext } from 'react';
import {
  Wrapper,
  Header,
  Logo,
  IconStyleWrapper,
  SearchBarImg,
  WhiteButton,
  SearchBarContainer,
  BottomMenu,
  ContentContainer,
  ContentLeft,
  ContentRight,
  DateContainer,
  DateRow,
  DateRowItem,
} from './Steps-styled';
import '@fontsource/montserrat';
import Step1 from 'components/organisms/StepsContent/Step1/Step1';
import Step2 from 'components/organisms/StepsContent/Step2/Step2';
import Step3 from 'components/organisms/StepsContent/Step3/Step3';
import Step4 from 'components/organisms/StepsContent/Step4/Step4';
import ProgressBar1 from 'assets/img/progressbar1.png';
import ProgressBar2 from 'assets/img/progressbar2.png';
import ProgressBar3 from 'assets/img/progressbar3.png';
import ProgressBar4 from 'assets/img/progressbar5.png';
import Accordion from 'components/molecules/Accordion/Accordion';
import { KeyboardArrowLeft } from '@styled-icons/material/KeyboardArrowLeft';
import { Redirect } from 'react-router-dom';
import { LinksContext } from 'providers/LinksProvider';
import { UserDataContext } from 'providers/UserDataProvider';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Loader from 'components/atoms/Loader/Loader';

const Steps = () => {
  const LinksCtx = useContext(LinksContext);
  const UserCtx = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);
  const [activeStep, setActiveStep] = useState(1);
  const [redirectUrl, setRedirectUrl] = useState(null);
  const [offers, setOffers] = useState([]);
  const [roomPrice] = useState(UserCtx.totalPrice);
  const [offerPrice, setOfferPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const getRoomOffers = async () => {
      const response = await fetch(LinksCtx.offers);
      const data = await response.json();
      const offersData = data._embedded.uiOfferList;
      setOffers(offersData);
      setIsLoading(false);
      console.dir(offersData);
    };
    getRoomOffers();
  }, [LinksCtx.offers]);

  useEffect(() => {
    setTotalPrice(UserCtx.totalPrice + offerPrice);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offerPrice]);

  const changeStep = (direction = 'next') => {
    console.log(`Step${activeStep} is Changing with direction ${direction}`);
    if (direction === 'next') {
      setActiveStep(activeStep + 1);
    } else if (direction === 'prev') {
      if (activeStep === 1) {
        returnToLandingPage();
      } else if (activeStep > 1) {
        setActiveStep(activeStep - 1);
      }
    }
  };

  const returnToLandingPage = () => {
    setRedirectUrl('/');
  };

  const displayStepContent = () => {
    switch (activeStep) {
      case 1:
        return <Step1 offers={offers}></Step1>;
      case 2:
        return <Step2 offers={offers} setOfferPrice={setOfferPrice}></Step2>;
      case 3:
        return <Step3 offers={offers}></Step3>;
      case 4:
        return <Step4 totalPrice={totalPrice}></Step4>;
      default:
        break;
    }
  };

  const getProgressBartImgUrl = () => {
    switch (activeStep) {
      case 1:
        return ProgressBar1;
      case 2:
        return ProgressBar2;
      case 3:
        return ProgressBar3;
      case 4:
        return ProgressBar4;
      default:
        break;
    }
  };

  return (
    <>
      {redirectUrl ? <Redirect push to={{ pathname: redirectUrl }} /> : null}
      {isLoading ? <Loader isLoading={isLoading} /> : ''}
      <Wrapper>
        <Header>
          <Logo onClick={returnToLandingPage}>Bookify</Logo>
        </Header>
        {/* search bar */}
        <SearchBarContainer>
          <SearchBarImg url={getProgressBartImgUrl()}></SearchBarImg>
        </SearchBarContainer>
        <ContentContainer>
          <ContentLeft>{displayStepContent()}</ContentLeft>
          <ContentRight>
            <Accordion title="Podsumowanie rezerwacji">
              <DateContainer>
                <DateRow>
                  <DateRowItem>
                    <p style={{ fontSize: '12px' }}>
                      {new Date(UserCtx.startDate).toLocaleDateString('pl-pl', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <p style={{ fontSize: '10px' }}>od 15:00</p>
                  </DateRowItem>
                  <HiOutlineArrowNarrowRight style={{ position: 'relative', top: '13px' }} />
                  <DateRowItem>
                    <p style={{ fontSize: '12px' }}>
                      {new Date(UserCtx.endDate).toLocaleDateString('pl-pl', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <p style={{ fontSize: '10px' }}>do 12:00</p>
                  </DateRowItem>
                </DateRow>
              </DateContainer>
              <div style={{ padding: '15px 0px' }}>
                <p style={{ fontSize: '14px' }}>
                  Pokój {UserCtx.room.capacity} osobowy <em style={{ color: '#1ED760' }}>{UserCtx.room.roomType}</em>
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '5px' }}>
                  <p style={{ fontSize: '12px' }}>Pokoje i oferta</p>
                  <p style={{ fontSize: '12px' }}>{roomPrice}zł</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '5px' }}>
                  <p style={{ fontSize: '12px' }}>Dodatki</p>
                  <p style={{ fontSize: '12px' }}>{offerPrice}zł</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '5px' }}>
                  <p style={{ fontSize: '12px', color: '#1ED760' }}>Rabat</p>
                  <p style={{ fontSize: '12px', color: '#1ED760' }}>-0zł</p>
                </div>
              </div>

              <div style={{ backgroundColor: '#444444', paddingBottom: '5px', borderRadius: '5px', padding: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p style={{ fontSize: '16px' }}>SUMA</p>
                  <p style={{ fontSize: '16px' }}>{totalPrice}zł</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p style={{ fontSize: '12px' }}>Przedpłata</p>
                  <p style={{ fontSize: '12px' }}>0zł</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p style={{ fontSize: '12px' }}>Na miejscu</p>
                  <p style={{ fontSize: '12px' }}>{totalPrice}zł</p>
                </div>
              </div>
            </Accordion>
          </ContentRight>
        </ContentContainer>
        <BottomMenu>
          <IconStyleWrapper>
            <span
              onClick={() => {
                changeStep('prev');
              }}
            >
              <KeyboardArrowLeft size="36" />
              Wstecz
            </span>
          </IconStyleWrapper>
          {activeStep < 4 ? (
            <WhiteButton
              onClick={() => {
                changeStep('next');
              }}
            >
              Dalej
            </WhiteButton>
          ) : (
            ''
          )}
        </BottomMenu>
      </Wrapper>
    </>
  );
};

export default Steps;
