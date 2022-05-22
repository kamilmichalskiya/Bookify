import React, { useState, useEffect } from 'react';
import { Wrapper, Footer, GreenTextWrapper } from './LandingPage-styled';
import Header from 'components/molecules/Header/Header';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import List from 'components/organisms/List/List';
import '@fontsource/montserrat';
import { Redirect } from 'react-router-dom';

const LandingPage = () => {
  const [shouldRedirect, setRedirect] = useState(false);
  // const [rooms, setRooms] = useState({});

  const onRoomDetailsClickHandler = () => {
    console.log('test');
    setRedirect(true);
  };

  useEffect(() => {
    getRoomList();
  }, []);

  const getRoomList = async () => {
    const response = await fetch('https://chinczyk4.herokuapp.com/games');
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      {shouldRedirect ? <Redirect push to={{ pathname: '/step1' }} /> : null}
      <Wrapper>
        <Header title="Bookify"></Header>
        <SearchBar></SearchBar>
        <List test={onRoomDetailsClickHandler}></List>
        <Footer>
          <span>Więcej informacji</span>
          <span>
            &copy;2022 <GreenTextWrapper>B</GreenTextWrapper>ookify
          </span>
          <span>Polityka prywatności</span>
        </Footer>
      </Wrapper>
    </>
  );
};

export default LandingPage;
