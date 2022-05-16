import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from 'components/templates/LandingPage/LandingPage';
import Step1 from 'components/templates/Step1/Step1';
import Step2 from 'components/templates/Step2/Step2';
import Step3 from 'components/templates/Step3/Step3';
import Step4 from 'components/templates/Step4/Step4';
import Registration from 'components/templates/Registration/Registration';
import Login from 'components/templates/Login/Login';

const sendHttpRequest = async () => {
  console.log('sendHttpRequest');
  await fetch('/api/hello').then((value) => value.json().then((body) => console.log(body)));
};

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Switch>
            <Route path="/step1">
              <Step1></Step1>
            </Route>
            <Route path="/step2">
              <Step2></Step2>
            </Route>
            <Route path="/step3">
              <Step3></Step3>
            </Route>
            <Route path="/step4">
              <Step4></Step4>
            </Route>
            <Route path="/">
              <LandingPage></LandingPage>
            </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
