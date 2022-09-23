import { useContext } from "react";
import { LoginStyled } from "./Login.styles";
import { Button, LabelInput, Paper } from "../../components";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { AuthContext } from "../../contexts/Authenticate";

const campoObrigatorio = "Campo obrigatório";
const baseURL = "https://connectlab.onrender.com/";

const notifyError = (msg) =>
  toast.error(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const notifySuccess = (msg) =>
  toast.success(msg, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const formSchema = yup.object({
  email: yup.string().email("E-mail inválido").required(campoObrigatorio),

  senha: yup
    .string()
    .required(campoObrigatorio)
    .min(8, "Deve ter no mínimo 8 caracteres"),
});

export const Login = () => {
  const { authenticated, login } = useContext(AuthContext);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleConfirmarForm = (values) => {
    // const body = {
    //   email: values.email,
    //   password: values.senha,
    // };
    // axios
    //   .post(baseURL + "auth/login/", body)
    //   .then((response) => {
    //     const user = {
    //       email: response.data.user.email,
    //       _id: response.data.user._id,
    //     };
    //     const token = response.data.token;

    //     notifySuccess("Logado com sucesso!");

    login(values.email, values.senha);
    // })
    // .catch((response) => {
    //   notifyError(response.response.data.error);
    // });
  };

  return (
    <>
      <Paper>
        <LoginStyled>
          <h4>Acessar</h4>
          <p>{String(authenticated)}</p>
          {console.log(authenticated)}
          <form onSubmit={handleSubmit(handleConfirmarForm)}>
            <LabelInput>
              <label htmlFor="email">E-mail</label>
              <input
                {...register("email")}
                id="email"
                type="email"
                placeholder="Digite seu email"
              ></input>
              {formState.errors.email && (
                <span>{formState.errors.email.message}</span>
              )}
            </LabelInput>
            <LabelInput>
              <label htmlFor="senha">Senha</label>
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
            <LoginStyled>
              <Button onClick={handleSubmit}>Acessar</Button>
            </LoginStyled>
          </form>

          <a href="/">Cadastrar</a>
        </LoginStyled>
      </Paper>
      <ToastContainer />
    </>
  );
};
