import React, { useState } from 'react';
import { TabsWrapper, TabsList, TabContent, TabHeader, NavigationBar } from './Tabs-styled';
import PropTypes from 'prop-types';
import AdminList from 'components/organisms/AdminList/AdminList';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import { TertiaryButton } from 'components/atoms/Button/Button';

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
        <NavigationBar>
          <SearchBar displayLevelMode="admin"></SearchBar>
          <TertiaryButton>Dodaj</TertiaryButton>
        </NavigationBar>
        <AdminList items={rooms}></AdminList>
      </TabContent>
      <TabContent hidden={index !== 1}>
        <NavigationBar>
          <SearchBar displayLevelMode="admin"></SearchBar>
          <TertiaryButton>Dodaj</TertiaryButton>
        </NavigationBar>
        <AdminList items={offers}></AdminList>
      </TabContent>
      <TabContent hidden={index !== 2}>
        <NavigationBar>
          <SearchBar displayLevelMode="admin"></SearchBar>
          <TertiaryButton>Dodaj</TertiaryButton>
        </NavigationBar>
        <AdminList items={employees}></AdminList>
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
