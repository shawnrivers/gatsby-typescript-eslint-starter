import * as React from 'react';
import { useAppContext } from 'client/store/app/useAppContext';
import { ThemeMode } from 'client/types/themeMode';
import {
  Language,
  LOCAL_STORAGE_LANGUAGE_KEY,
  LOCAL_STORAGE_THEME_MODE_KEY,
} from 'client/utils/constants';

export const useLocalStorageForContext = () => {
  const { setTheme, setLanguage } = useAppContext();

  React.useEffect(() => {
    const themeMode = (localStorage.getItem(LOCAL_STORAGE_THEME_MODE_KEY) ??
      'auto') as ThemeMode;
    const language = (localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY) ??
      'ja') as Language;

    setTheme(themeMode);
    setLanguage(language);
  }, [setLanguage, setTheme]);
};
