import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

 html { // border-box jest znacznie bardziej przewidywalny niż content-Box
  box-sizing: border-box;
 }

 *, *::after, *::before { // by wszystkie elementy i pseudoelementy dziedziczyły box-sizing
  box-sizing: inherit;
 }

 body {
  font-family: 'Montserrat', sans-serif;
  /* background: ${({ theme }) => theme.colors.tertiary}; */
 }

 a, button { // linki i buttony nie dziedziczą z body font-family
  font-family: 'Montserrat', sans-serif;
  border: none;
 }

 button:hover {
    cursor: pointer;
 }
`;
