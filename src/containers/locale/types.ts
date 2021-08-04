import { locales } from './data';

type Locales = typeof locales[number];

export interface LocaleState {
  list: Locales[];
  current: Locales;
  didInit: boolean;
  change: (locale: Locales) => void;
  init: () => void;
}
