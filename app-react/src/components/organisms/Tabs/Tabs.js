import React, { useState } from 'react';
import { TabsWrapper, TabsList, TabContent, TabHeader, NavigationBar, ModalContainer } from './Tabs-styled';
import PropTypes from 'prop-types';
import AdminList from 'components/organisms/AdminList/AdminList';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import { Modal } from 'components/molecules/Modal/Modal';
import EditRoom from 'components/organisms/Forms/EditRoom/EditRoom';
import EditOffer from 'components/organisms/Forms/EditOffer/EditOffer';
import EditEmployee from 'components/organisms/Forms/EditEmployee/EditEmployee';
import { TertiaryButton } from 'components/atoms/Button/Button';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Tabs = ({ rooms, offers, employees, updateData }) => {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [activeItem, setActiveItem] = useState({});

  const openModal = (type = 'rooms', items) => {
    console.log(type, items);
    let newItems;
    if (items) {
      newItems = { ...items };
      newItems.type = type;
    } else {
      newItems = { type, isNew: true };
    }
    setActiveItem(newItems);
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <TabsWrapper>
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
        <TabsList>
          <TabHeader
            onClick={() => {
              setIndex(0);
            }}
            active={index === 0}
          >
            Pokoje
          </TabHeader>
          <TabHeader
            onClick={() => {
              setIndex(1);
            }}
            active={index === 1}
          >
            Oferty
          </TabHeader>
          <TabHeader
            onClick={() => {
              setIndex(2);
            }}
            active={index === 2}
          >
            Pracownicy
          </TabHeader>
        </TabsList>
        <TabContent hidden={index !== 0}>
          <NavigationBar>
            <SearchBar displayLevelMode="admin"></SearchBar>
            <TertiaryButton onClick={() => openModal('rooms')}>Dodaj</TertiaryButton>
          </NavigationBar>
          <AdminList type="rooms" items={rooms} openModal={openModal}></AdminList>
        </TabContent>
        <TabContent hidden={index !== 1}>
          <NavigationBar>
            <SearchBar displayLevelMode="admin"></SearchBar>
            <TertiaryButton onClick={() => openModal('offers')}>Dodaj</TertiaryButton>
          </NavigationBar>
          <AdminList type="offers" items={offers} openModal={openModal}></AdminList>
        </TabContent>
        <TabContent hidden={index !== 2}>
          <NavigationBar>
            <SearchBar displayLevelMode="admin"></SearchBar>
            <TertiaryButton onClick={() => openModal('employees')}>Dodaj</TertiaryButton>
          </NavigationBar>
          <AdminList type="employees" items={employees} openModal={openModal}></AdminList>
        </TabContent>
      </TabsWrapper>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ModalContainer>
          {activeItem.type === 'rooms' ? <EditRoom room={activeItem} setShowModal={setShowModal} updateData={updateData}></EditRoom> : ''}
          {activeItem.type === 'offers' ? <EditOffer offer={activeItem} setShowModal={setShowModal} updateData={updateData}></EditOffer> : ''}
          {activeItem.type === 'employees' ? (
            <EditEmployee employee={activeItem} setShowModal={setShowModal} updateData={updateData}></EditEmployee>
          ) : (
            ''
          )}
        </ModalContainer>
      </Modal>
    </>
  );
};

Tabs.propTypes = {
  rooms: PropTypes.array.isRequired,
  offers: PropTypes.array.isRequired,
  employees: PropTypes.array.isRequired,
};

export default Tabs;
