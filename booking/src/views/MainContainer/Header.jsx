import React from 'react';
import { Container } from './Header.style';

const Header = () => {
    return (
        <Container>
            <img src="/logo2.png" width="300" height="75" alt="BookYourShowz"/>
            <h4> Watch the latest movies by booking your tickets in 20 seconds! </h4>
        </Container>
    )
}

export default Header