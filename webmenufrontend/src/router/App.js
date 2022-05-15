import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "../contexts/AuthContext";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Places from "../pages/Places";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Place from "../pages/Place";
import Menu from "../pages/Menu";
import Orders from "../pages/Orders";
import MenuSettings from "../pages/MenuSettings";
function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>

            <Route path="/menu/:id/:table" element={<Menu />}></Route>

            <Route
              path="/places/:id"
              element={
                <PrivateRoute path="/places/:id">
                  <Place />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/places"
              element={
                <PrivateRoute path="/places">
                  <Places />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/places/:id/orders"
              element={
                <PrivateRoute path="/places/:id/orders">
                  <Orders />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/places/:id/settings"
              element={
                <PrivateRoute path="/places/:id/settings">
                  <MenuSettings />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </AuthProvider>
    </>
  );
}

export default App;
