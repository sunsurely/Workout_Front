import styled from '@emotion/styled';
import Post from 'components/Post';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const PostPage = () => {
  return (
    <>
      <Container>
        <Post />
      </Container>
    </>
  );
};

export default PostPage;
