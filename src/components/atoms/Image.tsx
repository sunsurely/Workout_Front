import styled from '@emotion/styled';

const Container = styled.img`
  width: 150px;
  height: 150px;
  margin-left: 30px;
  border: 0;
  cursor: pointer;
  background-color: #ffb9dc;
`;

interface Props {
  imgUrl?: string;
}

const Img = ({ imgUrl }: Props) => {
  return <Container src={imgUrl ? imgUrl : ''} alt="오운완 사진" />;
};

export default Img;
