import { createAsyncThunk } from "@reduxjs/toolkit";
import { COMPANY_API } from "../../helpers/consts";
import axios from "axios";

export const getLevels = createAsyncThunk("company/getLevels", async () => {
  const { data } = await axios.get(COMPANY_API);
  return data;
});

export const getOneLevel = createAsyncThunk(
  "company/getOneLevel",
  async (id) => {
    const { data } = await axios.get(`${COMPANY_API}/${id}`);
    return data;
  }
);
