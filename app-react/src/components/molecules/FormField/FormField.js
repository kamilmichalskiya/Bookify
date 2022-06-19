import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${Label} {
    margin: 10px 0;
  }
  ${({ type }) =>
    type === 'checkbox' &&
    `
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
    ${Input} {
      width: 24px;
      height: 24px;
    }
    ${Label} {
      margin-left: 15px;
    }
  `};
`;

const FormField = ({ onChange, value, label, name, id, type = 'text', disabled }) => {
  return (
    <Wrapper type={type}>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} value={value} onChange={onChange} disabled={disabled} />
    </Wrapper>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
