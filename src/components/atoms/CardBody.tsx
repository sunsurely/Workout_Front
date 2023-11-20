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
const Content = styled.div`
  margin-left: 20px;
`;

interface Props {
  content: string;
  title: string;
}

const CardBody = ({ content, title }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  );
};

export default CardBody;
