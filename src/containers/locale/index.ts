import create from 'zustand';

import storage from 'services/storage';

import { LocaleState } from './types';
import { locales } from './data';
import KEYS from './keys';

const useLocale = create<LocaleState>((set, get) => ({
  list: [...locales],
  current: 'en',
  didInit: false,
  change: (locale) => {
    set({ current: locale });
    storage.save({
      key: KEYS.locale,
      data: locale,
    });
  },
  init: async () => {
    try {
      if (get().didInit) return;
      const cache = await storage.load({ key: KEYS.locale });
      set({ current: cache });
    } catch (e) {
      //
    }
    // set({ current: cache });
  },
}));

export default useLocale;
