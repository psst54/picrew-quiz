"use client";

import react from "react";
import styled from "styled-components";

import { colors } from "@styles/colors";

import SignUp from "./SignUp";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  background: ${colors.background};
`;

const SignUpPage = () => {
  return (
    <Container>
      <SignUp />
    </Container>
  );
};

export default SignUpPage;
