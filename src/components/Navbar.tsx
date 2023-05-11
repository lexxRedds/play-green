import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface ButtonProps {
  readonly icon: string;
}

const Nav = styled.nav`
    width: 347px;
    height: 85px;
    border-radius: 24px;
    background: white;
    padding: 0 12px;
    margin-bottom: 20px;
    align-self: center;
    display: flex;    
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.div<ButtonProps>`
    position: relative;
    width: 59px;
    height: 59px;
    border-radius: 16px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${props => props.icon});    
      background-repeat: no-repeat;
      background-position: center;
      filter: invert(40%) sepia(0.9) brightness(0.8) saturate(80) hue-rotate(230deg);
    }
`;

export default function Navbar() {
    return(
      <Nav>
        <NavLink to={{ pathname: "/home" }}><Button icon='../src/assets/home.svg' /></NavLink>
        <NavLink to={{ pathname: "/history" }}><Button icon='../src/assets/history.svg' /></NavLink>
        <NavLink to={{ pathname: "/logout" }}><Button icon='../src/assets/logout.svg' /></NavLink>
      </Nav>
    );
}