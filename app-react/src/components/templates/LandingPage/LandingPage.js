import React, { useState, useEffect, useContext } from 'react';
import { AccountCircle } from '@styled-icons/material/AccountCircle';
import { Wrapper, Header, Logo, IconStyleWrapper, IconExit } from './LandingPage-styled';
import { Pagination } from 'components/atoms/Pagination/Pagination';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import List from 'components/organisms/List/List';
import { Modal } from 'components/molecules/Modal/Modal';
import Login from 'components/organisms/Login/Login';
import Footer from 'components/molecules/Footer/Footer';
import '@fontsource/montserrat';
import { LinksContext } from 'providers/LinksProvider';
import { UserDataContext } from 'providers/UserDataProvider';
import Loader from 'components/atoms/Loader/Loader';
import Steps from '../Steps/Steps';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LandingPage = ({ history, employeeConfig = {} }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRedirect, setRedirect] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const LinksCtx = useContext(LinksContext);
  const UserCtx = useContext(UserDataContext);
  const roomsPerPage = 5;
  const pagesVisited = pageNumber * roomsPerPage;
  const pageCount = Math.ceil(rooms.length / roomsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const returnToLandingPage = () => {
    setRedirect(false);
  };

  const onRoomDetailsClickHandler = (selectedRoom, days) => {
    const totalPrice = selectedRoom.price * days;
    UserCtx.setUserData({ ...UserCtx, room: selectedRoom, totalPrice: totalPrice });
    setRedirect(true);
  };

  useEffect(() => {
    const queryParams = window.location.search;
    if (queryParams) {
      switch (queryParams) {
        case '?login=true':
          setShowModal(true);
          break;
        case '?error=true':
          setShowModal(true);
          toast.error('Podane dane logowania są nieprawidłowe.');
          break;
        default:
          break;
      }
    }
  }, []);

  useEffect(() => {
    const getRooms = async () => {
      const requestBody = {
        startDate: UserCtx.startDate,
        endDate: UserCtx.endDate,
        adult: 1,
        kids: 0,
        roomTypes: [],
        addOns: [],
      };
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: new Headers({ 'content-type': 'application/json' }),
      };
      const response = await fetch(`${LinksCtx.rooms}/search`, requestOptions);
      const data = await response.json();
      const roomsArray = data._embedded.uiRoomList;
      setRooms(roomsArray);
      setIsLoading(false);
    };

    if (LinksCtx.rooms && rooms?.length === 0) {
      getRooms();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [LinksCtx, rooms]);

  return (
    <>
      {shouldRedirect ? (
        <Steps returnToLandingPage={returnToLandingPage} employeeConfig={employeeConfig} />
      ) : (
        <Wrapper>
          {isLoading ? <Loader isLoading={isLoading} /> : ''}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Modal showModal={showModal} setShowModal={setShowModal}>
            <Login history={history}></Login>
          </Modal>
          <Header>
            <Logo>Bookify</Logo>
            {employeeConfig.isEmployeeView ? (
              <IconExit onClick={employeeConfig.returnToEmployeePanel} title="Wróć do panelu pracownika" />
            ) : (
              <>
                <IconStyleWrapper onClick={openModal}>
                  <AccountCircle size="60" />
                </IconStyleWrapper>
              </>
            )}
          </Header>
          <SearchBar displayLevelMode="user" setRooms={setRooms}></SearchBar>
          {!rooms.includes('empty') ? (
            <>
              <List rooms={rooms.slice(pagesVisited, pagesVisited + roomsPerPage)} onRoomDetailsClickHandler={onRoomDetailsClickHandler}></List>
              <Pagination previousLabel={'Wstecz'} nextLabel={'Dalej'} pageCount={pageCount} onPageChange={changePage} />
            </>
          ) : (
            <>
              <h1>Przepraszamy!</h1> <h2>Dla obecnie ustawionych filtrów nie posiadamy wolnych pokoi!</h2>
            </>
          )}
          <Footer></Footer>
        </Wrapper>
      )}
    </>
  );
};

export default LandingPage;
