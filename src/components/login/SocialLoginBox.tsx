import styled from 'styled-components';

import KakaoSvg from '../../assets/kakao-icon.svg?react';
import GoogleSvg from '../../assets/google-icon.svg?react';
import NaverSvg from '../../assets/naver-icon.svg?react';

export default function SocialLoginBox() {
  return (
    <SocialLoginBoxLayout>
      <SocialLoginText>소셜 계정으로 로그인</SocialLoginText>
      <SocialLoginSvgBox>
        <KakaoSvg />
        <GoogleSvg />
        <NaverSvg />
      </SocialLoginSvgBox>
    </SocialLoginBoxLayout>
  );
}

const SocialLoginBoxLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 200px;
  gap: 64px;
`;

const SocialLoginSvgBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
`;

const SocialLoginText = styled.p`
  font-size: 24px;
`;
