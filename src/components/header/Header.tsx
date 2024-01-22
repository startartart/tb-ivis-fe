import HeaderRight from './HeaderRight';
import styled from 'styled-components';

export default function Header() {
  return (
    <FlexHeader>
      <HeaderLeftText>Tb - IVIS</HeaderLeftText>
      <HeaderRight />
    </FlexHeader>
  );
}

const FlexHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
`;

const HeaderLeftText = styled.h1`
  font-size: 32px;
`;
