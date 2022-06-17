import React, { useState, useEffect, useContext } from 'react';
import { Wrapper } from './AdminPanel-styled';
import '@fontsource/montserrat';
import auth from 'helpers/auth';
import Header from 'components/molecules/Header/Header';
import Footer from 'components/molecules/Footer/Footer';
import Tabs from 'components/organisms/Tabs/Tabs';
import { LinksContext } from 'providers/LinksProvider';

const AdminPanel = ({ history }) => {
  const [rooms, setRooms] = useState([]);
  const [offers, setOffers] = useState([]);
  const [employees, setEmployees] = useState([]);
  const LinksCtx = useContext(LinksContext);

  useEffect(() => {
    const getRooms = async () => {
      const response = await fetch(LinksCtx.rooms);
      const data = await response.json();
      const roomsArray = data._embedded.uiRoomList;
      setRooms(roomsArray);
    };

    const getOffers = async () => {
      const response = await fetch(LinksCtx.offers);
      const data = await response.json();
      const roomsArray = data._embedded.uiOfferList;
      setOffers(roomsArray);
    };

    const getEmployees = async () => {
      const response = await fetch(LinksCtx.employees);
      const data = await response.json();
      const employeesArray = data._embedded.uiEmployeeList;
      setEmployees(employeesArray);
    };

    if (LinksCtx.rooms && LinksCtx.offers && LinksCtx.employees) {
      getRooms();
      getOffers();
      getEmployees();
    } else {
      console.error('AdminPanel: Missing links for API requests!');
    }
  }, [LinksCtx]);

  const logout = () => {
    auth.logout(() => {
      history.push('/');
    });
  };

  return (
    <>
      <Wrapper>
        <Header title="Bookify"></Header>
        <Tabs rooms={rooms} offers={offers} employees={employees}></Tabs>
        <button onClick={logout}>logout</button>
        <Footer></Footer>
      </Wrapper>
    </>
  );
};

export default AdminPanel;
