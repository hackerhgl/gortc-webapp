import React from 'react';
import { Button, ButtonGroup, Container, Flex, Spacer, Text } from '@chakra-ui/react';

import AppLogo from 'atoms/Logo';
import { SPACE } from 'configs/space';

import { links } from './data';

function AppHeader(): JSX.Element {
  const isLoggedIn = false;
  return (
    <Container shadow="md" maxW="full" padding={SPACE[3]}>
      <Flex>
        <AppLogo />
        <Spacer />
        <ButtonGroup spacing={SPACE[2]} variant="ghost" colorScheme="blue">
          {links
            .filter((link) => link.logIn === undefined || isLoggedIn === link.logIn)
            .map((v) => (
              <Button key={v.label}>
                <Text fontSize="sm">{v.label}</Text>
              </Button>
            ))}
        </ButtonGroup>
      </Flex>
    </Container>
  );
}

export default AppHeader;
