import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Cadastrar, Login, Home, Dispositivos, Perfil } from '../pages';
import { Private } from './Private';

export const AppRoutes = () => {
  return (
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
      <Route
        exact
        path="/Perfil"
        element={
          <Private>
            <Perfil />
          </Private>
        }
      />
    </Routes>
  );
};
