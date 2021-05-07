import React, { useState } from 'react'
import { Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    return (
        <>
            <Navbar color="dark" dark expand="md" className="px-2">
                <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href='/'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/balance'>Balance</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/transfer'>Transfer</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/history'>History</NavLink>
                        </NavItem>
                    </Nav>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <NavLink onClick={() => {
                                console.log('clicked')
                                localStorage.clear();
                            }}>Signout</NavLink>
                        </NavItem>
                    </Nav>

                </Collapse>
                
              </Navbar>
        </>
    )
}
