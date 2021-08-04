import React from 'react';
import { useIntl } from 'react-intl';

import AppHeader from 'molecules/Header';
import { Box, Button, Text } from '@chakra-ui/react';
import useLocale from 'containers/locale';
import messages from './messages';

function HomePage(): JSX.Element {
  const intl = useIntl();
  const locale = useLocale();

  console.log(locale.current);

  return (
    <>
      <AppHeader />
      <Box>
        <Text>{intl.formatMessage(messages.welcome)}</Text>
      </Box>
      <Text>{locale.current}</Text>
      {locale.list.map((v) => (
        <Button key={v} onClick={() => locale.change(v)}>
          <Text>{v}</Text>
        </Button>
      ))}
    </>
  );
}

export default HomePage;
