import React from "react";

import  Sidebar  from "../../components/sidebar/Sidebar";
import  Topbar  from "../../components/topbar/Topbar";
import  Main  from "../../components/main/Main";

import * as S from "./styles";

function MainLayout() {
  return (
    <S.MainLayout>
      <Sidebar />
      <Topbar />
      <Main />
    </S.MainLayout>
  );
}

export { MainLayout };
