import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.bg};
  transition: 0.3s all ease;
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  z-index: 1;
  width: 100%;
  margin-top: 45px;
  margin-left: 90px;
  margin-right: 90px;
  margin-bottom: 45px;
  transition: 0.3s all ease;
  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 25px;
    margin-top: 25px;
  }
`;

export const NavLogo = styled(LinkR)`
  width: 5rem;
  margin-left: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

export const Logo = styled.img`
  object-fit: contain;
  height: 60px;
  width: 180px;
`;

export const LogoText = styled.div``;

export const Time = styled.span`
  font-weight: 700;
  text-decoration: none;
`;

export const NavItems = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  margin-right: 4rem;
  margin-left: 4rem;
  transition: 0.3s all ease;
  &:hover {
    color: ${({ theme }) => theme.texthover};
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(LinkR)`
  color: ${({ theme }) => theme.text};
  font-weight: 400;
  font-size: larger;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.texthover};
  }
`;

export const ButtonContainer = styled.div`
  margin-right: -2rem;
`;

export const SearchContainer = styled.div`
  margin-top: 6px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.texthover};
  }
`;

export const MobileIcon = styled.div`
  display: none;
  transition: 0.3s all ease;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 30px;
    right: 20px;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
  }
`;

export const MobileMenu = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    position: absolute;
    top: 150px;
    right: 0;
    width: 100%;
    :hover {
      color: ${({ theme }) => theme.texthover};
    }
    padding: 12px 40px 54px 40px;
    background-color: ${({ theme }) => theme.bg};
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-100%)"};
  }
`;

export const MobileLink = styled(LinkR)`
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`;
