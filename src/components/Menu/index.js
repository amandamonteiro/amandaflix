import React from 'react';

import Logo from '../../assets/image/Logo.png';
// import ButtonLink from '../components/ButtonLink';
import Button from '../Button/index';
import './style.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="LogoAmandaFlix" />
            </a>

            <Button as="a" className="ButtonLink" href="/"> 
            Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;