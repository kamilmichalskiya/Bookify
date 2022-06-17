import React, { useState } from 'react';
import { TabsWrapper, TabsList, TabContent, TabHeader } from './Tabs-styled';
import PropTypes from 'prop-types';
import List from 'components/organisms/List/List';
import SearchBar from 'components/organisms/SearchBar/SearchBar';

const Tabs = ({ rooms, offers, employees }) => {
  const [index, setIndex] = useState(0);

  return (
    <TabsWrapper>
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
        <SearchBar displayLevelMode="admin"></SearchBar>
        <List rooms={rooms}></List>
      </TabContent>
      <TabContent hidden={index !== 1}>
        <SearchBar displayLevelMode="admin"></SearchBar>
        This is Offers tab content
      </TabContent>
      <TabContent hidden={index !== 2}>
        <SearchBar displayLevelMode="admin"></SearchBar>
        This is Employees tab content
      </TabContent>
    </TabsWrapper>
  );
};

Tabs.propTypes = {
  rooms: PropTypes.array.isRequired,
  offers: PropTypes.array.isRequired,
  employees: PropTypes.array.isRequired,
};

export default Tabs;
