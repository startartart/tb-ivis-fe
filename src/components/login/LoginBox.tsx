import styled from 'styled-components';

export default function LoginBox() {
  return (
    <LoginBoxLayout>
      <LoginBoxHeader>
        <LoginText>로그인</LoginText>
        <p>IVIS 회원이라면? 회원가입</p>
      </LoginBoxHeader>
    </LoginBoxLayout>
  );
}

const LoginBoxLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const LoginBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LoginText = styled.p`
  font-size: 36px;
`;
