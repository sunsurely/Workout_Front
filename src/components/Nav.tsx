import styled from '@emotion/styled';
import Menu from './atoms/Menu';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0;
  background-color: #569bf5;
  margin: 0;
`;

const Regist = styled(Link)`
  position: absolute;
  font-weight: bold;
  right: 50px;
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;

  &:hover {
    opacity: 0.7;
  }
`;

const Nav = () => {
  return (
    <Container>
      <Menu to="/record" label="운동일지" />
      <Menu to="/" label="오운완" />
      <Menu to="/me" label="내 포스트" />
      <Regist to="/write">새 글</Regist>
    </Container>
  );
};

export default Nav;
