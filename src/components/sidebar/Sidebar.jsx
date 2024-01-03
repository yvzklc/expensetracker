// Sidebar.jsx
import React from "react";
import * as S from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
const Sidebar = ({ isSidebarOpen, toggleSidebar,setSidebarOpen }) => {
  const { logout } = useContext(AuthContext);


  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <S.SidebarToggleBtn onClick={toggleSidebar}>
        {isSidebarOpen ? "Close" : "Open"}
      </S.SidebarToggleBtn>

      {/* Sidebar Container */}
      <S.SidebarContainer open={isSidebarOpen}>
        <S.SidebarHeader>
          <a href="/dashboard">Home</a>
        </S.SidebarHeader>
        <S.SidebarNav>
          <S.SidebarLink to="incomes" onClick={closeSidebar}>
            <i className="icon"></i>Incomes
          </S.SidebarLink>
          <S.SidebarLink to="expenses" onClick={closeSidebar}>
            <i className="icon"></i>Expenses
          </S.SidebarLink>
          <S.SidebarLink to="addincome" onClick={closeSidebar}>
            <i className="icon"></i> Add Income
          </S.SidebarLink>
          <S.SidebarLink to="addexpense" onClick={closeSidebar}>
            <i className="icon"></i> Add Expense
          </S.SidebarLink>
          <S.SidebarLink to="/" onClick={() => { closeSidebar(); logout(); }}>
            <i className="icon"></i> logout
          </S.SidebarLink>
        </S.SidebarNav>
      </S.SidebarContainer>
    </>
  );
};

export default Sidebar;
