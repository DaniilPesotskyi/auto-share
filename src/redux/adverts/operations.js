import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://6500a10018c34dee0cd5395d.mockapi.io";

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAll",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const { data } = await axios.get("/adverts", {
        params: {
          page: state.adverts.page,
          limit: 8,
        },
      });

      if (data.length === 0) {
        toast.error("There are no more cars");
      } else {
        toast.success(`${data.length} сars successfully loaded`);
      }

      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
