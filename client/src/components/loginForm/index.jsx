import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "store/authContext";
import {
  FormContainer,
  Wrapper,
  FormWrapper,
  InputField,
  CreateTitle,
  CreateSubTitle,
  LoginButton,
  RegisterButton,
  ForgotPassword,
  ErrorMessage,
  Label,
} from "./style";

const LoginForm = () => {
  const [enteredUser, setEnteredUser] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();
  const { onLogin } = useAuthContext();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enteredUser),
    });
    const { error, message, user } = await response.json();
    if (!error) {
      localStorage.setItem("auth-token", user.token);
      onLogin({ user, isAuthenticated: true });
      history.push("/boards");
      return;
    }
    setError(message);
  };

  return (
    <FormContainer onSubmit={handleLogin}>
      <Wrapper>
        <CreateTitle>Welcome </CreateTitle>
        <CreateSubTitle>
          We make it easy for everyone to track their day!
        </CreateSubTitle>
      </Wrapper>
      <Label>Username</Label>
      <InputField
        type="text"
        placeholder="Enter your username"
        onChange={(e) =>
          setEnteredUser({ ...enteredUser, username: e.target.value })
        }
      />
      <Label>Password</Label>
      <InputField
        type="password"
        placeholder="Enter your password"
        onChange={(e) =>
          setEnteredUser({ ...enteredUser, password: e.target.value })
        }
      />
      <FormWrapper>
        <ErrorMessage>{error}</ErrorMessage>
        <ForgotPassword>Forgot password?</ForgotPassword>
      </FormWrapper>
      <FormWrapper>
        <LoginButton type="submit" value="Sign in" />
        <RegisterButton to="/register">Create account</RegisterButton>
      </FormWrapper>
    </FormContainer>
  );
};

export default LoginForm;
