import { defineMessages, MessageDescriptor } from 'react-intl';

type MessageMap = Record<string, MessageDescriptor>;

export function generateMessages<
  K extends string,
  A extends Record<K, string> = Record<K, string>,
  R extends MessageMap = Record<K, MessageDescriptor>,
>(scope: string, map: A): R {
  const messages: MessageMap = {};
  Object.keys(map).forEach((raw) => {
    const key = raw as K;
    messages[key] = {
      id: `${scope}_${key}`,
      defaultMessage: map[key],
    };
  });
  return defineMessages(messages) as R;
}
