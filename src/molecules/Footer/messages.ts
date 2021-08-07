import { generateMessages } from 'utils/intl';

const scope = 'HomePage';

const messages = {
  title: 'Copyright {year}. Built and designed by Hamza Iqbal.',
  choose: 'Choose language: ',
};

export default generateMessages<keyof typeof messages>(scope, messages);
