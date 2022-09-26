import { useContext } from 'react';
import { LoginStyled } from './Login.styles';
import { Button, LabelInput, Paper } from '../../components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { AuthContext } from '../../contexts/Authenticate';
import { Link } from 'react-router-dom';

const campoObrigatorio = 'Campo obrigatório';

const formSchema = yup.object({
  email: yup.string().email('E-mail inválido').required(campoObrigatorio),
  senha: yup
    .string()
    .required(campoObrigatorio)
    .min(8, 'Deve ter no mínimo 8 caracteres'),
});

export const Login = () => {
  const { login } = useContext(AuthContext);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleConfirmarForm = (values) => {
    login(values.email, values.senha);
  };

  return (
    <>
      <Paper>
        <LoginStyled>
          <h4>Acessar</h4>
          <form onSubmit={handleSubmit(handleConfirmarForm)}>
            <LabelInput>
              <label htmlFor="email">E-mail</label>
              <input
                {...register('email')}
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
                {...register('senha')}
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
        </LoginStyled>
        <Link to="/cadastrar">Cadastrar</Link>
      </Paper>
      <ToastContainer />
    </>
  );
};
