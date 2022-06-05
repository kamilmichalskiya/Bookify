import React, { useState, useEffect, useContext } from 'react';
import {
  Wrapper,
  Header,
  Logo,
  IconStyleWrapper,
  GreenIconStyleWrapper,
  SearchBarImg,
  WhiteButton,
  SearchBarContainer,
  BottomMenu,
  ContentContainer,
  ContentLeft,
  ContentRight,
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
import { AccountCircle } from '@styled-icons/material/AccountCircle';
import { KeyboardArrowLeft } from '@styled-icons/material/KeyboardArrowLeft';
import { KeyboardArrowDown } from '@styled-icons/material/KeyboardArrowDown';
import { Redirect } from 'react-router-dom';
import { LinksContext } from 'providers/LinksProvider';
import Collapsible from 'components/molecules/Collapsible/Collapsible';

const Steps = ({ location: { state } }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [redirectUrl, setRedirectUrl] = useState(null);
  const [offers, setOffers] = useState([]);
  const LinksCtx = useContext(LinksContext);

  useEffect(() => {
    const getRoomOffers = async () => {
      const response = await fetch(LinksCtx.offers);
      const data = await response.json();
      const offersData = data._embedded.uiOfferList;
      setOffers(offersData);
      console.dir(offersData);
    };
    getRoomOffers();
  }, [LinksCtx.offers]);

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
        return <Step1 state={state} offers={offers}></Step1>;
      case 2:
        return <Step2 state={state} offers={offers}></Step2>;
      case 3:
        return <Step3 state={state} offers={offers}></Step3>;
      case 4:
        return <Step4 state={state} offers={offers}></Step4>;
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
      <Wrapper>
        <Header>
          <Logo onClick={returnToLandingPage}>Bookify</Logo>
          <IconStyleWrapper>
            <AccountCircle size="60" />
          </IconStyleWrapper>
        </Header>
        {/* search bar */}
        <SearchBarContainer>
          <SearchBarImg url={getProgressBartImgUrl()}></SearchBarImg>
        </SearchBarContainer>
        <ContentContainer>
          <ContentLeft>{displayStepContent()}</ContentLeft>
          <ContentRight>
            <Collapsible label="Podsumowanie rezerwacji" summaryView></Collapsible>
            <GreenIconStyleWrapper>
              <KeyboardArrowDown size="36" />
            </GreenIconStyleWrapper>
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
          <WhiteButton
            onClick={() => {
              changeStep('next');
            }}
          >
            Dalej
          </WhiteButton>
        </BottomMenu>
      </Wrapper>
    </>
  );
};

export default Steps;
