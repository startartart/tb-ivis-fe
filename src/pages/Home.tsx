import Header from '../components/header/Header';
import FilterBar from '../components/filter-bar/FilterBar';
import ScrollContents from '../components/scroll-contents/ScrollContents';
import LoginBox from '../components/login/Login';
import styled from 'styled-components';

export default function Home() {
  return (
    <Flex>
      <Header />
      <FilterBar />
      <ScrollContents />
      <LoginBox />
    </Flex>
  );
}

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px;
`;
