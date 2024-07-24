import { useContext } from 'react';
import { ThemeContext } from './App';

export default function Button() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
    >
      Change the Theme!!
    </button>
  );
}
