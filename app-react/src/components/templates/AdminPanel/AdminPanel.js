import React, { useState, useEffect, useContext } from 'react';
import { Wrapper, Header, IconExit, Logo } from './AdminPanel-styled';
import '@fontsource/montserrat';
import Footer from 'components/molecules/Footer/Footer';
import Tabs from 'components/organisms/Tabs/Tabs';
import { LinksContext } from 'providers/LinksProvider';
import Loader from 'components/atoms/Loader/Loader';

const AdminPanel = ({ history }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [rooms, setRooms] = useState([]);
  const [offers, setOffers] = useState([]);
  const [employees, setEmployees] = useState([]);
  const LinksCtx = useContext(LinksContext);

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

  useEffect(() => {
    if (LinksCtx.rooms && LinksCtx.offers && LinksCtx.employees) {
      getRooms();
      getOffers();
      getEmployees();
    } else {
      console.error('AdminPanel: Missing links for API requests!');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [LinksCtx]);

  useEffect(() => {
    if (rooms?.length !== 0 && offers?.length !== 0 && employees?.length !== 0) {
      setIsLoading(false);
    }
  }, [rooms, offers, employees]);

  const logout = async () => {
    const response = await fetch(LinksCtx.logout,{
      method: 'GET',
    });
    if (response.redirected) {
      history.push('/');
    }
  };

  const updateData = (type = 'rooms') => {
    switch (type) {
      case 'rooms':
        getRooms();
        break;
      case 'offers':
        getOffers();
        break;
      case 'employees':
        getEmployees();
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Wrapper>
        {isLoading ? <Loader isLoading={isLoading} /> : ''}
        <Header>
          <Logo>Bookify</Logo>
          <IconExit onClick={logout} />
        </Header>
        <Tabs rooms={rooms} offers={offers} employees={employees} updateData={updateData}/>
        <Footer/>
      </Wrapper>
    </>
  );
};

export default AdminPanel;
