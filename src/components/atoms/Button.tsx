import styled from '@emotion/styled';

const Container = styled.button`
  padding: 8px 16px;
  color: #ffffff;
  background-color: #0a8cf8;
  cursor: pointer;
  border: 0;
  border-radius: 4px;

  &:hover {
    opacity: 0.8;
  }
`;

interface Props {
  label: string;
  onClick?: () => void;
}

const Button = ({ label, onClick }: Props) => {
  return <Container onClick={onClick}>{label}</Container>;
};

export default Button;
