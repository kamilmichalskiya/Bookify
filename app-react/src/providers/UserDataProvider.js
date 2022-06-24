import React, { useState, useEffect } from 'react';

const setInitialUserData = () => {
  let today = new Date();
  let yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  today = yyyy + '-' + mm + '-' + dd;
  const tomorrow = yyyy + '-' + mm + '-' + (dd + 1);

  return {
    active: true,
    startDate: today,
    endDate: tomorrow,
    totalPrice: 0,
    paid: true,
    customerData: {
      email: '',
      name: '',
      surname: '',
    },
    guestData: {
      email: '',
      name: '',
      surname: '',
    },
    room: {},
    offers: {},
  };
};

export const UserDataContext = React.createContext({
  ...setInitialUserData(),
});

const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData(setInitialUserData());
  }, []);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <UserDataContext.Provider
      value={{
        ...userData,
        setUserData,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
