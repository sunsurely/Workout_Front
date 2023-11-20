import styled from '@emotion/styled';

const Container = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid grey;
`;

const Title = styled.div`
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Content = styled.div`
  margin-bottom: 20px;
`;

export interface Props {
  title: string;
  part: string;
  exercise: string;
  set: number;
}

const Record = ({ title, part, exercise, set }: Props) => {
  return (
    <Container>
      <Title>Title:{title}</Title>
      <Content>Part:{part}</Content>
      <Content>exercise:{exercise}</Content>
      <Content>SET:{set}</Content>
    </Container>
  );
};

export default Record;
