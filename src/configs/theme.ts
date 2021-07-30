import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Buttons: {},
  },
  config: {
    useSystemColorMode: true,
  },
});

export default theme;
