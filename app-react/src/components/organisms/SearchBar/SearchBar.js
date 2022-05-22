import React, { useState, useEffect } from 'react';
import { SearchBarContainer, DarkIconStyleWrapper, SearchBarItemWrapper, SearchBarItemValue } from './SearchBar-styled';
import { PrimaryButton } from 'components/atoms/Button/Button';
import { MagnifyingGlass } from '@styled-icons/entypo/MagnifyingGlass';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker-override.css';
import pl from 'date-fns/locale/pl';
registerLocale('pl', pl);

const SearchBar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    if (endDate.setHours(0, 0, 0, 0) < startDate.setHours(0, 0, 0, 0)) {
      setEndDate(startDate);
    }
  }, [endDate, startDate]);

  return (
    <SearchBarContainer>
      <DarkIconStyleWrapper>
        <MagnifyingGlass size="24" />
      </DarkIconStyleWrapper>
      <SearchBarItemWrapper>
        Przyjazd
        <DatePicker
          selected={startDate}
          selectsStart
          startDate={startDate}
          minDate={new Date()}
          endDate={endDate}
          onChange={(date) => setStartDate(date)}
          locale="pl"
          dateFormat="dd MMMM yyyy"
        />
      </SearchBarItemWrapper>
      <SearchBarItemWrapper>
        Wyjazd
        <DatePicker
          selected={endDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          onChange={(date) => setEndDate(date)}
          locale="pl"
          dateFormat="dd MMMM yyyy"
        />
      </SearchBarItemWrapper>
      <SearchBarItemWrapper>
        Goście
        <SearchBarItemValue>2 dorosłych, 1 dziecko</SearchBarItemValue>
      </SearchBarItemWrapper>
      <SearchBarItemWrapper>
        Cechy pokoju
        <SearchBarItemValue>Klimatyzacja, lodówka</SearchBarItemValue>
      </SearchBarItemWrapper>
      <PrimaryButton>Szukaj</PrimaryButton>
    </SearchBarContainer>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
