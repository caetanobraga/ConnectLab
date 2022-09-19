import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

import { CadastrarStyled, FormCadastro } from "./Cadastrar.styles";
import { Button, LabelInput, Paper } from "../../components";

const campoObrigatorio = "Campo obrigatório";

const formSchema = yup.object({
  nomeCompleto: yup.string().required(campoObrigatorio),
  urlPerfil: yup.string().url("URL inválida"),
  email: yup.string().email("E-mail inválido").required(campoObrigatorio),
  telefone: yup
    .string()
    .matches(
      /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/,
      "Telefone deve ser no formato (xx) xxxxx-xxxx",
    ),

  senha: yup
    .string()
    .required(campoObrigatorio)
    .min(8, "Deve ter no mínimo 8 caracteres"),
  confirmacaoSenha: yup
    .string()
    .required(campoObrigatorio)
    .oneOf([yup.ref("senha")], "Senha e confirmação devem ser iguais!"),
  cep: yup
    .string()
    .required(campoObrigatorio)
    .matches(/^[0-9]+$/, "Apenas números")
    .min(8)
    .max(8),
  endereco: yup.string().required(campoObrigatorio),
  numero: yup.number().required(campoObrigatorio),
  bairro: yup.string().required(campoObrigatorio),
  cidade: yup.string().required(campoObrigatorio),
  estado: yup.string().required(campoObrigatorio),
});

export const Cadastrar = () => {
  const { register, handleSubmit, formState, setValue, setFocus } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleConfirmarForm = (valores) => {
    console.log(valores);
  };

  const buscaCep = (e) => {
    if (!e.target.value) {
      return;
    }
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue("endereco", data.logradouro);
        setValue("bairro", data.bairro);
        setValue("cidade", data.localidade);
        setValue("estado", data.uf);
        setFocus("numero");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Paper>
      <CadastrarStyled>
        <h4>Cadastrar</h4>
      </CadastrarStyled>

      <form onSubmit={handleSubmit(handleConfirmarForm)}>
        <FormCadastro>
          <CadastrarStyled>
            <LabelInput>
              <label htmlFor="nomeCompleto">Nome completo*</label>
              <input
                {...register("nomeCompleto")}
                type="text"
                id="nomeCompleto"
                placeholder="Digite seu nome completo"
              />
              {formState.errors.nomeCompleto && (
                <span>{formState.errors.nomeCompleto.message}</span>
              )}
            </LabelInput>
            <LabelInput>
              <label htmlFor="urlPerfil">URL foto perfil</label>
              <input
                {...register("urlPerfil")}
                id="urlPerfil"
                type="text"
                placeholder="foto de prefil"
              ></input>
              {formState.errors.urlPerfil && (
                <span>{formState.errors.urlPerfil.message}</span>
              )}
            </LabelInput>
            <LabelInput>
              <label htmlFor="email">E-mail*</label>
              <input
                {...register("email")}
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
              ></input>
              {formState.errors.email && (
                <span>{formState.errors.email.message}</span>
              )}
            </LabelInput>
            <LabelInput>
              <label htmlFor="telefone">Telefone</label>
              <input
                {...register("telefone")}
                id="telefone"
                type="text"
                placeholder="(xx) xxxx-xxxxx"
              ></input>
              {formState.errors.telefone && (
                <span>{formState.errors.telefone.message}</span>
              )}
            </LabelInput>
            <LabelInput>
              <label htmlFor="senha">Senha*</label>
              <input
                {...register("senha")}
                id="senha"
                type="password"
                placeholder="Digite sua senha"
              ></input>
              {formState.errors.senha && (
                <span>{formState.errors.senha.message}</span>
              )}
            </LabelInput>
            <LabelInput>
              <label htmlFor="confirmacaoSenha">Confirmação de senha*</label>
              <input
                {...register("confirmacaoSenha")}
                id="confirmacaoSenha"
                type="password"
                placeholder="Confirme sua senha"
              ></input>
              {formState.errors.confirmacaoSenha && (
                <span>{formState.errors.confirmacaoSenha.message}</span>
              )}
            </LabelInput>
          </CadastrarStyled>
          <CadastrarStyled>
            <LabelInput>
              <label htmlFor="cep">CEP*</label>
              <input
                {...register("cep")}
                id="cep"
                type="text"
                placeholder="Digite seu CEP"
                onBlur={buscaCep}
              ></input>
              {formState.errors.cep && (
                <span>{formState.errors.cep.message}</span>
              )}
            </LabelInput>
            <LabelInput>
              <label htmlFor="endereco">Endereço*</label>
              <input
                {...register("endereco")}
                id="endereco"
                type="text"
                placeholder="Digite seu endereço"
              ></input>
              {formState.errors.endereco && (
                <span>{formState.errors.endereco.message}</span>
              )}
            </LabelInput>
            <LabelInput>
              <label htmlFor="numero">Número*</label>
              <input
                {...register("numero")}
                defaultValue="0"
                type="number"
                placeholder="Digite o numero mais o complemento"
              ></input>
              {formState.errors.numero && (
                <span>{formState.errors.numero.message}</span>
              )}
            </LabelInput>
            <LabelInput>
              <label htmlFor="bairro">Bairro*</label>
              <input
                {...register("bairro")}
                id="bairro"
                type="text"
                placeholder="Digite seu bairro"
              ></input>
              {formState.errors.bairro && (
                <span>{formState.errors.bairro.message}</span>
              )}
            </LabelInput>
            <LabelInput>
              <label htmlFor="cidade">Cidade*</label>
              <input
                {...register("cidade")}
                id="cidade"
                type="text"
                placeholder="Digite sua cidade"
              ></input>
              {formState.errors.cidade && (
                <span>{formState.errors.cidade.message}</span>
              )}
            </LabelInput>
            <LabelInput>
              <label htmlFor="estado">Estado*</label>
              <input
                {...register("estado")}
                id="estado"
                type="text"
                placeholder="Digite sua UF"
              ></input>
              {formState.errors.estado && (
                <span>{formState.errors.estado.message}</span>
              )}
            </LabelInput>
          </CadastrarStyled>
        </FormCadastro>
        <CadastrarStyled>
          <Button onClick={handleSubmit}>Cadastrar</Button>
        </CadastrarStyled>
      </form>
    </Paper>
  );
};
