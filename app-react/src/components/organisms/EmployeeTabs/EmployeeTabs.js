import React, { useState } from 'react';
import { TabsWrapper, TabsList, TabContent, TabHeader, NavigationBar, ModalContainer, NewReservationButton } from './EmployeeTabs-styled';
import PropTypes from 'prop-types';
import EmployeeList from 'components/organisms/EmployeeList/EmployeeList';
import EditReservation from '../Forms/EditReservation/EditReservation';
import { Modal } from 'components/molecules/Modal/Modal';
import { Pagination } from 'components/atoms/Pagination/Pagination';
import { ToastContainer } from 'react-toastify';
import Table from 'components/molecules/Table/Table';
import 'react-toastify/dist/ReactToastify.css';

const EmployeeTabs = ({ reservations, offers, roomsOccupation, getRoomsOccupation, updateReservations, createNewReservation }) => {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [activeItem, setActiveItem] = useState({});
  const [reservationPageNumber, setReservationPageNumber] = useState(0);
  const itemsPerPage = 5;

  const changeRoomPage = ({ selected }) => {
    setReservationPageNumber(selected);
  };

  const openModal = (type = 'reservation', items) => {
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
            Rezerwacje
          </TabHeader>
          <TabHeader
            onClick={() => {
              setIndex(1);
            }}
            active={index === 1}
          >
            Kalendarz Obłożenia
          </TabHeader>
        </TabsList>
        <TabContent hidden={index !== 0}>
          <NavigationBar>
            <NewReservationButton onClick={() => createNewReservation()}>Nowa rezerwacja</NewReservationButton>
          </NavigationBar>
          {reservations.length > 0 ? (
            <>
              <EmployeeList
                items={reservations.slice(reservationPageNumber * itemsPerPage, reservationPageNumber * itemsPerPage + itemsPerPage)}
                openModal={openModal}
              />
              <Pagination
                previousLabel={'Wstecz'}
                nextLabel={'Dalej'}
                pageCount={Math.ceil(reservations.length / itemsPerPage)}
                onPageChange={changeRoomPage}
              />
            </>
          ) : (
            <h1>Obecnie nie ma żadnych rezerwacji.</h1>
          )}
        </TabContent>
        <TabContent hidden={index !== 1}>{index === 1 ? <Table openModal={openModal} roomsOccupation={roomsOccupation} /> : ''}</TabContent>
      </TabsWrapper>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ModalContainer>
          {activeItem.type === 'reservation' ? (
            <EditReservation
              reservation={activeItem}
              offers={offers}
              setShowModal={setShowModal}
              updateReservations={updateReservations}
              getRoomsOccupation={getRoomsOccupation}
            />
          ) : (
            ''
          )}
        </ModalContainer>
      </Modal>
    </>
  );
};

EmployeeTabs.propTypes = {
  reservations: PropTypes.array.isRequired,
};

export default EmployeeTabs;
