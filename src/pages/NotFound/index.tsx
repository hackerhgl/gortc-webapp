import React from 'react';

import AppHeader from 'molecules/Header';
import ASSETS from 'assets';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <h1>NOT FOUND</h1>
      {/* <AppHeader />
      <Center p="12">
        <Box boxSize="2xl">
          <Image src={ASSETS.NOT_FOUND} alt="not found" />
        </Box>
      </Center> */}
    </>
  );
}

export default NotFoundPage;
