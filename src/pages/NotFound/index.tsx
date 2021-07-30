import React from 'react';
import { Box, Center, Image } from '@chakra-ui/react';

import AppHeader from 'molecules/Header';
import ASSETS from 'assets';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <AppHeader />
      <Center p="12">
        <Box boxSize="2xl">
          <Image src={ASSETS.NOT_FOUND} alt="not found" />
        </Box>
      </Center>
    </>
  );
}

export default NotFoundPage;
