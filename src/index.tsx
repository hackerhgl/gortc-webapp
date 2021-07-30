import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, StyleReset } from 'atomize';

import { APP_THEME } from 'configs/theme';
import AppRouter from 'Router';

export default function App() {
  return (
    <ThemeProvider theme={APP_THEME}>
      <StyleReset /> <AppRouter />
    </ThemeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
