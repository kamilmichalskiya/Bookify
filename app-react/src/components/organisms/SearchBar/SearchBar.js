import React, { useState, useEffect } from 'react';
import {
  SearchBarContainer,
  DarkIconStyleWrapper,
  SearchBarItemWrapper,
  SearchBarItemValue,
  CollapsiblePanelButton,
  CollapsiblePanelContent,
} from './SearchBar-styled';
import { PrimaryButton } from 'components/atoms/Button/Button';
import { MagnifyingGlass } from '@styled-icons/entypo/MagnifyingGlass';
import DatePicker, { registerLocale } from 'react-datepicker';
import Collapsible from 'components/molecules/Collapsible/Collapsible';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker-override.css';
import pl from 'date-fns/locale/pl';
registerLocale('pl', pl);

const SearchBar = ({ setUserSearch }) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const DateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrow);
  const [adultsNumber, setAdultsNumber] = useState(0);
  const [kidsNumber, setKidsNumber] = useState(0);
  const [roomDetails, setRoomDetails] = useState({});

  useEffect(() => {
    if (endDate.setHours(0, 0, 0, 0) < startDate.setHours(0, 0, 0, 0)) {
      setEndDate(startDate);
    }
  }, [endDate, startDate]);

  const onSearchButtonClick = () => {
    console.log('Search Button Click!');
    const newUserSearchData = {
      startDate: startDate.toLocaleDateString('pl-pl', DateOptions),
      endDate: endDate.toLocaleDateString('pl-pl', DateOptions),
      adultsNumber,
      kidsNumber,
      roomDetails,
    };
    console.dir(newUserSearchData);
    setUserSearch(newUserSearchData);
  };

  const onExpansionPanelClick = (e) => {
    const collapsible = document.getElementById('collapsible');
    collapsible.classList.toggle('active');
    if (collapsible.style.display === 'none') {
      collapsible.style.display = 'block';
    } else if (collapsible.style.display === 'block') {
      collapsible.style.display = 'none';
    }
  };

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
        <Collapsible>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </Collapsible>
        {/* <CollapsiblePanelButton onClick={onExpansionPanelClick}>
          Goście
          <SearchBarItemValue>2 dorosłych, 1 dziecko</SearchBarItemValue>
        </CollapsiblePanelButton>
        <CollapsiblePanelContent id="collapsible">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </CollapsiblePanelContent> */}
      </SearchBarItemWrapper>
      <SearchBarItemWrapper>
        Cechy pokoju
        <SearchBarItemValue>Klimatyzacja, lodówka</SearchBarItemValue>
      </SearchBarItemWrapper>
      <PrimaryButton onClick={onSearchButtonClick}>Szukaj</PrimaryButton>
    </SearchBarContainer>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
