import { createGlobalStyle } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { Home, MyPage, Post, Write } from './pages';
import reset from 'styled-reset';
const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
