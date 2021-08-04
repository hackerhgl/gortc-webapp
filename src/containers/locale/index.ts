import create from 'zustand';
import { locales } from './data';
import { LocaleState } from './types';

const useLocale = create<LocaleState>((set) => ({
  list: [...locales],
  current: 'en',
  change: (locale) => {
    set({ current: locale });
  },
}));

export default useLocale;
