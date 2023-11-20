import styled from '@emotion/styled';

const Container = styled.div`
  width: 600px;
  height: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: #bbbbbb;
  cursor: pointer;
`;

interface Props {
  content: string;
  title: string;
}

const CardBody = ({ content, title }: Props) => {
  return <Container>{`title :  ${title} ${content}`}</Container>;
};

export default CardBody;
