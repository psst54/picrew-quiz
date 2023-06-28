import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  id: string;
  isSignIn: string;
}

const initialState: UserState = {
  id: "",
  isSignIn: "false",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSignIn: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
      state.isSignIn = "true";
    },
  },
});

export const { setSignIn } = userSlice.actions;

export default userSlice.reducer;
