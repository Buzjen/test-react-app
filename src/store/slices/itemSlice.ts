import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Item } from "../../models/Models";

interface ItemState {
  loading: boolean;
  error: string;
  items: Item[];
}

const initialState: ItemState = {
  loading: false,
  error: "",
  items: [],
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<Item[]>) {
      state.loading = false;
      state.items = action.payload;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { fetching, fetchSuccess, fetchError } = itemSlice.actions;

export default itemSlice.reducer;
