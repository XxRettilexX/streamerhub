import { Navigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { type PrivateRouteProps } from "../types";

function PrivateRoute({ children }: PrivateRouteProps) {
  const { user } = useUser();

  return user?.loggedIn ? <>{children}</> : <Navigate to="/login" />;
}

export default PrivateRoute;
