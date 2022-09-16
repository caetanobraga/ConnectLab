import {
  CadastrarStyled,
  FormCadastro,
  ItemFormStyled,
} from "./Cadastrar.styles";
import { Button, Input, Label, Paper } from "../../components";

export const Cadastrar = () => {
  return (
    <Paper>
      <CadastrarStyled>
        <h4>Cadastrar</h4>
      </CadastrarStyled>
      <FormCadastro>
        <CadastrarStyled>
          <ItemFormStyled>
            <Label>Nome completo*</Label>
            <Input></Input>
          </ItemFormStyled>
          <ItemFormStyled>
            <Label>URL foto perfil</Label>
            <Input></Input>
          </ItemFormStyled>
          <ItemFormStyled>
            <Label>Senha*</Label>
            <Input></Input>
          </ItemFormStyled>
          <ItemFormStyled>
            <Label>CEP*</Label>
            <Input></Input>
          </ItemFormStyled>
          <ItemFormStyled>
            <Label>Cidade*</Label>
            <Input></Input>
          </ItemFormStyled>
          <ItemFormStyled>
            <Label>Número*</Label>
            <Input></Input>
          </ItemFormStyled>
        </CadastrarStyled>
        <CadastrarStyled>
          <ItemFormStyled>
            <Label>E-mail*</Label>
            <Input></Input>
          </ItemFormStyled>
          <ItemFormStyled>
            <Label>Telefone</Label>
            <Input></Input>
          </ItemFormStyled>
          <ItemFormStyled>
            <Label>Confirmação de senha*</Label>
            <Input></Input>
          </ItemFormStyled>
          <ItemFormStyled>
            <Label>Endereço*</Label>
            <Input></Input>
          </ItemFormStyled>
          <ItemFormStyled>
            <Label>Estado*</Label>
            <Input></Input>
          </ItemFormStyled>
          <ItemFormStyled>
            <Label>Bairro*</Label>
            <Input></Input>
          </ItemFormStyled>
        </CadastrarStyled>
      </FormCadastro>
      <CadastrarStyled>
        <Button>Acessar</Button>

        <a href="/">Cadastrar</a>
      </CadastrarStyled>
    </Paper>
  );
};
