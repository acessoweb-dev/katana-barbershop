import { defaultTheme } from 'styles/default';

import { ThemeProvider } from 'styled-components';

export default function App() {
  return <ThemeProvider theme={defaultTheme}>{/* <Routes /> */}</ThemeProvider>;
}
