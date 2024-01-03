// styles.jsx
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

// styles.jsx

export const SidebarContainer = styled.aside`
  grid-area: sidebar;
  border-right: 1px solid #23344b;
  background-color: #37474F;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const SidebarHeader = styled.header`
  background-color: #263238;
  font-size: 20px;
  line-height: 52px;
  text-align: center;

  a {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    color: #fff;
  }
`;

export const SidebarNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SidebarLink = styled(NavLink)`
  color: #cfd8dc;
  text-decoration: none;
  padding: 16px 24px;
  border-bottom: 1px solid #455a64;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  display: block; /* Bu satırı ekleyerek linklerin blok seviyesinde olmasını sağlayın */

  &:hover {
    background-color: #30475e;
    color: #edf2f4;
  }

  &.active {
    font-weight: bold;
    color: #ff9a8b;
    background-color: #30475e;
  }
`;
