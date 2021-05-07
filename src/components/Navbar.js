import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';


export default function Header() {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/balance'>Balance</Nav.Link>
                            <Nav.Link href='/transfer'>Transfer</Nav.Link>
                            <Nav.Link href='/history'>History</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
