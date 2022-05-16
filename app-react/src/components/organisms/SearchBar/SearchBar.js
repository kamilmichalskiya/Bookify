import React from 'react';
// import PropTypes from 'prop-types';
import { SearchBarContainer, DarkIconStyleWrapper } from './SearchBar-styled';
import SearchBarItem from 'components/molecules/SearchBarItem/SearchBarItem';
import { PrimaryButton } from 'components/atoms/Button/Button';
import { MagnifyingGlass } from '@styled-icons/entypo/MagnifyingGlass';

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <DarkIconStyleWrapper>
        <MagnifyingGlass size="24" />
      </DarkIconStyleWrapper>
      <SearchBarItem title="Przyjazd" selection="15 kwietnia 2022"></SearchBarItem>
      <SearchBarItem title="Wyjazd" selection="17 kwietnia 2022"></SearchBarItem>
      <SearchBarItem title="Goście" selection="2 dorosłych, 1 dziecko"></SearchBarItem>
      <SearchBarItem title="Cechy pokoju" selection="Klimatyzacja, lodówka"></SearchBarItem>
      <PrimaryButton>Szukaj</PrimaryButton>
    </SearchBarContainer>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
