"use client";

import { createClient } from "@supabase/supabase-js";
import styled from "styled-components";

import { useAppSelector } from "@/redux/hooks";

import { Database } from "@libs/types";
import { colors } from "@styles/colors";

import Main from "./Main";
import SignIn from "./SignIn";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

import { Background } from "@styles/styles";

const Home = () => {
  const isSignIn = useAppSelector((state) => state.userReducer.isSignIn);

  return (
    <Background>{true ? <Main /> : <SignIn supabase={supabase} />}</Background>
  );
};

export default Home;
