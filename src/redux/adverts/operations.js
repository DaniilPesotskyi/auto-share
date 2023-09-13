import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6500a10018c34dee0cd5395d.mockapi.io";

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/adverts");
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
