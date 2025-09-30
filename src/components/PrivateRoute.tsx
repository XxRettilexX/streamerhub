import { Navigate } from "react-router-dom";
import type { PrivateRouteProps } from "../types";

function PrivateRoute({ children }: PrivateRouteProps) {
    const isAuth = localStorage.getItem('isLoggedIn') === 'true';

    return isAuth ? <>{children}</> : <Navigate to="/login" />;
}

export default PrivateRoute;