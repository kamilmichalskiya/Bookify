import React, { useState, useEffect } from 'react';
import {
  SearchBarContainer,
  DarkIconStyleWrapper,
  SearchBarItemWrapper,
  SearchBarItemValue,
  StepperContainer,
  SearchBarTextInput,
} from './SearchBar-styled';
import { PrimaryButton } from 'components/atoms/Button/Button';
import { MagnifyingGlass } from '@styled-icons/entypo/MagnifyingGlass';
import DatePicker, { registerLocale } from 'react-datepicker';
import Collapsible from 'components/molecules/Collapsible/Collapsible';
import Stepper from 'components/molecules/Stepper/Stepper';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker-override.css';
import pl from 'date-fns/locale/pl';
registerLocale('pl', pl);

const SearchBar = ({ displayLevelMode, setUserSelection }) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const DateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrow);
  const [adultsNumber, setAdultsNumber] = useState(1);
  const [kidsNumber, setKidsNumber] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [roomDetails, setRoomDetails] = useState(['Klimatyzacja', 'Lodówka']);

  useEffect(() => {
    if (endDate.setHours(0, 0, 0, 0) < startDate.setHours(0, 0, 0, 0)) {
      setEndDate(startDate);
    }
  }, [endDate, startDate]);

  const onSearchButtonClick = () => {
    const newUserSearchData = {
      startDate: startDate.toLocaleDateString('pl-pl', DateOptions),
      endDate: endDate.toLocaleDateString('pl-pl', DateOptions),
      days: calculateDays(startDate, endDate),
      adultsNumber,
      kidsNumber,
      roomDetails,
      selectedRoom: {},
    };
    setUserSelection(newUserSearchData);
  };

  const calculateDays = (startDate, endDate) => {
    let difference = endDate.getTime() - startDate.getTime();
    let days = Math.ceil(difference / (1000 * 3600 * 24));
    return days;
  };

  return (
    <SearchBarContainer>
      {displayLevelMode === 'user' ? (
        <>
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
            ></DatePicker>
          </SearchBarItemWrapper>
          <SearchBarItemWrapper>
            <Collapsible
              label="Goście"
              selection={
                adultsNumber +
                (adultsNumber === 1 ? ' dorosły' : ' dorosłych') +
                (kidsNumber ? ', ' + kidsNumber + (kidsNumber === 1 ? ' dziecko' : ' dzieci') : '')
              }
            >
              <StepperContainer>
                <Stepper title="Dorośli" value={adultsNumber} updateValue={setAdultsNumber} minValue={1}></Stepper>
                <Stepper title="Dzieci" value={kidsNumber} updateValue={setKidsNumber} minValue={0}></Stepper>
              </StepperContainer>
            </Collapsible>
          </SearchBarItemWrapper>
          <SearchBarItemWrapper>
            Cechy pokoju
            <SearchBarItemValue>Klimatyzacja, lodówka</SearchBarItemValue>
          </SearchBarItemWrapper>
          <PrimaryButton onClick={onSearchButtonClick}>Szukaj</PrimaryButton>
        </>
      ) : (
        <>
          <SearchBarTextInput placeholder="Szukaj..."></SearchBarTextInput>
          <DarkIconStyleWrapper>
            <MagnifyingGlass size="24" />
          </DarkIconStyleWrapper>
        </>
      )}
    </SearchBarContainer>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
