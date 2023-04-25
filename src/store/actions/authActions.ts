import axios from "axios";
import { AppDispatch } from "..";
import { login } from "../slices/authSlice";

interface AuthResponse {
  access: string;
  refresh: string;
}

interface AuthData {
  username: string;
  password: string;
}

export const register = (data: AuthData) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post<AuthResponse>(
        "https://64113b971a5dca342586d356.mockapi.io/basket",
        data
      );
      dispatch(
        login({
          username: data.username,
          access: response.data.access,
        })
      );
    } catch (error) {
      console.log("error", error);
    }
  };
};
