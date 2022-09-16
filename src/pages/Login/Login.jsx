import { LoginStyled } from "./Login.styles";
import { Button, Input, Label, Paper } from "../../components";
import { ItemFormStyled } from "../Cadastrar/Cadastrar.styles";

export const Login = () => {
  return (
    <Paper>
      <LoginStyled>
        <h4>Acessar</h4>
        <ItemFormStyled>
          <Label>E-mail</Label>
          <Input></Input>
        </ItemFormStyled>
        <ItemFormStyled>
          <Label>Senha</Label>
          <Input></Input>
        </ItemFormStyled>
        <Button>Acessar</Button>

        <a href="/">Cadastrar</a>
      </LoginStyled>
    </Paper>
  );
};
