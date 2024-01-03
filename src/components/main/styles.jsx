// Main.jsx
import styled from "styled-components";

export const Main = styled.main`
  grid-area: main;
  padding: var(--space-xl);
  width: ${({ isSidebarOpen }) => (isSidebarOpen ? "calc(100% - 240px)" : "100%")};
  transition: width 0.3s ease-in-out;
  opacity: ${({ isLoading }) => (isLoading ? 0.2 : 1)};
`;
