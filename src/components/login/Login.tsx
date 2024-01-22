import styled from 'styled-components';
import LoginBox from './LoginBox';
import SocialLoginBox from './SocialLoginBox';

export default function Login() {
  return (
    <LoginLayout>
      <LoginBox />
      <SocialLoginBox />
    </LoginLayout>
  );
}

const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 540px;
  padding: 32px;
`;
