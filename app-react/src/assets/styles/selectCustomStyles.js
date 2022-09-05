export const selectCustomStyles = {
  container: (provided, state) => ({
    ...provided,
    width: '400px',
  }),
  control: (provided, state) => ({
    ...provided,
    border: 'none',
    cursor: 'pointer',
    height: '40px',
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: state.isFocused ? '#1ED760' : '#222',
    padding: 10,
    letterSpacing: '0.08em',
    cursor: 'pointer',
  }),
  menu: (provided, state) => ({
    ...provided,
    backgroundColor: state.isHovered ? '#1ED760' : state.isPressed ? '1ED760' : '#222222',
  }),
  menuList: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#1ED760' : '#222222',
    border: '1px solid #1ED760',
    borderRadius: '5px',
    letterSpacing: '0.08em',
  }),
  multiValue: (provided, state) => ({
    ...provided,
    backgroundColor: '#1ED760',
    color: '#fff',
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    color: '#fff',
  }),
  multiValueRemove: (provided, state) => ({
    ...provided,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#1ED760',
      color: '#CB8581',
    },
  }),
  clearIndicator: (provided, state) => ({
    ...provided,
    '&:hover': {
      cursor: 'pointer',
      color: '#CB8581',
    },
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    '&:hover': {
      cursor: 'pointer',
      color: '#1ED760',
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: '#222',
  }),
  placeholder: (provided, state) => ({
    ...provided,
    fontSize: '0.9rem',
    letterSpacing: '0.08em',
  }),
};
