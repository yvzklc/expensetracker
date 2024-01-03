import React, { useContext } from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Main from "../../components/main/Main";
import { AuthContext } from "../../context/AuthProvider";
import {  useNavigate } from "react-router-dom";
import * as S from "./styles";
import { useState } from "react";
function MainLayout() {
  const Navigate = useNavigate()
  const { user } = useContext(AuthContext);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };  
  return user ? (
    <>
 <S.MainLayout isSidebarOpen={isSidebarOpen}>
    <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} toggleSidebar={toggleSidebar} />
      <Topbar />
      <Main isSidebarOpen={isSidebarOpen} />
    </S.MainLayout>
    </>
  ) : (
    <Navigate to="/" />
  );
}

export { MainLayout };
