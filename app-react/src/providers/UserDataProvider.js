import React, { useState, useEffect } from 'react';

const setInitialUserData = () => {
  return {
    active: true,
    startDate: '',
    endDate: '',
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
