import React from 'react'
import { Outlet } from 'react-router-dom'
import * as S from "./styles";
const Main = ({ isSidebarOpen }) => {
  return (
    <S.Main isSidebarOpen={isSidebarOpen}>
        <Outlet/>
    </S.Main>
  )
}

export default Main