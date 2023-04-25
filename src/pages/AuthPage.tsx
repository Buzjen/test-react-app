import { useNavigate } from "react-router-dom";
import { useInput } from "../hooks/input";
import { useAppDispatch } from "../hooks/redux";
import { register } from "../store/actions/authActions";

export const AuthPage = () => {
  const password = useInput("");
  const username = useInput("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isFormValid = () => username.value && password.value;

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (isFormValid()) {
      dispatch(
        register({ username: username.value, password: password.value })
      ).then(() => {
        navigate("/");
      });
    } else {
      alert("Change form");
    }
  };

  const loginHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (isFormValid()) {
      dispatch(
        register({ username: username.value, password: password.value })
      ).then(() => {
        navigate("/");
      });
    } else {
      alert("Change form");
    }
  };

  return (
    <form
      className="container mx-auto max-w-[500px] pt-8"
      onSubmit={submitHandler}
    >
      <div className="mb-2">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          {...username}
          id="username"
          className="border py-1 px-2 w-full"
        />
      </div>

      <div className="mb-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          {...password}
          id="password"
          className="border py-1 px-2 w-full"
        />
      </div>

      <button className="py-2 px-4 bg-blue-300 border text-white" type="submit">
        Register
      </button>
      <button
        className="py-2 px-4 bg-red-400 border text-white ml-4"
        type="button"
        onClick={loginHandler}
      >
        Login
      </button>
    </form>
  );
};
