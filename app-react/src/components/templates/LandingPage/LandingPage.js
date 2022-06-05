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
  const [userSelection, setUserSelection] = useState({
    startDate: '',
    endDate: '',
    days: 1,
    adultsNumber: 1,
    kidsNumber: 0,
    selectedRoom: {},
  });
  const LinksCtx = useContext(LinksContext);

  const onRoomDetailsClickHandler = (selectedRoom) => {
    setUserSelection({ ...userSelection, selectedRoom: selectedRoom });
    setRedirect(true);
  };

  useEffect(() => {
    const getRooms = async () => {
      const response = await fetch(LinksCtx.rooms);
      const data = await response.json();
      const roomsArray = data._embedded.uiRoomList;
      setRooms(roomsArray);
    };

    if (LinksCtx.rooms && rooms.length === 0) {
      getRooms();
    }
  }, [LinksCtx, rooms.length]);

  return (
    <>
      {shouldRedirect ? <Redirect push to={{ pathname: '/steps', state: userSelection }} /> : null}
      <Wrapper>
        <Header title="Bookify"></Header>
        <SearchBar setUserSelection={setUserSelection}></SearchBar>
        <List rooms={rooms} onRoomDetailsClickHandler={onRoomDetailsClickHandler} userSelection={userSelection}></List>
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
