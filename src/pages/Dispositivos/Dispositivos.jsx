import { Container, LabelInput, Titulo } from '../../components';
import { ListaProdutos } from '../../components/ListaProduto/ListaProduto';
// import { ListaProdutos } from "../../components/ListaProduto/ListaProduto";
import { DispositivosStyled, ListaDispositivos } from './Dispositivos.styles';

export const Dispositivos = () => {
  return (
    <Container>
      <DispositivosStyled>
        <Titulo>Dispositivos</Titulo>
        <hr></hr>
        <LabelInput>
          <label htmlFor="nomeDispositivo">Nome do dispositivo</label>
          <input
            type="text"
            id="nomeDispositivo"
            placeholder="Buscar pelo nome do dispositivo"
          />
        </LabelInput>
        <ListaDispositivos>
          <ListaProdutos />
        </ListaDispositivos>
      </DispositivosStyled>
    </Container>
  );
};
