import { Navigate } from "react-router-dom";
import React, { useContext } from "react";

import AuthContext from "../contexts/AuthContext";

function PrivateRoute({ children, ...rest }) {
  const auth = useContext(AuthContext);

  const token = auth.token;

  return token ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
