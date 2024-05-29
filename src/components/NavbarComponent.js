import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavbarComponent(props) {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top" height="30px">
            <Navbar.Brand> Audrey Tracy </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="justify-content-end">
                    <Nav.Link href="/portfolio2/">Home</Nav.Link>
                    <Nav.Link href="/portfolio2/about">About</Nav.Link>
                    <Nav.Link href="/portfolio2/experience">Experience</Nav.Link>
                    <Nav.Link href="/portfolio2/documents">Documents</Nav.Link>
                    <Nav.Link href="/portfolio2/projects">Projects</Nav.Link>
                    <NavDropdown title="Contact">
                        <NavDropdown.Item href="https://www.linkedin.com/in/audrey-tracy/"> LinkedIn </NavDropdown.Item>
                        <NavDropdown.Item href="https://github.com/audreytracy"> Github </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/portfolio2/contact"> Send a message </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarComponent;
