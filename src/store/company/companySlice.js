import { createSlice } from "@reduxjs/toolkit";
import { getLevels, getOneLevel } from "./companyActions";

const companySlice = createSlice({
  name: "company",
  initialState: {
    levels: [],
    loading: false,
    oneLevel: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLevels.fulfilled, (state, action) => {
        state.loading = false;
        state.levels = action.payload;
      })
      .addCase(getOneLevel.fulfilled, (state, action) => {
        state.loading = false;
        state.oneLevel = action.payload;
      });
  },
});

export default companySlice.reducer;
