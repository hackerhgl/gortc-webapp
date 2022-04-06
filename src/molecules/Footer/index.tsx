import React from 'react';
import { useIntl } from 'react-intl';
// import { Button, Container, Flex, Text } from '@chakra-ui/react';

import { SPACE } from 'configs/space';

import useLocale from 'containers/locale';

import messages from './messages';

function Footer(): JSX.Element {
  const intl = useIntl();
  const locale = useLocale();

  return (
    <h1>footer</h1>
    // <Container maxW="container.lg" p={SPACE[2]} display="flex" alignItems="center">
    //   <Text>
    //     {intl.formatMessage(messages.title, {
    //       year: new Date().getFullYear(),
    //     })}
    //   </Text>
    //   <Flex flex={1} />
    //   <Text>{intl.formatMessage(messages.choose)}</Text>
    //   {locale.list.map((v) => (
    //     <Button key={v} onClick={() => locale.change(v)} marginX={SPACE[1]}>
    //       <Text>{v}</Text>
    //     </Button>
    //   ))}
    // </Container>
  );
}

export default Footer;
