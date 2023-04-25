import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { logout } from "../store/slices/authSlice";

export const Navigation = () => {
  const dispatch = useAppDispatch();
  const { isAuth, username } = useAppSelector((state) => state.authSlice);
  const logoutHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(logout());
  };

  return (
    <nav className="flex justify-between px-5 h-[50px] bg-gray-200 items-center shadow-md">
      <Link to="/">Home</Link>

      {!isAuth && <Link to="/auth">Auth</Link>}

      {isAuth && (
        <>
          <span>{username}</span>
          <p className="cursor-pointer" onClick={logoutHandler}>
            Logout
          </p>
        </>
      )}
    </nav>
  );
};
