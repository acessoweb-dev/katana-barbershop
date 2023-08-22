import { defaultTheme } from 'styles/default';
import { ThemeProvider } from 'styled-components';

import { LoadFonts } from 'components';

import { DataProvider } from 'providers/DataContext';
import Routes from 'routes';

export default function App() {
  return (
    <LoadFonts>
      <ThemeProvider theme={defaultTheme}>
        <DataProvider>
          <Routes />
        </DataProvider>
      </ThemeProvider>
    </LoadFonts>
  );
}
