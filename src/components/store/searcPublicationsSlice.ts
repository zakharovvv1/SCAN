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
  documetsPublications: [],
  sortedDatesForDataHistograms: null,
};
export const searcPublicationsSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setDataHistograms(state, action) {
      state.dataHistograms = action.payload;
    },
    setIDsOfPublicationsObjectSearch(state, action) {
      state.IDsOfPublicationsObjectSearch = action.payload;
    },
    setDocumetsPublications(state, action) {
      state.documetsPublications.push(action.payload);
    },
    setSortedDatesForDataHistograms(state, action) {
      state.sortedDatesForDataHistograms = action.payload;
    },
  },
});

export default searcPublicationsSlice.reducer;
