"use client";

import { createClient } from "@supabase/supabase-js";
import styled from "styled-components";

import { Database } from "@libs/types";
import { colors } from "@styles/colors";

import SignUp from "./SignUp";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  background: ${colors.background};
`;

const SignUpPage = () => {
  return (
    <Container>
      <SignUp supabase={supabase} />
    </Container>
  );
};

export default SignUpPage;
