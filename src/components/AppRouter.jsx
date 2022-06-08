import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import { privatRoutes, publicRoutes } from "../router";

const AppRouter = () => {
  const {isAuth} = useContext(AuthContext);

  return (
    isAuth
    ?
    <Routes>
      {privatRoutes.map(route => 
        <Route path={route.path} element={<route.component/>} key={route.path}/>
      )};
    </Routes>
    :
    <Routes>
      {publicRoutes.map(route => 
        <Route path={route.path} element={<route.component/>} key={route.path}/>
      )};
    </Routes>
  );
};

export default AppRouter;