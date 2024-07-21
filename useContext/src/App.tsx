import { createContext, useState } from 'react';
import UseTheme from './UseTheme';

type Theme = 'light' | 'dark' | 'system';
export const ThemeContext = createContext<Theme>('system');

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  return (
    <ThemeContext.Provider value={theme}>
      <UseTheme />
    </ThemeContext.Provider>
  );
}

export default App;
