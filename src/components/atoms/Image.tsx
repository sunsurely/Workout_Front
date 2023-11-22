import styled from '@emotion/styled';
import me from '../../images/나.jpg';

const Container = styled.img`
  width: 100%;
  height: 170px;
  border: 0;
  cursor: pointer;
`;

interface Props {
  imgUrl?: string | null;
}

const Img = ({ imgUrl }: Props) => {
  return <Container src={imgUrl || me} alt="no image" />;
};

export default Img;
