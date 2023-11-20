import Header from 'components/Header';
import Write from 'pages/Write';
import MainPage from 'pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import RecordPage from 'pages/RecordPage';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/write" element={<Write />} />
        <Route path="/record" element={<RecordPage />} />
      </Routes>
    </>
  );
};

export default App;
