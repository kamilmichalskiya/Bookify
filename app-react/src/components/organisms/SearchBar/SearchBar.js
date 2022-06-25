import React, { useState, useEffect, useContext } from 'react';
import { SearchBarContainer, DarkIconStyleWrapper, SearchBarItemWrapper, StepperContainer, SearchBarTextInput } from './SearchBar-styled';
import { PrimaryButton } from 'components/atoms/Button/Button';
import { MagnifyingGlass } from '@styled-icons/entypo/MagnifyingGlass';
import DatePicker, { registerLocale } from 'react-datepicker';
import Collapsible from 'components/molecules/Collapsible/Collapsible';
import Stepper from 'components/molecules/Stepper/Stepper';
import { roomTypeOptions } from 'data/roomTypeOptions';
import { addOnOptions } from 'data/addOnOptions';
import FormField from 'components/molecules/FormField/FormField';
import { UserDataContext } from 'providers/UserDataProvider';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker-override.css';
import pl from 'date-fns/locale/pl';
import { LinksContext } from 'providers/LinksProvider';
registerLocale('pl', pl);

const SearchBar = ({ displayLevelMode, setRooms }) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const LinksCtx = useContext(LinksContext);
  const UserCtx = useContext(UserDataContext);
  const initialValues = {
    startDate: today,
    endDate: tomorrow,
    adult: 1,
    kids: 0,
    addOns: [],
    roomTypes: [{ value: 'Standard', label: 'Standard' }],
  };
  const [userSelection, setUserSelection] = useState(initialValues);

  useEffect(() => {
    if (userSelection.endDate.setHours(0, 0, 0, 0) < userSelection.startDate.setHours(0, 0, 0, 0)) {
      handleChange(userSelection.startDate, 'endDate');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSelection.endDate, userSelection.startDate]);

  useEffect(() => {
    console.log(userSelection);
  }, [userSelection]);

  const onSearchButtonClick = async () => {
    const formFinalValues = { ...userSelection };
    const newAddOns = [];
    const newTypes = [];
    if (typeof formFinalValues.startDate.getDay === 'function') {
      let yyyy = formFinalValues.startDate.getFullYear();
      let mm = formFinalValues.startDate.getMonth() + 1;
      let dd = formFinalValues.startDate.getDate();
      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;
      formFinalValues.startDate = yyyy + '-' + mm + '-' + dd;
    }
    if (typeof formFinalValues.endDate.getDay === 'function') {
      let yyyy = formFinalValues.endDate.getFullYear();
      let mm = formFinalValues.endDate.getMonth() + 1;
      let dd = formFinalValues.endDate.getDate();
      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;
      formFinalValues.endDate = yyyy + '-' + mm + '-' + dd;
    }
    for (const element of formFinalValues.addOns) {
      newAddOns.push(element.value);
    }
    formFinalValues.addOns = newAddOns;
    for (const element of formFinalValues.roomTypes) {
      newTypes.push(element.value);
    }
    formFinalValues.roomTypes = newTypes;
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(formFinalValues),
      headers: new Headers({ 'content-type': 'application/json' }),
    };
    const response = await fetch(`${LinksCtx.rooms}/search`, requestOptions);
    const data = await response.json();
    UserCtx.setUserData({ ...UserCtx, startDate: formFinalValues.startDate, endDate: formFinalValues.endDate });
    setRooms(data._embedded?.uiRoomList || ['empty']);
  };

  const handleChange = (value, name) => {
    setUserSelection({ ...userSelection, [name]: value });
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
              selected={userSelection.startDate}
              selectsStart
              startDate={userSelection.startDate}
              minDate={new Date()}
              endDate={userSelection.endDate}
              onChange={(date) => handleChange(date, 'startDate')}
              locale="pl"
              dateFormat="dd MMMM yyyy"
            />
          </SearchBarItemWrapper>
          <SearchBarItemWrapper>
            Wyjazd
            <DatePicker
              selected={userSelection.endDate}
              selectsEnd
              startDate={userSelection.startDate}
              endDate={userSelection.endDate}
              minDate={userSelection.startDate}
              onChange={(date) => handleChange(date, 'endDate')}
              locale="pl"
              dateFormat="dd MMMM yyyy"
            ></DatePicker>
          </SearchBarItemWrapper>
          <SearchBarItemWrapper>
            <Collapsible
              label="Goście"
              selection={
                userSelection.adult +
                (userSelection.adult === 1 ? ' dorosły' : ' dorosłych') +
                (userSelection.kids ? ', ' + userSelection.kids + (userSelection.kids === 1 ? ' dziecko' : ' dzieci') : '')
              }
            >
              <StepperContainer>
                <Stepper title="Dorośli" value={userSelection.adult} updateValue={(value) => handleChange(value, 'adult')} minValue={1}></Stepper>
                <Stepper title="Dzieci" value={userSelection.kids} updateValue={(value) => handleChange(value, 'kids')} minValue={0}></Stepper>
              </StepperContainer>
            </Collapsible>
          </SearchBarItemWrapper>
          <SearchBarItemWrapper>
            <Collapsible
              label="Cechy pokoju"
              selection={userSelection.roomTypes && userSelection.roomTypes[0] ? `${userSelection.roomTypes[0]?.value}...` : '[...]'}
            >
              <FormField
                onChange={(value) => handleChange(value, 'roomTypes')}
                value={userSelection.roomTypes}
                label="Typ pokoju"
                name="roomTypes"
                id="roomTypes"
                type="multiSelect"
                disabled={false}
                options={roomTypeOptions}
              />
              <FormField
                onChange={(value) => handleChange(value, 'addOns')}
                value={userSelection.addOns}
                label="Dodatki"
                name="addOns"
                id="roomAddOns"
                type="multiSelect"
                disabled={false}
                options={addOnOptions}
              />
              <div style={{ height: '250px' }} />
            </Collapsible>
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
