import React from 'react';
import { Wrapper } from './AdminPanel-styled';
import '@fontsource/montserrat';
import auth from 'helpers/auth';
// import { LinksContext } from 'providers/LinksProvider';

const logout = ({ history }) => {
  auth.logout(() => {
    history.push('/');
  });
};

const AdminPanel = () => {
  return (
    <>
      <Wrapper>Welcome to the admin panel!</Wrapper>
      <button onClick={logout}>logout</button>
    </>
  );
};

export default AdminPanel;
