import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PrimaryButton } from 'components/atoms/Button/Button';

const sendHttpRequest = async () => {
  console.log('sendHttpRequest');
  const response = await fetch('//localhost:8080/api/hello');
  const data = await response.json();
  console.log(data);
};

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Switch>
            <Route path="/">
              <br></br>
              <br></br>
              <PrimaryButton onClick={sendHttpRequest}>Get HTTP</PrimaryButton>
            </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
