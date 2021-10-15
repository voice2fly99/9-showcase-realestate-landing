import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  /* background: #000; */
  /* background: green; */
`;

export const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled(Link)`
  /* color: #fff; */
  ${NavLink}
  font-style: italic;
`;

export const MenuBars = styled(VscMenu)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    height: 30px;
    width: 30px;
    margin-top: -4px;
  }
`;

// this is for seperate design
// export const MenuBars = styled.i`
//   display: none;

//   @media screen and (max-width: 768px) {
//     display: block;
//     background-image: url(${NameOfImageBeingUsedHere});
//     background-size: contain;
//     height: 40px;
//     width: 40px;
//     cursor: pointer;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transition: translate(-50%, 25%);
//   }
// `;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuLinks = styled(Link)`
  /* color: #fff; */
  ${NavLink}
`;
