import React from 'react';
import { useIntl } from 'react-intl';

import AppHeader from 'molecules/Header';
import { Box, Button, Text } from '@chakra-ui/react';
import Footer from 'molecules/Footer';
import messages from './messages';

function HomePage(): JSX.Element {
  const intl = useIntl();

  return (
    <>
      <AppHeader />
      <Box>
        <Text>{intl.formatMessage(messages.welcome)}</Text>
      </Box>
      <Footer />
    </>
  );
}

export default HomePage;
