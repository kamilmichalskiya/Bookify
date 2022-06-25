import React, { useState, useEffect, useContext } from 'react';
import { SaveButton } from 'components/atoms/Button/Button';
import { Header, ContentWrapper, Footer, ErrorText } from './EditEmployee-styled';
import FormField from 'components/molecules/FormField/FormField';
import { LinksContext } from 'providers/LinksProvider';

const EditEmployee = ({ employee, setShowModal, updateData }) => {
  let initialValues = {
    active: employee.active || false,
    name: employee.name || '',
    surname: employee.surname || '',
    email: employee.email || '',
    password: employee.password || '',
  };
  if (employee.employeeId) {
    initialValues.employeeId = employee.employeeId;
  }
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const LinksCtx = useContext(LinksContext);

  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;
    if (value && !isNaN(value)) {
      value = parseInt(value);
    }
    if (type === 'checkbox') {
      value = checked;
    }
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    const updateEmployee = async () => {
      const updateEmployeeUrl = employee._links.UPDATE_EMPLOYEE.href;
      const requestOptions = {
        method: 'PUT',
        body: JSON.stringify(formValues),
        headers: new Headers({ 'content-type': 'application/json' }),
      };
      const response = await fetch(updateEmployeeUrl, requestOptions);
      const data = await response.json();
      const { status, error } = data;
      if (response.ok) {
        alert('Konto pracownika zostało pomyslnie zaaktualizowane!');
        setShowModal(false);
        updateData('employees');
      } else {
        alert(`ERROR: An Error occured: ${status}: ${error}`);
      }
    };

    const createEmployee = async () => {
      const createEmployeeUrl = LinksCtx.employees;
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify(formValues),
        headers: new Headers({ 'content-type': 'application/json' }),
      };
      const response = await fetch(createEmployeeUrl, requestOptions);
      const data = await response.json();
      const { status, error } = data;
      if (response.ok) {
        alert('Konto pracownika zostało pomyslnie stworzone!');
        setShowModal(false);
        updateData('employees');
      } else {
        alert(`ERROR: An Error occured: ${status}: ${error}`);
      }
    };

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(`Submitted Offer: ${JSON.stringify(formValues)}`);
      if (employee.isNew) {
        createEmployee();
      } else {
        updateEmployee();
      }
    }
  }, [LinksCtx.employees, formErrors, formValues, isSubmit, employee, setShowModal]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = 'Imie jest wymagane!';
    }
    if (!values.surname) {
      errors.surname = 'Nazwisko jest wymagane!';
    }
    if (!values.email) {
      errors.email = 'Adres e-mail jest wymagany!';
    } else if (!regex.test(values.email)) {
      errors.email = 'Adres e-mail musi mieć poprawny format!';
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Header>{employee?.employeeId ? 'Edytuj Pracownika' : 'Stwórz Pracownika'}</Header>
      <ContentWrapper>
        <FormField
          onChange={handleChange}
          value={formValues.active}
          label="Pracownik Aktywny"
          name="active"
          id="employeeActive"
          type="checkbox"
        ></FormField>
        {initialValues.employeeId ? (
          <FormField
            onChange={handleChange}
            value={formValues.employeeId}
            label="NumerId"
            name="employeeId"
            id="employeeId"
            type="text"
            disabled={true}
          ></FormField>
        ) : (
          ''
        )}
        <FormField onChange={handleChange} value={formValues.name} label="Imie" name="name" id="employeeName" type="text"></FormField>
        <ErrorText>{formErrors.name}</ErrorText>
        <FormField onChange={handleChange} value={formValues.surname} label="Nazwisko" name="surname" id="employeeSurname" type="text"></FormField>
        <ErrorText>{formErrors.surname}</ErrorText>
        <FormField onChange={handleChange} value={formValues.email} label="Adres e-mail" name="email" id="employeeEmail" type="text"></FormField>
        <ErrorText>{formErrors.email}</ErrorText>
        <FormField onChange={handleChange} value={formValues.password} label="Hasło" name="password" id="employeePassword" type="text"></FormField>
        <ErrorText>{formErrors.password}</ErrorText>
      </ContentWrapper>
      <Footer>
        <div></div>
        <SaveButton>Zapisz</SaveButton>
      </Footer>
    </form>
  );
};

export default EditEmployee;
