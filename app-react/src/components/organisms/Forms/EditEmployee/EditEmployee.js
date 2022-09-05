import React, { useState, useEffect, useContext } from 'react';
import { SaveButton } from 'components/atoms/Button/Button';
import { Header, ContentWrapper, Footer, ErrorText } from './EditEmployee-styled';
import FormField from 'components/molecules/FormField/FormField';
import { LinksContext } from 'providers/LinksProvider';
import { toast } from 'react-toastify';

const EditEmployee = ({ employee, setShowModal, updateData }) => {
  let initialValues = {
    active: employee.active || false,
    name: employee.name || '',
    surname: employee.surname || '',
    email: employee.email || '',
    password: employee.password || '',
    confirmPassword: employee.confirmPassword || '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(await validate(formValues));
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
        toast.success('Konto pracownika zostało pomyślnie zaktualizowane!');
        setShowModal(false);
        updateData('employees');
      } else {
        toast.error(`ERROR: ${status}: ${error}`);
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
        toast.success('Konto pracownika zostało pomyślnie stworzone!');
        setShowModal(false);
        updateData('employees');
      } else {
        toast.error(`ERROR: ${status}: ${error}`);
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
  }, [LinksCtx.employees, formErrors, formValues, isSubmit, employee, setShowModal, updateData]);

  const checkEmail = async (email) => {
    const checkEmailUrl = `${LinksCtx.employees}/email/check`;
    const requestOptions = {
      method: 'POST',
      body: email,
      headers: new Headers({ 'content-type': 'application/json' }),
    };
    const response = await fetch(checkEmailUrl, requestOptions);
    const data = await response.json();
    if (response.ok && data === false) {
      return 'Konto o podanym adresie email już istnieje!';
    }
    return '';
  };

  const validate = async (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = 'Imię jest wymagane!';
    }
    if (!values.surname) {
      errors.surname = 'Nazwisko jest wymagane!';
    }
    const usedEmail = await checkEmail(values.email);
    if (!values.email) {
      errors.email = 'Adres e-mail jest wymagany!';
    } else if (!regex.test(values.email)) {
      errors.email = 'Adres e-mail musi mieć poprawny format!';
    } else if (usedEmail) {
      errors.email = usedEmail;
    }
    if (!values.password) {
      errors.password = 'Hasło jest wymagane!';
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Hasła nie są identyczne!';
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Header>{employee?.employeeId ? 'Edytuj pracownika' : 'Stwórz pracownika'}</Header>
      <ContentWrapper>
        <FormField
          onChange={handleChange}
          value={formValues.active}
          label="Pracownik aktywny"
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
            disabled={false}
          ></FormField>
        ) : (
          ''
        )}
        <FormField onChange={handleChange} value={formValues.name} name="name" id="employeeName" type="text" label="Imię"></FormField>
        <ErrorText>{formErrors.name}</ErrorText>
        <FormField onChange={handleChange} value={formValues.surname} name="surname" id="employeeSurname" type="text" label="Nazwisko"></FormField>
        <ErrorText>{formErrors.surname}</ErrorText>
        <FormField onChange={handleChange} value={formValues.email} name="email" id="employeeEmail" type="text" label="Adres e-mail"></FormField>
        <ErrorText>{formErrors.email}</ErrorText>
        <FormField
          onChange={handleChange}
          value={formValues.password}
          name="password"
          id="employeePassword"
          type="password"
          label="Hasło"
        ></FormField>
        <ErrorText>{formErrors.password}</ErrorText>
        <FormField
          onChange={handleChange}
          value={formValues.confirmPassword}
          name="confirmPassword"
          id="employeeConfirmPassword"
          type="password"
          label="Potwierdź hasło"
        ></FormField>
        <ErrorText>{formErrors.confirmPassword}</ErrorText>
      </ContentWrapper>
      <Footer>
        <div></div>
        <SaveButton>Zapisz</SaveButton>
      </Footer>
    </form>
  );
};

export default EditEmployee;
