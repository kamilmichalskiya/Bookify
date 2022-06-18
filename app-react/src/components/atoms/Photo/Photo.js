import styled from 'styled-components';

export const Photo = styled.div`
  background-image: url(${({ url }) => url});
  background-size: cover;
  width: 30%;
  max-width: 220px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
