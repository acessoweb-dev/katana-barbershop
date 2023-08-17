import { defaultTheme } from 'styles/default';
import { ThemeProvider } from 'styled-components';

import Routes from 'routes';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes />
    </ThemeProvider>
  );
}
