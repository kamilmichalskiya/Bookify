export const selectCustomStyles = {
  container: (provided, state) => ({
    ...provided,
    width: '250px',
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: '1rem',
    color: state.isSelected ? '#222' : 'white',
    backgroundColor: state.isSelected ? '#1ED760' : '#222222',
    padding: 20,
  }),
  menuList: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#1ED760' : '#222222',
    border: '1px solid #fff',
  }),
  input: (provided, state) => ({
    ...provided,
    color: '#000',
    fontWeight: 'bold',
  }),
};
