import styled from '@emotion/styled';
import Img from './atoms/Image';
import CardBody from './atoms/CardBody';

const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-top: 30px;
  margin-left: 40px;
  box-shadow: 0 2px 5px black;
  &:hover {
    opacity: 0.6;
  }
`;

interface Props {
  title: string;
  imgUrl?: string | null;
}

const ImgCard = ({ title, imgUrl }: Props) => {
  return (
    <Container>
      <Img imgUrl={imgUrl} />
      <CardBody title={title} />
    </Container>
  );
};

export default ImgCard;
