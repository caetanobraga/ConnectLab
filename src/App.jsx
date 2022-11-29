import { Header, Titulo, Container, Main, Button } from './components';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Theme/GlobalStyle';
import { dark, light } from './Theme/themes';
import { useState } from 'react';

import { AppRoutes } from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/Authenticate';
import { AppStyled } from './App.styles';
import { Footer } from './components/Footer/footer';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeProvider theme={theme === 'dark' ? light : dark}>
      <BrowserRouter>
        <AppStyled></AppStyled>
        <AuthProvider>
          <GlobalStyle />
          <Header />
          <Main>
            <AppRoutes></AppRoutes>
          </Main>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
