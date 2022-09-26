import { HeaderContainerStyled, HeaderStyled } from './Header.styles';
import { Container } from '../Container/Container';
import { NavBar } from '../NavBar/NavBar';
import { Titulo } from '../Titulo/Titulo';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <HeaderContainerStyled>
          <Titulo>Connect Lab</Titulo>
          <NavBar />
        </HeaderContainerStyled>
      </Container>
    </HeaderStyled>
  );
};
