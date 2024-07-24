import { createContext, Dispatch, SetStateAction, useState } from 'react';
import UseTheme from './UseTheme';
import Button from './Button';
import DarkUseTheme from './DarkUseTheme';

type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}
export const ThemeContext = createContext<ThemeContextType>({ theme: 'light', setTheme: () => {} });

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Button />
      <UseTheme />
      <ThemeContext.Provider value={{ theme: 'dark', setTheme }}>
        <DarkUseTheme />
      </ThemeContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
