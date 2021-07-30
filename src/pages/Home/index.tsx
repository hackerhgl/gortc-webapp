import React from 'react';
import { Container } from '@chakra-ui/react';

import AppLogo from 'atoms/logo';

function HomePage(): JSX.Element {
  return (
    <>
      <Container shadow="md" maxW="full" padding="6">
        <AppLogo />
      </Container>
    </>
  );
}

export default HomePage;
