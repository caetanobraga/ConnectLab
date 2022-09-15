import { Header, Button } from "./components";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Theme/GlobalStyle";
import { dark, light } from "./Theme/themes";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <GlobalStyle />
      <Header />
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Troca tema
      </button>
      <Button>Login</Button>
      <Button outline={true}>Login</Button>
    </ThemeProvider>
  );
}

export default App;
