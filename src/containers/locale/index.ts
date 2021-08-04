import create from 'zustand';
import { locales } from './data';
import { LocaleState } from './types';

const useLocale = create<LocaleState>((set) => ({
  list: [...locales],
  current: 'en',
  didInit: false,
  change: (locale) => {
    set({ current: locale });
  },
  init: () => {},
}));

export default useLocale;
