import React from 'react';
import { useIntl } from 'react-intl';

import AppHeader from 'molecules/Header';
import Footer from 'molecules/Footer';
import messages from './messages';

function HomePage(): JSX.Element {
  const intl = useIntl();

  return (
    <>
      <AppHeader />
      <h2>{intl.formatMessage(messages.welcome)}</h2>
      {/* <Box>
        <Text>{intl.formatMessage(messages.welcome)}</Text>
      </Box> */}
      <Footer />
    </>
  );
}

export default HomePage;
