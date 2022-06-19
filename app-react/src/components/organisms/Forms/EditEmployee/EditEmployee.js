import React from 'react';
import { DeleteButton, SaveButton } from 'components/atoms/Button/Button';
import { Header, ContentWrapper, Footer } from './EditEmployee-styled';
import FormField from 'components/molecules/FormField/FormField';

const EditEmployee = ({ employee }) => {
  return (
    <>
      <Header>{employee?.employeeId ? 'Edytuj Pracownika' : 'Stwórz Pracownika'}</Header>
      <ContentWrapper>
        <FormField value={employee.employeeId ? employee.employeeId : ''} label="NumerId" name="idNumber" id="idNumber" type="text"></FormField>
        <FormField value={employee.name ? employee.name : ''} label="Imię Pracownika" name="employeeName" id="employeeName" type="text"></FormField>
        <FormField
          value={employee.surname ? employee.surname : ''}
          label="Nazwisko Pracownika"
          name="employeeSurname"
          id="employeeSurname"
          type="text"
        ></FormField>
        <FormField value={employee.email ? employee.email : ''} label="Adres e-mail" name="employeeEmail" id="employeeEmail" type="text"></FormField>
        <FormField
          value={employee.password ? employee.password : ''}
          label="Hasło"
          name="employeePassword"
          id="employeePassword"
          type="text"
        ></FormField>
      </ContentWrapper>
      <Footer>
        {employee?.employeeId ? <DeleteButton>Usuń</DeleteButton> : <div></div>}
        <SaveButton>Zapisz</SaveButton>
      </Footer>
    </>
  );
};

export default EditEmployee;
