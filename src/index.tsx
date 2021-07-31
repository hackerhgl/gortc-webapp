import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { IntlProvider } from 'react-intl';
import { Global } from '@emotion/react';

import 'focus-visible/dist/focus-visible';

import styleReset from 'styleReset';
import theme from 'configs/theme';
import AppRouter from 'Router';

function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={styleReset} />
      <IntlProvider locale="en" defaultLocale="en">
        <AppRouter />
      </IntlProvider>
    </ChakraProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
