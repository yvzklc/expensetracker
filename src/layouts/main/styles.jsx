import styled from "styled-components";

export const MainLayout = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  height: 100vh;
  
  display: grid;
  grid-template-areas:
    "sidebar topbar"
    "sidebar main";
  grid-template-columns: 240px 1fr;
  grid-template-rows: 72px 1fr;
`;
