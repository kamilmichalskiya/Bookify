import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from 'components/templates/LandingPage/LandingPage';
import Steps from 'components/templates/Steps/Steps';
import LinksProvider from 'providers/LinksProvider';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LinksProvider>
          <Wrapper>
            <Switch>
              <Route path="/steps" render={(props) => <Steps {...props} />}></Route>
              <Route path="/">
                <LandingPage></LandingPage>
              </Route>
            </Switch>
          </Wrapper>
        </LinksProvider>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
