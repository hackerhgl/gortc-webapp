import { locales } from './data';

type Locales = typeof locales[number];

export interface LocaleState {
  list: Locales[];
  current: Locales;
  change: (locale: Locales) => void;
}
