import React from 'react';
import { FormStyle } from 'components/Form/Form.styled';
import { Title } from './FormPage.styled';
import { FormGroup } from './FormPage.styled';
import { Label } from './FormPage.styled';
import { Input } from './FormPage.styled';
import { Button } from './FormPage.styled';
import { FormContainer } from './FormPage.styled';
import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/auth.reducer';


const LoginPage = () => {
  const dispatch = useDispatch();

  const onSubmit = evt => {
    evt.preventDefault();

    const email = evt.currentTarget.elements.userEmail.value;
    const password = evt.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };
    console.log('formDataLogin: ', formData);

    dispatch(loginThunk(formData));
    Notiflix.Notify.success(`Authentication was successful`);
  };
  return (
     <FormContainer>
      <Title>Login</Title>
      <FormStyle onSubmit={onSubmit}>
        <FormGroup>
        <Label>Email:</Label>
          <Input
            className="input"
            type="email"
            placeholder="yourmail@mail.com"
            required
            name="userEmail"
          />
        </FormGroup>
        <FormGroup>
        <Label>Password:</Label>
          
          <Input
            className="input"
            type="password"
            placeholder="********"
            required
            name="userPassword"
            minLength={6}
          />
        
        </FormGroup>
        <FormGroup>
          <Button type="submit">Login</Button>
       </FormGroup>
       
        
      </FormStyle>
    </FormContainer>
  );
};

export default LoginPage;