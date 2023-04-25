import axios from "axios";
import { AppDispatch } from "..";
import { Item } from "../../models/Models";
import { fetching } from "../slices/itemSlice";
import { fetchSuccess } from "../slices/itemSlice";
import { fetchError } from "../slices/itemSlice";

export const fetchItems = (page: number, count: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetching());
      const response = await axios.get<Item[]>(
        "https://64113b971a5dca342586d356.mockapi.io/items",
        {
          params: { page, count },
        }
      );
      dispatch(fetchSuccess(response.data));
    } catch (error) {
      dispatch(fetchError(error as Error));
    }
  };
};
