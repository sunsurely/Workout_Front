import styled from '@emotion/styled';
import Nav from './Nav';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #7c7c7c;
  padding: 10px;
`;

const Header = () => {
  return (
    <Container>
      <Title>운동 블로그</Title>
      <Nav />
    </Container>
  );
};

export default Header;
