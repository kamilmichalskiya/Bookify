import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PrimaryButton } from 'components/atoms/Button/Button';
// import LandingPage from 'components/templates/LandingPage/LandingPage';
// import Step1 from 'components/templates/Step1/Step1';
import Step2 from 'components/templates/Step2/Step2';

const sendHttpRequest = async () => {
  console.log('sendHttpRequest');
<<<<<<< HEAD
  await fetch('/api/hello').then((value) => value.json().then((body) => console.log(body.value)));
=======
  await fetch('/api/hello').then(value => value.json().then(body => console.log(body)));
>>>>>>> 0263c30b49efd657ed58a12fe4f6939a1aeb002b
};

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Switch>
            <Route path="/">
              <Step2></Step2>
            </Route>
            <Route path="/test">
              <PrimaryButton onClick={sendHttpRequest}>Get HTTP</PrimaryButton>
            </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
