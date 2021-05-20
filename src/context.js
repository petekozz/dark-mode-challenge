import {createContext} from "react";

export const ThemeContext = createContext({isDarkModeEnabled: false, toggleDarkMode: () => {}});
