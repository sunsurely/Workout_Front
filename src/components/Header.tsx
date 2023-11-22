import styled from '@emotion/styled';
import Nav from './Nav';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: #b14444;
  padding: 10px;
`;

const Header = () => {
  return (
    <Container>
      <Title to={'/'}>Worecord</Title>
      <Nav />
    </Container>
  );
};

export default Header;
