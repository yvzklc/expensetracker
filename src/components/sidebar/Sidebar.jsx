import React from 'react'
import * as S from "./styles";
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  return (
    <S.Sidebar>Sidebar
      <button><NavLink to="/incomes">Incomes</NavLink></button>
      <button><NavLink to="/expenses">Expenses</NavLink></button>
    </S.Sidebar>
  )
}

export default Sidebar