"use client";

import react from "react";
import styled from "styled-components";

import { colors } from "@styles/colors";

import SignIn from "./SignIn";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  background: ${colors.background};
`;

export default function Home() {
  const [isLogin, setIsLogin] = react.useState(false);

  return <Container>{isLogin ? <></> : <SignIn />}</Container>;
}
