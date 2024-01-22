import { useState } from 'react';
import styled from 'styled-components';
import Sun from '../../assets/sun.svg?react';
import Moon from '../../assets/moon.svg?react';
import Search from '../../assets/search.svg?react';
import Door from '../../assets/door.svg?react';

type modeChangeType = {
  $isDark: boolean;
};
export default function HeaderRight() {
  const [isDark, setIsDark] = useState(false);

  return (
    <FlexRightBox>
      <ModeSelectorBox $isDark={isDark} onClick={() => setIsDark(!isDark)}>
        {isDark ? <DynamicMoon /> : <DynamicSun />}
      </ModeSelectorBox>
      <Search width={'32px'} height={'32px'} />
      <LoginButton>
        <Door />
        로그인
      </LoginButton>
    </FlexRightBox>
  );
}

const FlexRightBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 340px;
  height: 100%;
`;

const ModeSelectorBox = styled.div<modeChangeType>`
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  width: 32px;
  height: 32px;
  transform: ${(props) => (props.$isDark ? 'rotate(0deg)' : 'rotate(90deg)')};
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 160px;
  height: 60px;
  font-size: 16px;
  background-color: #ffffff;
  padding: 0;
  border-radius: 100px;
`;

const DynamicMoon = styled(Moon)`
  width: 100%;
  height: 100%;
`;

const DynamicSun = styled(Sun)`
  width: 100%;
  height: 100%;
`;
