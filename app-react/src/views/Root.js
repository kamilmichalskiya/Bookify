import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { ProtectedRoute } from 'helpers/protectedRoute';
import LandingPage from 'components/templates/LandingPage/LandingPage';
import AdminPanel from 'components/templates/AdminPanel/AdminPanel';
import EmployeePanel from 'components/templates/EmployeePanel/EmployeePanel';
import Steps from 'components/templates/Steps/Steps';
import LinksProvider from 'providers/LinksProvider';
import UserDataProvider from 'providers/UserDataProvider';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LinksProvider>
          <UserDataProvider>
            <Wrapper>
              <Switch>
                {/* <ProtectedRoute exact path="/admin" component={AdminPanel} /> */}
                <Route exact path="/admin" component={AdminPanel} />
                <Route exact path="/employee" component={EmployeePanel} />
                <Route exact path="/steps" render={(props) => <Steps {...props} />}></Route>
                <Route exact path="/" component={LandingPage} />
              </Switch>
            </Wrapper>
          </UserDataProvider>
        </LinksProvider>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
