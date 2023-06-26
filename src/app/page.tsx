"use client";

import react from "react";
import styled from "styled-components";

import SignIn from "./SignIn";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: #15172b;
`;

export default function Home() {
  const [isLogin, setIsLogin] = react.useState(false);

  return <Container>{isLogin ? <></> : <SignIn />}</Container>;
}
