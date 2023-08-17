import { defaultTheme } from 'styles/default';
import { ThemeProvider } from 'styled-components';

import { LoadFonts } from 'components';

import Routes from 'routes';

export default function App() {
  return (
    <LoadFonts>
      <ThemeProvider theme={defaultTheme}>
        <Routes />
      </ThemeProvider>
    </LoadFonts>
  );
}
