import react from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { render } from '@testing-library/react';

export const renderWithProviders = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
