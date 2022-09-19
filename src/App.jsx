import { Header, Button, Paper, Titulo, Container, Main } from "./components";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Theme/GlobalStyle";
import { dark, light } from "./Theme/themes";
import { useState } from "react";
import { Cadastrar, Login, Editar } from "./pages";

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
        <Cadastrar></Cadastrar>
      </Main>
    </ThemeProvider>
  );
}

export default App;
