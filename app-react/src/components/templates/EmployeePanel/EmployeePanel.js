import React, { useState, useEffect, useContext } from 'react';
import { LinksContext } from 'providers/LinksProvider';
import Loader from 'components/atoms/Loader/Loader';
import EmployeeTabs from 'components/organisms/EmployeeTabs/EmployeeTabs';
import { Wrapper, Header, Logo, IconExit } from './EmployeePanel-styled';
import LandingPage from '../LandingPage/LandingPage';
import '@fontsource/montserrat';

const EmployeePanel = ({ history }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [reservations, setReservations] = useState([]);
  const [offers, setOffers] = useState([]);
  const [roomsOccupation, setRoomsOccupation] = useState([]);
  const [isUserPanel, setIsUserPanel] = useState(false);
  const LinksCtx = useContext(LinksContext);

  useEffect(() => {
    if (LinksCtx.reservations && LinksCtx.offers) {
      getReservations();
      getOffers();
      getRoomsOccupation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [LinksCtx.reservations]);

  useEffect(() => {
    if (LinksCtx.reservations && LinksCtx.offers && isUserPanel === false) {
      getReservations();
      getOffers();
      getRoomsOccupation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserPanel]);

  const getRoomsOccupation = async () => {
    const response = await fetch(`${LinksCtx.reservations}/occupation`);
    const data = await response.json();
    setRoomsOccupation(data);
    if (response.ok) {
      setIsLoading(false);
    }
    console.log(data);
  };

  const getReservations = async () => {
    const response = await fetch(LinksCtx.reservations);
    const data = await response.json();
    const reservationsArray = data._embedded.uiReservationList;
    setReservations(reservationsArray);
    console.log(reservationsArray);
  };

  const getOffers = async () => {
    const response = await fetch(LinksCtx.offers);
    const data = await response.json();
    const offersArray = data._embedded.uiOfferList;
    setOffers(offersArray);
    console.log(offersArray);
  };

  const updateReservations = () => {
    getReservations();
  };

  const createNewReservation = () => {
    setIsUserPanel(true);
  };

  const returnToEmployeePanel = () => {
    setIsLoading(true);
    setIsUserPanel(false);
    setIsLoading(false);
  };

  const logout = async () => {
    const response = await fetch(LinksCtx.logout, {
      method: 'GET',
    });
    if (response.redirected) {
      history.push('/');
    }
  };

  return (
    <>
      {isLoading ? <Loader isLoading={isLoading} /> : ''}
      {isUserPanel ? (
        <LandingPage employeeConfig={{ returnToEmployeePanel: returnToEmployeePanel, isEmployeeView: true }} />
      ) : (
        <>
          <Wrapper>
            <Header>
              <Logo>Bookify</Logo>
              <IconExit onClick={logout} title="Wyloguj się" />
            </Header>
            <EmployeeTabs
              reservations={reservations}
              offers={offers}
              roomsOccupation={roomsOccupation}
              getRoomsOccupation={getRoomsOccupation}
              updateReservations={updateReservations}
              createNewReservation={createNewReservation}
            />
          </Wrapper>
        </>
      )}
    </>
  );
};

export default EmployeePanel;
