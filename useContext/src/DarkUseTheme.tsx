import { useContext } from 'react';
import { ThemeContext } from './App';

function DarkUseTheme() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <p>This theme is: {theme}</p>
    </>
  );
}
export default DarkUseTheme;
