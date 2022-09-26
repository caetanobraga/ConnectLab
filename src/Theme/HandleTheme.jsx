import { Button } from '../components';

import { ThemeProvider } from 'styled-components';
export const HandleTheme = (theme) => {
  return <Button onClick={(setTheme) => !theme}>Troca cor</Button>;
};
