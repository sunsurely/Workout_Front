import styled from '@emotion/styled';
import ImgCard from './ImgCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Container = styled.div`
  width: 1800px;
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 30px;
`;

export type PostType = {
  imgUrl?: string | null;
  content: string;
  id: number;
  title: string;
};
const posts = [
  { id: 1, title: '첫 번째 운동 일지', content: '좋으다' },
  { id: 2, title: '두 전째 운동 일지', content: '완전 좋으다' },
  { id: 3, title: '오늘도 어김없이', content: '좋으다' },
  { id: 4, title: '완전 좋으다', content: '공부하고 싶으다' },
  { id: 5, title: '상쾌하구만', content: '광고나 하나 띄워 놔야지 그냥' },
  { id: 6, title: '지겨워 죽겠다', content: '흠 이정도면 괜찮은 거 아닌가?' },
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

  return (
    <Container>
      {contents.map((post) => (
        <ImgCard key={post.id} title={post.title} imgUrl={post.imgUrl} />
      ))}
    </Container>
  );
};

export default Post;
