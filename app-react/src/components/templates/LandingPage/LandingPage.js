import React, { useState, useEffect, useContext } from 'react';
import { Wrapper, Footer, GreenTextWrapper } from './LandingPage-styled';
import Header from 'components/molecules/Header/Header';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import List from 'components/organisms/List/List';
import '@fontsource/montserrat';
import { Redirect } from 'react-router-dom';
import { LinksContext } from 'providers/LinksProvider';

const LandingPage = () => {
  const [shouldRedirect, setRedirect] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [userSearch, setUserSearch] = useState({
    startDate: '',
    endDate: '',
    adultsNumber: 1,
    kidsNumber: 0,
  });
  const LinksCtx = useContext(LinksContext);

  const onRoomDetailsClickHandler = () => {
    console.log('LandingPage: roomDetailsClick');
    setRedirect(true);
  };

  useEffect(() => {
    const getRooms = async () => {
      const response = await fetch(LinksCtx.rooms);
      const data = await response.json();
      const roomsArray = data._embedded.uiRoomList;
      setRooms(roomsArray);
      console.dir(roomsArray);
    };

    if (LinksCtx.rooms && rooms.length === 0) {
      getRooms();
    }
  }, [LinksCtx, rooms.length]);

  return (
    <>
      {shouldRedirect ? <Redirect push to={{ pathname: '/step1' }} /> : null}
      <Wrapper>
        <Header title="Bookify"></Header>
        <SearchBar setUserSearch={setUserSearch}></SearchBar>
        <List rooms={rooms} onRoomDetailsClickHandler={onRoomDetailsClickHandler}></List>
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
