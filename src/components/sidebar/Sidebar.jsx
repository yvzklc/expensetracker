// sidebar.jsx
import React from "react";
import * as S from "./styles";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <S.SidebarContainer>
      <S.SidebarHeader>
        <a href="/">Home</a>
      </S.SidebarHeader>
      <S.SidebarNav>
        <S.SidebarLink to="/incomes"  >
          <i className="zmdi zmdi-view-dashboard"></i>Incomes
        </S.SidebarLink>
        <S.SidebarLink to="/expenses"  >
          <i className="zmdi zmdi-link"></i>Expenses
        </S.SidebarLink>
        <S.SidebarLink to="/addincome"  >
          <i className="zmdi zmdi-view-dashboard"></i> Add Income
        </S.SidebarLink>
        <S.SidebarLink to="/addexpense"  >
          <i className="zmdi zmdi-link"></i> Add Expense
        </S.SidebarLink>
     
   
      </S.SidebarNav>
    </S.SidebarContainer>
  );
};

export default Sidebar;
