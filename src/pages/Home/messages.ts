import { generateMessages } from 'utils/intl';

const scope = 'HomePage';

const messages = {
  welcome: 'Welcome to GO RTC',
  hello: 'Welcome to GO RTC',
};

export default generateMessages<keyof typeof messages>(scope, messages);
