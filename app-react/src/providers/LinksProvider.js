import React, { useState, useEffect } from 'react';

const linkNames = {
  rooms: 'GET_ALL_ROOMS',
  employees: 'GET_ALL_EMPLOYEES',
  offers: 'GET_ALL_OFFERS',
  links: 'GET_MAIN_LINKS',
};

export const LinksContext = React.createContext({
  roomsUrl: '',
  employeesUrl: '',
  offersUrl: '',
  linksUrl: '/api',
  getLinks: () => {},
});

const LinksProvider = ({ children }) => {
  const [roomsUrl, setRoomsUrl] = useState('');
  const [employeesUrl, setEmployeesUrl] = useState('');
  const [offersUrl, setOffersUrl] = useState('');
  const [linksUrl, setLinksUrl] = useState('');

  useEffect(() => {
    getLinks();
  }, []);

  const getLinks = async () => {
    const response = await fetch('/api');
    const data = await response.json();
    for (const link of data) {
      const { rel, href } = link;
      if (href) {
        switch (rel) {
          case linkNames.rooms:
            setRoomsUrl(href);
            break;
          case linkNames.employees:
            setEmployeesUrl(href);
            break;
          case linkNames.offers:
            setOffersUrl(href);
            break;
          case linkNames.links:
            setLinksUrl(href);
            break;
          default:
            break;
        }
      } else {
        console.error('GetLinks: Missing href param in response');
      }
    }
  };

  return (
    <LinksContext.Provider
      value={{
        rooms: roomsUrl,
        employees: employeesUrl,
        offers: offersUrl,
        links: linksUrl,
        getLinks,
      }}
    >
      {children}
    </LinksContext.Provider>
  );
};

export default LinksProvider;
