import React from 'react'
import { Outlet } from 'react-router-dom'
import * as S from "./styles";
const Main = () => {
  return (
    <S.Main>
        
        <Outlet/>
    </S.Main>
  )
}

export default Main