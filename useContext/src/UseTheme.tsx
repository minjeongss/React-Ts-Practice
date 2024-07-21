import { useContext } from 'react';
import { ThemeContext } from './App';

function UseTheme() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <p>This theme is: {theme}</p>
    </>
  );
}
export default UseTheme;
