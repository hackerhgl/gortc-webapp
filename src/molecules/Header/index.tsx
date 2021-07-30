import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  ButtonGroup,
  Container,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Spacer,
  Text,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';

import AppLogo from 'atoms/Logo';
import { SPACE } from 'configs/space';

import { links } from './data';

function AppHeader(): JSX.Element {
  const isLoggedIn = false;
  const history = useHistory();
  const enableDrawer = !!useBreakpointValue({ md: false, sm: true });
  const drawer = useDisclosure();

  const content = (
    <ButtonGroup
      variant="ghost"
      colorScheme="blue"
      spacing={!enableDrawer ? SPACE[2] : 0}
      flexDirection={enableDrawer ? 'column' : 'row'}
    >
      {links
        .filter((link) => link.logIn === undefined || isLoggedIn === link.logIn)
        .map((v) => (
          <Button
            key={v.label}
            marginY={+enableDrawer}
            w={enableDrawer ? 'full' : ''}
            isActive={history.location.pathname === v.path}
          >
            <Text fontSize="sm">{v.label}</Text>
          </Button>
        ))}
    </ButtonGroup>
  );

  return (
    <>
      <Container shadow="md" maxW="full" padding={SPACE[3]}>
        <Flex>
          <AppLogo />
          <Spacer />
          {!enableDrawer ? (
            content
          ) : (
            <IconButton
              size="lg"
              variant="outline"
              colorScheme="blue"
              aria-label="Drawer"
              onClick={drawer.onOpen}
              icon={<i className="mdi mdi-menu" />}
            />
          )}
        </Flex>
      </Container>
      <Drawer isOpen={drawer.isOpen} placement="left" onClose={drawer.onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>
          {content}
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AppHeader;
