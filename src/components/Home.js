import React, { useState, useEffect } from 'react';

import linkedin from '../images/icons/linkedin.ico';
import github from '../images/icons/github.ico';
import { Button, Image, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function Home() {

    return (
        <div>
            <h1 className="title">audrey tracy</h1>
            <Navbar expand="lg" bg="light" data-bs-theme="light" fixed="bottom" height="20px">
            <Container>
                <a href = "https://www.linkedin.com/in/audrey-tracy/" class="label"><Image className="icon" src={linkedin} width="40px" />linkedin</a> 
                <a href = "https://github.com/audreytracy" className="label">github <Image className="icon" src={github} width="40px" /> </a>
            </Container>
        </Navbar>
        </div>
    );
}

export default Home;