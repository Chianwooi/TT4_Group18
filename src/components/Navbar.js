import React, { useState } from 'react'
import { Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const user = localStorage.getItem('user')
    console.log("dhsnd", user);


    function logout() {
        console.log('Clicked')
        window.localStorage.clear();
        window.location.href = '/';
    }

    return ( 
        <>
        {user != null ? 

            <Navbar color="dark" dark expand="md" className="px-2">
                <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href='/home'>Home</NavLink>
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
                        <NavLink onClick={() => logout()}>Signout</NavLink>
                    </Nav>

                </Collapse>
                
              </Navbar>

          :
          <Navbar color="dark" dark expand="md" className="px-2">
          <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={isOpen} navbar>
              <Nav className="ms-auto" navbar>
                  <NavLink href='/'> Login</NavLink>
              </Nav>

          </Collapse>
          
        </Navbar>
          }
          </>
        
    )
}
