import React from 'react';
import { useIntl } from 'react-intl';

import AppHeader from 'molecules/Header';
import { Box, Text } from '@chakra-ui/react';
import messages from './messages';

function HomePage(): JSX.Element {
  const intl = useIntl();

  return (
    <>
      <AppHeader />
      <Box>
        <Text>{intl.formatMessage(messages.welcome)}</Text>
      </Box>
    </>
  );
}

export default HomePage;
