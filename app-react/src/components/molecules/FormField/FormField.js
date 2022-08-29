import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label';
import { Input, TextArea } from 'components/atoms/Input/Input';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { selectCustomStyles } from 'assets/styles/selectCustomStyles';
import Stepper from 'components/molecules/Stepper/Stepper';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({ type }) =>
    type === 'checkbox' &&
    `
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
    margin: 15px;
    width: 350px;
    ${Input} {
      width: 24px;
      height: 24px;
    }
    ${Label} {
      margin-left: 15px;
    }
  `};
`;

const FormField = ({
  onChange,
  value,
  label,
  name,
  id,
  type = 'text',
  disabled = false,
  options,
  checked,
  onFocus = () => {},
  maxLength,
  placeholder,
}) => {
  return (
    <Wrapper type={type}>
      {type === 'text' ? (
        <Input
          name={name}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onFocus={onFocus}
          maxLength={maxLength}
          placeholder={placeholder}
        />
      ) : (
        ''
      )}
      {type === 'password' ? (
        <Input name={name} id={id} type={type} value={value} onChange={onChange} disabled={disabled} onFocus={onFocus} maxLength={maxLength} />
      ) : (
        ''
      )}
      {type === 'checkbox' ? (
        <>
          <Label htmlFor={id}>{label}</Label>
          <Input name={name} id={id} checked={checked} type={type} onChange={onChange} disabled={disabled} />
        </>
      ) : (
        ''
      )}
      {type === 'textarea' ? <TextArea name={name} id={id} type={type} value={value} onChange={onChange} disabled={disabled} /> : ''}
      {type === 'select' ? <Select styles={selectCustomStyles} defaultValue={value} onChange={onChange} disabled={disabled} options={options} /> : ''}
      {type === 'multiSelect' ? (
        <Select isMulti styles={selectCustomStyles} defaultValue={value} onChange={onChange} disabled={disabled} options={options} />
      ) : (
        ''
      )}
      {type === 'creatableSelect' ? (
        <CreatableSelect isMulti defaultValue={value} styles={selectCustomStyles} onChange={onChange} options={options} />
      ) : (
        ''
      )}
      {type === 'stepper' ? <Stepper title="" value={value} updateValue={onChange} minValue={0}></Stepper> : ''}
      {type === 'file' ? (
        <Input
          name={name}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={`Uplaod an ${name}`}
          accept=".png, .jpg, .jpeg"
        />
      ) : (
        ''
      )}
    </Wrapper>
  );
};

FormField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
  checked: PropTypes.bool,
  onFocus: PropTypes.func,
  maxLength: PropTypes.any,
};

export default FormField;
