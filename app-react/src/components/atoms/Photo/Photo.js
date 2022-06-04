import styled from 'styled-components';
import Room1 from 'assets/img/room1.png';
import Room2 from 'assets/img/room2.png';
import Room3 from 'assets/img/room3.png';
import Room4 from 'assets/img/room4.png';
import Room5 from 'assets/img/room5.png';

const handleUrl = (url) => {
  switch (url) {
    case 'room1':
      return Room1;
    case 'room2':
      return Room2;
    case 'room3':
      return Room3;
    case 'room4':
      return Room4;
    case 'room5':
      return Room5;
    default:
      return Room1;
  }
};

export const Photo = styled.div`
  background-image: url(${({ url }) => handleUrl(url)});
  background-size: cover;
  width: 30%;
  max-width: 220px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
