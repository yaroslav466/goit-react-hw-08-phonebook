import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthenticated, selectUserData } from '../../redux/auth/auth.selectors';
import { logOutThunk } from '../../redux/auth/auth.reducer';
import {
  ContainerStyled,
  StyledHeader,
  StyledLink,
  StyledNav,
} from './Layout.styled';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthenticated);
  const userData = useSelector(selectUserData);

  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <div>
      <StyledHeader>
        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          {authenticated ? (
            <>
              <StyledLink to="/contacts">Contacts</StyledLink>
              <div>
                <span className="text-name">Hello, {userData.name}!</span>
                <StyledLink onClick={onLogOut}>Log Out</StyledLink>
              </div>
            </>
          ) : (
            <div className="auth">
              <StyledLink to="/login">Login</StyledLink>
              <StyledLink to="/register">Register</StyledLink>
            </div>
          )}
        </StyledNav>
      </StyledHeader>
      <ContainerStyled>{children}</ContainerStyled>
    </div>
  );
};

export default Layout;