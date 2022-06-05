import React, { useState } from 'react';
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
  ContentRight,
} from './Steps-styled';
import '@fontsource/montserrat';
import Step1 from 'components/organisms/StepsContent/Step1/Step1';
import Step2 from 'components/organisms/StepsContent/Step2/Step2';
import Step3 from 'components/organisms/StepsContent/Step3/Step3';
import Step4 from 'components/organisms/StepsContent/Step4/Step4';
import { AccountCircle } from '@styled-icons/material/AccountCircle';
import { KeyboardArrowLeft } from '@styled-icons/material/KeyboardArrowLeft';
import { KeyboardArrowDown } from '@styled-icons/material/KeyboardArrowDown';
import { Redirect } from 'react-router-dom';

const Steps = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [redirectUrl, setRedirectUrl] = useState(null);

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
        return <Step1></Step1>;
      case 2:
        return <Step2></Step2>;
      case 3:
        return <Step3></Step3>;
      case 4:
        return <Step4></Step4>;
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
          <SearchBarImg></SearchBarImg>
        </SearchBarContainer>
        <ContentContainer>
          {displayStepContent()}
          <ContentRight>
            Podsumowanie rezerwacji
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
