import React, { useState, useEffect, useContext } from 'react';
import { Wrapper, Header, Logo, IconStyleWrapper } from './LandingPage-styled';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import List from 'components/organisms/List/List';
import { Modal } from 'components/molecules/Modal/Modal';
import Login from 'components/organisms/Login/Login';
import Footer from 'components/molecules/Footer/Footer';
import '@fontsource/montserrat';
import { AccountCircle } from '@styled-icons/material/AccountCircle';
import { Redirect } from 'react-router-dom';
import { LinksContext } from 'providers/LinksProvider';
import { UserDataContext } from 'providers/UserDataProvider';

const LandingPage = ({ history }) => {
  const [shouldRedirect, setRedirect] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const LinksCtx = useContext(LinksContext);
  const UserCtx = useContext(UserDataContext);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const onRoomDetailsClickHandler = (selectedRoom, days) => {
    const totalPrice = selectedRoom.price * days;
    UserCtx.setUserData({ ...UserCtx, room: selectedRoom, totalPrice: totalPrice });
    setRedirect(true);
  };

  useEffect(() => {
    const getRooms = async () => {
      const response = await fetch(LinksCtx.rooms);
      const data = await response.json();
      const roomsArray = data._embedded.uiRoomList;
      setRooms(roomsArray);
    };

    if (LinksCtx.rooms && rooms?.length === 0) {
      getRooms();
    }
  }, [LinksCtx, rooms]);

  return (
    <>
      {shouldRedirect ? <Redirect push to={{ pathname: '/steps' }} /> : null}
      <Wrapper>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <Login history={history}></Login>
        </Modal>
        <Header>
          <Logo>Bookify</Logo>
          <IconStyleWrapper onClick={openModal}>
            <AccountCircle size="60" />
          </IconStyleWrapper>
        </Header>
        <SearchBar displayLevelMode="user" setRooms={setRooms}></SearchBar>
        {rooms ? (
          <List rooms={rooms} onRoomDetailsClickHandler={onRoomDetailsClickHandler}></List>
        ) : (
          <>
            <h1>Przepraszamy!</h1> <h2>Dla obecnie ustawionych filtrów nie posiadamy wolnych pokoi!</h2>
          </>
        )}

        <Footer></Footer>
      </Wrapper>
    </>
  );
};

export default LandingPage;
