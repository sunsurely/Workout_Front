import styled from '@emotion/styled';
import axios from 'axios';
import Button from 'components/atoms/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputTitle = styled.input`
  width: 800px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid grey;
  outline: none;
  font-size: 1.2rem;
  padding: 5px;
`;

const BodyContainer = styled.div`
  height: 500px;
`;

const InputBody = styled.textarea`
  resize: none;
  font-size: 1.2rem;
  border: none;
  margin-top: 20px;
  width: 800px;
  outline: none;
  padding: 5px;
`;

const ButtonContainer = styled.div`
  width: 150px;
  justify-content: space-around;
  display: flex;
`;

const Write = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [imgUrl, setImgURL] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setImgFile(selectedFile);

      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === 'string') {
          setImgURL(e.target.result);
        }
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  const regist = async () => {
    const formData = new FormData();
    if (imgFile) {
      formData.append('image', imgFile);
    }

    formData.append('title', title);
    formData.append('content', body);

    try {
      await axios.post('/localhost:3000/post', formData);
      console.log('등록 성공');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <InputTitle
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력하세요"
      />
      <input type="file" onChange={handleFileChange} />
      {imgFile && <img src={imgUrl} alt="selected" width="300" height="300" />}
      <BodyContainer>
        <InputBody
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="내용을 입력하세요"
        />
      </BodyContainer>
      <ButtonContainer>
        <Button label="등록" onClick={regist} />
        <Button label="취소" onClick={() => navigate('/')} />
      </ButtonContainer>
    </Container>
  );
};

export default Write;
