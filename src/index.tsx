import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { IntlProvider } from 'react-intl';
import { Global } from '@emotion/react';
import 'focus-visible/dist/focus-visible';

import useLocale from 'containers/locale';

import styleReset from 'styleReset';
import theme from 'configs/theme';
import AppRouter from 'Router';

import './index.css';

function Wrapper(): JSX.Element {
  const locale = useLocale();
  React.useEffect(() => {
    locale.init();
  }, []);

  return (
    <IntlProvider locale={locale.current} defaultLocale="en">
      <AppRouter />
    </IntlProvider>
  );
}

function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={styleReset} />
      <Wrapper />
    </ChakraProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
