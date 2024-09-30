import { Navigate } from "react-router-dom";
import { ROUTES } from "../lib/consts";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { accessToken } = useSelector((state: RootState) => state.auth);

  return accessToken ? children : <Navigate to={ROUTES.REGISTER} />;
};

export default PrivateRoute;
