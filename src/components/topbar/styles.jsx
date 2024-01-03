// styles.jsx
import styled from "styled-components";
import { FaCircleUser } from 'react-icons/fa6';

export const Topbar = styled.div`
  grid-area: topbar;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  @media (max-width: 768px) {
    justify-content: center; // ya da istediğiniz başka bir davranış
  }

`;

export const UserRectangle = styled.div`
  padding: 15px; 
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  border-radius: 4px;
`;

export const Username = styled.div`
  margin-right: 10px;
`;

export const ProfileIcon = styled(FaCircleUser)`
  color: #3498db;
  font-size: 24px;
  cursor: pointer;
`;
