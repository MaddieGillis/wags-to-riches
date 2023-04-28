
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";


  
export const Nav = styled.nav`
  background: #5B96A9;
  height: 65px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  padding-right: 3%;
  box-shadow: 2px 2px 8px 8px #3D405B;
`;

export const Avatar = styled.img`
  width: 85px;
  height: 60px;
  margin-right: auto;
`;
  
export const NavLink = styled(Link)`
  color: #3D405B;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: 'Bebas Neue', cursive;
  font-size: 24px;
  text-transform: uppercase;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #FFFCF6;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;