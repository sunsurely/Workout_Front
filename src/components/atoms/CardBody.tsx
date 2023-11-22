import styled from '@emotion/styled';

const Container = styled.div`
  width: 300px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

const Title = styled.h3`
  margin-left: 20px;
`;

interface Props {
  title: string;
}

const CardBody = ({ title }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default CardBody;
