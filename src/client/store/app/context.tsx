import * as React from 'react';
import { getInitialState, reducer, State } from 'client/store/app/reducer';
import { ThemeMode } from 'client/types/themeMode';
import { ThemeKey } from 'client/styles/tokens/colors';
import {
  LOCAL_STORAGE_LANGUAGE_KEY,
  LOCAL_STORAGE_THEME_MODE_KEY,
} from 'client/utils/constants';
import { Language } from 'client/types/language';

type Context = State & {
  setThemeKey(themeKey: ThemeKey): void;
  setTheme(themeMode: ThemeMode): void;
  setLanguage(language: Language): void;
};

export const Context = React.createContext<Context>({
  ...getInitialState(),
  setThemeKey: () => null,
  setTheme: () => null,
  setLanguage: () => null,
});

export const AppContextProvider: React.FC = props => {
  const [state, dispatch] = React.useReducer(reducer, getInitialState());

  const setThemeMode = React.useCallback(
    (themeMode: ThemeMode) => {
      dispatch({
        type: 'UPDATE_THEME_MODE',
        payload: { themeMode },
      });
    },
    [dispatch]
  );

  const setThemeKey = React.useCallback(
    (themeKey: ThemeKey) => {
      dispatch({
        type: 'UPDATE_THEME_KEY',
        payload: { themeKey },
      });
    },
    [dispatch]
  );

  const setLanguage = React.useCallback(
    (language: Language) => {
      dispatch({
        type: 'UPDATE_LANGUAGE',
        payload: {
          language,
        },
      });

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, language);
      }
    },
    [dispatch]
  );

  const setTheme = React.useCallback(
    (themeMode: ThemeMode) => {
      if (themeMode === 'light' || themeMode === 'dark') {
        setThemeKey(themeMode);
        setThemeMode(themeMode);
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem(LOCAL_STORAGE_THEME_MODE_KEY, themeMode);
        }
      } else {
        setThemeMode('auto');
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem(LOCAL_STORAGE_THEME_MODE_KEY, 'auto');
        }
      }
    },
    [setThemeKey, setThemeMode]
  );

  return (
    <Context.Provider
      value={{
        themeMode: state.themeMode,
        themeKey: state.themeKey,
        language: state.language,
        setThemeKey,
        setTheme,
        setLanguage,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
