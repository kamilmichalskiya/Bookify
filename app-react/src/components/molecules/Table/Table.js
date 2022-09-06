import React, { useContext } from 'react';
import { Wrapper, TableHeader, StyledTable, TableItem, TableHeaderItem, TableButton } from './Table-slyled';
import { LinksContext } from 'providers/LinksProvider';
import { toast } from 'react-toastify';

function getNext30Days(year, month, day) {
  const date = new Date(year, month, day);
  let iterator = 30;
  const dates = [];

  while (iterator > 0) {
    let newDate = new Date(date);
    let yyyy = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();
    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;
    dates.push(`${yyyy}-${month}-${day}`);
    date.setDate(date.getDate() + 1);
    iterator -= 1;
  }
  console.log(dates);
  return dates;
}

const isDateBetweenTwoDates = (dateFrom, dateTo, dateCheck) => {
  var d1 = dateFrom.split('-');
  var d2 = dateTo.split('-');
  var c = dateCheck.split('-');
  var from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]);
  var to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);
  var check = new Date(c[2], parseInt(c[1]) - 1, c[0]);

  return check >= from && check < to;
};

const Table = ({ openModal, roomsOccupation }) => {
  const now = new Date();
  const daysOfMonth = getNext30Days(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const LinksCtx = useContext(LinksContext);

  const getReservation = async (reservationId) => {
    const createRoomUrl = `${LinksCtx.reservations}/${reservationId}`;
    const response = await fetch(createRoomUrl);
    const data = await response.json();
    const { status, error } = data;
    if (response.ok) {
      openModal('reservation', data);
    } else {
      toast.error(`ERROR: ${status}: ${error}`);
    }
  };

  return (
    <>
      <TableHeader>2022</TableHeader>
      <Wrapper>
        <StyledTable>
          <thead>
            <tr>
              <th>
                <TableHeaderItem>Nr pok.</TableHeaderItem>
              </th>
              {daysOfMonth.map((day, index) => (
                <th key={index}>
                  <TableHeaderItem>{`${day.substr(8, 2)}.${day.substr(5, 2)}`}</TableHeaderItem>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(roomsOccupation).map((roomNumber, index) => (
              <tr key={index}>
                <td key={index}>
                  <TableItem>{roomNumber}</TableItem>
                </td>
                {daysOfMonth.map((day, dayIndex) => {
                  for (const reservation of roomsOccupation[roomNumber]) {
                    if (isDateBetweenTwoDates(reservation.startDate, reservation.endDate, day)) {
                      return (
                        <td key={dayIndex}>
                          <TableButton onClick={() => getReservation(reservation.id)}>{reservation.customerData.surname || 'Nazwisko'}</TableButton>
                        </td>
                      );
                    }
                  }
                  return (
                    <td key={dayIndex}>
                      <div></div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </Wrapper>
    </>
  );
};

export default Table;
