import { useContext } from "react";
import AuthContext from "../Contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Loading";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const { pathname } = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;
