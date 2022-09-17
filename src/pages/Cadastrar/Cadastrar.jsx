import { CadastrarStyled, FormCadastro } from "./Cadastrar.styles";
import { Button, LabelInput, Paper } from "../../components";

export const Cadastrar = () => {
  return (
    <Paper>
      <CadastrarStyled>
        <h4>Cadastrar</h4>
      </CadastrarStyled>
      <FormCadastro>
        <CadastrarStyled>
          <LabelInput>
            <label htmlFor="nomeCompleto">Nome completo*</label>
            <input
              id="nomeCompleto"
              type="text"
              placeholder="Digite seu nome completo"
            ></input>
          </LabelInput>
          <LabelInput>
            <label htmlFor="urlPerfil">URL foto perfil</label>
            <input
              id="urlPerfil"
              type="email"
              placeholder="Digite seu email"
            ></input>
          </LabelInput>
          <LabelInput>
            <label htmlFor="senha">Senha*</label>
            <input
              id="senha"
              type="password"
              placeholder="Digite sua senha"
            ></input>
          </LabelInput>
          <LabelInput>
            <label htmlFor="cep">CEP*</label>
            <input id="cep" type="text" placeholder="Digite seu CEP"></input>
          </LabelInput>
          <LabelInput>
            <label htmlFor="cidade">Cidade*</label>
            <input
              id="cidade"
              type="text"
              placeholder="Digite sua cidade"
            ></input>
          </LabelInput>
          <LabelInput>
            <label htmlFor="numero">Número*</label>
            <input
              id="numero"
              type="text"
              placeholder="Digite o numero mais o complemento"
            ></input>
          </LabelInput>
        </CadastrarStyled>
        <CadastrarStyled>
          <LabelInput>
            <label htmlFor="email">E-mail*</label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
            ></input>
          </LabelInput>
          <LabelInput>
            <label htmlFor="telefone">Telefone</label>
            <input
              id="telefone"
              type="text"
              placeholder="(xx) xxxx-xxxxx"
            ></input>
          </LabelInput>
          <LabelInput>
            <label htmlFor="confirmacaoSenha">Confirmação de senha*</label>
            <input
              id="confirmacaoSenha"
              type="password"
              placeholder="Confirme sua senha"
            ></input>
          </LabelInput>
          <LabelInput>
            <label htmlFor="endereco">Endereço*</label>
            <input
              id="endereco"
              type="text"
              placeholder="Digite seu endereço"
            ></input>
          </LabelInput>
          <LabelInput>
            <label htmlFor="estado">Estado*</label>
            <input id="estado" type="text" placeholder="Digite sua UF"></input>
          </LabelInput>
          <LabelInput>
            <label htmlFor="bairro">Bairro*</label>
            <input
              id="bairro"
              type="text"
              placeholder="Digite seu bairro"
            ></input>
          </LabelInput>{" "}
        </CadastrarStyled>
      </FormCadastro>
      <CadastrarStyled>
        <Button>Acessar</Button>

        <a href="/">Cadastrar</a>
      </CadastrarStyled>
    </Paper>
  );
};
