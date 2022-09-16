import {
  Header,
  Button,
  Label,
  Paper,
  Titulo,
  Container,
  Input,
  Main,
} from "./components";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Theme/GlobalStyle";
import { dark, light } from "./Theme/themes";
import { useState } from "react";
import { Cadastrar, Login } from "./pages";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <GlobalStyle />
      <Header>
        <Container>
          <Titulo>Connect Lab</Titulo>
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            Troca tema
          </button>
        </Container>
      </Header>
      <Main>
        <Login />
      </Main>
    </ThemeProvider>
  );
}

export default App;
