"use client";

import react from "react";
import { createClient } from "@supabase/supabase-js";
import styled from "styled-components";

import { useAppSelector } from "@/redux/hooks";

import { Database } from "@libs/types";
import { colors } from "@styles/colors";

import SignIn from "./SignIn";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  background: ${colors.background};
`;
const Home = () => {
  const isSignIn = useAppSelector((state) => state.userReducer.isSignIn);

  react.useEffect(() => {
    console.log("[debug] isSignIn :", isSignIn);
  }, [isSignIn]);

  return (
    <Container>{isSignIn ? <></> : <SignIn supabase={supabase} />}</Container>
  );
};

export default Home;
