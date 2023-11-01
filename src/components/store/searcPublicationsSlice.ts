import { createSlice } from "@reduxjs/toolkit";

export type TypeDataHistorgams = {
  dataHistograms: any;
  IDsOfPublicationsObjectSearch: any;
  documetsPublications: any;
  sortedDatesForDataHistograms: any;
};

const initialState: TypeDataHistorgams = {
  dataHistograms: null,
  IDsOfPublicationsObjectSearch: null,
  documetsPublications: null,
  sortedDatesForDataHistograms: null,
};
export const searcPublicationsSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setDataHistograms(state, action) {
      state.dataHistograms = action.payload.data;
    },
    setIDsOfPublicationsObjectSearch(state, action) {
      state.IDsOfPublicationsObjectSearch = action.payload;
    },
    setDocumetsPublications(state, action) {
      state.documetsPublications = action.payload;
    },
    setSortedDatesForDataHistograms(state, action) {
      state.sortedDatesForDataHistograms = action.payload;
    },
  },
});

export default searcPublicationsSlice.reducer;
