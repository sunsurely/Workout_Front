import styled from '@emotion/styled';
import ImgCard from './ImgCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Container = styled.div`
  width: 800px;
  margin-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`;

export type PostType = {
  imgUrl: string;
  content: string;
  id: number;
  title: string;
};

const posts = [
  { id: 1, title: 'kkk', imgUrl: 'kkk', content: '좋으다' },
  { id: 2, title: 'kkk', imgUrl: 'kkkk', content: '완전 좋으다' },
  { id: 3, title: 'kkk', imgUrl: 'kkk', content: '좋으다' },
  { id: 4, title: 'kkk', imgUrl: 'kkk', content: '공부하고 싶으다' },
  { id: 5, title: 'kkk', imgUrl: 'kkk', content: '광고나 하나 띄워 놔야지 그냥' },
  { id: 6, title: 'kkk', imgUrl: 'kkk', content: '흠 이정도면 괜찮은 거 아닌가?' },
];

const Post = () => {
  const [contents, setContents] = useState<ReadonlyArray<PostType>>(posts);
  useEffect(() => {
    axios
      .get('http://localhost:3000/post')
      .then((res: any) => {
        setContents(() => [...res.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log('sss', contents);

  return (
    <Container>
      {contents.map((post) => (
        <ImgCard key={post.id} title={post.title} imgUrl={post.imgUrl} content={post.content} />
      ))}
    </Container>
  );
};

export default Post;
