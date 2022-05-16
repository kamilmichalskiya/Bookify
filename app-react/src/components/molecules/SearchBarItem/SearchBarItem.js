import React from 'react';
import { SearchBarItemWrapper, SearchBarItemValue } from './SearchBarItem-styled';

const SearchBarItem = ({ title, selection }) => {
  return (
    <>
      <SearchBarItemWrapper>
        {title}
        <SearchBarItemValue>{selection}</SearchBarItemValue>
      </SearchBarItemWrapper>
    </>
  );
};

export default SearchBarItem;
