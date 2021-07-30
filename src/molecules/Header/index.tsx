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
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import DarkModeToggle from 'react-dark-mode-toggle';

import AppLogo from 'atoms/AppLogo';
import { SPACE } from 'configs/space';

import { links } from './data';

function AppHeader(): JSX.Element {
  const isLoggedIn = false;
  const enableDrawer = !!useBreakpointValue({ md: false, sm: true });
  const colorMode = useColorMode();
  const drawer = useDisclosure();
  const history = useHistory();

  const themeContent = (
    <DarkModeToggle
      size={52}
      onChange={colorMode.toggleColorMode}
      checked={colorMode.colorMode === 'dark'}
    />
  );

  const content = (
    <ButtonGroup
      variant="ghost"
      colorScheme="blue"
      alignItems="center"
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
            onClick={() => history.push(v.path)}
            borderRadius={enableDrawer ? 'none' : 'base'}
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
        <Flex alignItems="center">
          <AppLogo />
          <Spacer />
          {!enableDrawer ? (
            <>
              {content}
              {themeContent}
            </>
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
      <Drawer isOpen={drawer.isOpen && enableDrawer} placement="left" onClose={drawer.onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>
          {content}
          <Button
            as="div"
            w="full"
            variant="ghost"
            colorScheme="blue"
            onClick={colorMode.toggleColorMode}
            borderRadius="none"
          >
            <Text fontSize="sm" marginX={SPACE[2]}>
              Theme
            </Text>
            {themeContent}
          </Button>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AppHeader;
