import styled from '@emotion/styled';

const Container = styled.img`
  width: 150px;
  height: 150px;
  border: 0;
  cursor: pointer;
`;

interface Props {
  imgUrl?: string;
}

const Img = ({ imgUrl }: Props) => {
  return <Container src={imgUrl ? imgUrl : '/images/나.jpg'} alt="no image" />;
};

export default Img;
