import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Cadastrar, Login, Home, Dispositivos } from "../pages";
import { AuthProvider } from "../contexts/Authenticate";
import { Private } from "./Private";

export const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/cadastrar" element={<Cadastrar />} />
          <Route
            exact
            path="/"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
          <Route
            exact
            path="/dispositivos"
            element={
              <Private>
                <Dispositivos />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};
