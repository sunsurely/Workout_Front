import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled(Link)`
  font-weight: bold;
  margin-left: 50px;
  cursor: pointer;
  text-decoration: none;
  color: black;

  &:hover {
    opacity: 0.6;
  }
`;

interface Props {
  label: string;
  to: string;
}

const Menu = ({ label, to }: Props) => {
  return <Container to={to}>{label}</Container>;
};

export default Menu;
