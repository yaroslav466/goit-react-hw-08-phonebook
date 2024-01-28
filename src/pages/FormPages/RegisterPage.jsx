import React from 'react';
import { FormStyle } from 'components/Form/Form.styled';
import { Title } from './FormPage.styled';
import { FormGroup } from './FormPage.styled';
import { Label } from './FormPage.styled';
import { Input } from './FormPage.styled';
import { Button } from './FormPage.styled';
import { FormContainer } from './FormPage.styled';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/auth.reducer';
import Notiflix from 'notiflix';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const onSubmit = evt => {
    evt.preventDefault();
    const name = evt.currentTarget.elements.userName.value;
    const email = evt.currentTarget.elements.userEmail.value;
    const password = evt.currentTarget.elements.userPassword.value;

    const formData = { name, email, password };
    dispatch(registerThunk(formData))
      .unwrap()
      .then(() => evt.target.reset())
      .catch(() => {
        Notiflix.Notify.failure(`Error, please try again`);
      });
  };
  return (
    <FormContainer>
      <Title>Register</Title>
      <FormStyle onSubmit={onSubmit}>
        <FormGroup>
          <Label className="text">Name:</Label>
          <Input
            className="input"
            type="text"
            placeholder="Your Name"
            required
            name="userName"
          />
        </FormGroup>
        <FormGroup>
          <Label className="text">Email:</Label>
          <Input
            className="input"
            type="email"
            placeholder="yourmail@mail.com"
            required
            name="userEmail"
          />
        </FormGroup>
        <FormGroup>
          <Label className="text">Password:</Label>
          <Input
            className="input"
            type="password"
            placeholder="********"
            required
            name="userPassword"
          />
        </FormGroup>
        <Button type="submit">Sign Up</Button>
      </FormStyle>
    </FormContainer>
  );
};

export default RegisterPage;