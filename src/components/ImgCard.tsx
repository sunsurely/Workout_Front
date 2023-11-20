import styled from '@emotion/styled';
import Img from './atoms/Image';
import CardBody from './atoms/CardBody';

const Container = styled.div`
  width: 800px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-top: 30px;
  padding: 0;
  &:hover {
    opacity: 0.6;
  }
`;

interface Props {
  imgUrl: string;
  content: string;
  title: string;
}

const ImgCard = ({ imgUrl, content, title }: Props) => {
  return (
    <Container>
      <CardBody content={content} title={title} />
      <Img imgUrl={imgUrl} />
    </Container>
  );
};

export default ImgCard;
