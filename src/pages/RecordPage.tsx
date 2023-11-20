import styled from '@emotion/styled';
import Record from 'components/Record';
import { useState } from 'react';

const Container = styled.div`
  margin-top: 100px;
  margin-left: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

interface RecordProps {
  id: number;
  title: string;
  part: string;
  exercise: string;
  set: number;
}

const recordArray = [
  { id: 1, title: '조져보자!', part: '상체', exercise: '어깨 운동', set: 4 },
  { id: 2, title: '조져보자!', part: '하체', exercise: '하체 운동', set: 4 },
  { id: 3, title: '조져보자!', part: '하체', exercise: '하체 운동', set: 4 },
];

const RecordPage = () => {
  const [records, setRecords] = useState<ReadonlyArray<RecordProps>>(recordArray);

  return (
    <Container>
      {records.map((rec) => (
        <Record
          key={rec.id}
          title={rec.title}
          part={rec.part}
          exercise={rec.exercise}
          set={rec.set}
        />
      ))}
    </Container>
  );
};

export default RecordPage;
