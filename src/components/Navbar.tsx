import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface ButtonProps {
  readonly icon: string;
}

const Nav = styled.nav`
    width: 347px;
    height: 85px;
    border-radius: 24px;
    background: #2C2B3E;
    padding: 0 12px;
    display: flex;    
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.div<ButtonProps>`
    width: 59px;
    height: 59px;
    border-radius: 16px;
    background: #1F1F31;
    background-image: url(${props => props.icon});    
    background-repeat: no-repeat;
    background-position: center;
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