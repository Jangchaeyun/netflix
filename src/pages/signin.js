import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase'
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setemailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';
  
  const handleSignin = (event) => {
    event.preventDefault();

    // firebase work here!
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        // push to the browse page
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setemailAddress('');
        setPassword('');
        setError(error.message);
      })
  };

  // check form input elements are valid
  // email & password

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>로그인</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="이메일 주소"
              value={emailAddress}
              onChange={({ target }) => setemailAddress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="비밀번호"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              로그인
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Netflix 회원이 아닌가요?<Form.Link to="/signup">지금 가입하세요.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다. 자세히 알아보기
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}