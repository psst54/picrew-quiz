"use client";

import react from "react";
import { createClient } from "@supabase/supabase-js";
import styled from "styled-components";

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

export default function Home() {
  const [isSignin, setIsSignin] = react.useState(false);
  react.useEffect(() => {
    console.log("[debug] isSignin :", isSignin);
  }, [isSignin]);

  return (
    <Container>
      {isSignin ? (
        <></>
      ) : (
        <SignIn supabase={supabase} setIsSignin={setIsSignin} />
      )}
    </Container>
  );
}
