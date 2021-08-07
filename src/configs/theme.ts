import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Buttons: {},
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

export default theme;
