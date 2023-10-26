import { createSlice } from "@reduxjs/toolkit";

export type TypeUserInStore = {
  companyLimit: number;
  usedCompanyCount: number;
};

const initialState: TypeUserInStore = {
  companyLimit: 0,
  usedCompanyCount: 0,
};
export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      state.companyLimit = action.payload.eventFiltersInfo.companyLimit;
      state.usedCompanyCount = action.payload.eventFiltersInfo.usedCompanyCount;
    },
  },
});

export default userSlice.reducer;
