import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import  Main  from "../components/main/Main";
import { MainLayout } from "../layouts/main/MainLayout";

const PrivateRouter = () => {
  const {user} = useContext(AuthContext)
  return user ? (
    <>
     <MainLayout/>
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRouter;