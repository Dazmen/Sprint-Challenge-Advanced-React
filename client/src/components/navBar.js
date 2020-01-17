import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import { CustomInput, Label } from 'reactstrap';
import styled from 'styled-components';

const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggle = (e) => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return(
        <Nav data-testid='navBar'>
            <h1>Women's World Cup Players</h1>
            <DarkBtnCont>
                <Label for="darkModeSwitch">Toggle Dark Mode</Label>
                <CustomInput 
                type="switch" 
                id="darkModeSwitch" 
                name="darkModeSwitch" 
                data-testid='darkModeSwitch' 
                onClick={toggle}
                />
            </DarkBtnCont>
        </Nav>
    )
}

export default NavBar;

const Nav = styled.nav`
    height: 70px;
    padding: 0 4%;
    display: flex;
    justify-content: space-between;
    background-color: darkgrey;
`;
const DarkBtnCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
`;