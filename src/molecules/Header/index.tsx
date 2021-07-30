import React from 'react';
import { Button, ButtonGroup, Container, Flex, Spacer, Text } from '@chakra-ui/react';

import AppLogo from 'atoms/Logo';
import { links } from './data';

function AppHeader(): JSX.Element {
  return (
    <Container shadow="md" maxW="full" padding="6">
      <Flex>
        <AppLogo />
        <Spacer />
        <ButtonGroup spacing={4} variant="outline" colorScheme="blue">
          {links.map((v) => (
            <Button key={v.label}>
              <Text key={v.label}>{v.label}</Text>
            </Button>
          ))}
        </ButtonGroup>
      </Flex>
    </Container>
  );
}

export default AppHeader;
