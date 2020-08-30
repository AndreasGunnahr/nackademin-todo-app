import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "store/authContext";
import {
  FormContainer,
  Label,
  Wrapper,
  FormWrapper,
  InputField,
  CreateTitle,
  CreateSubTitle,
  RegisterButton,
  ExistingAccount,
  Highlight,
  ErrorMessage,
} from "./style";

const RegisterForm = () => {
  const history = useHistory();
  const [enteredUser, setEnteredUser] = useState(null);
  const [error, setError] = useState(null);
  const { onLogin } = useAuthContext();

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/auth/register", {
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
    <FormContainer onSubmit={handleRegister}>
      <Wrapper>
        <CreateSubTitle>Start for free today</CreateSubTitle>
        <CreateTitle>Create an account </CreateTitle>
      </Wrapper>
      <Label>Username</Label>
      <InputField
        type="text"
        placeholder="Enter your username"
        onChange={(e) =>
          setEnteredUser({ ...enteredUser, username: e.target.value })
        }
      />
      <Label>Email</Label>
      <InputField
        type="email"
        placeholder="Enter your email"
        onChange={(e) =>
          setEnteredUser({ ...enteredUser, email: e.target.value })
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
      <Label>Password again</Label>
      <InputField
        type="password"
        placeholder="Enter your password again"
        onChange={(e) =>
          setEnteredUser({ ...enteredUser, rePassword: e.target.value })
        }
      />
      <ErrorMessage>{error}</ErrorMessage>
      <FormWrapper>
        <RegisterButton type="submit" value="Create account" />
      </FormWrapper>

      <ExistingAccount>
        Already have an account? <Highlight to="/login">Sign in</Highlight>
      </ExistingAccount>
    </FormContainer>
  );
};

export default RegisterForm;
