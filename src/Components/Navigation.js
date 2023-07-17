import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <Navbar expand='md' variant='dark' bg='dark' className='p-3'>
        <Navbar.Brand href='/'><span className='brand-text'>ToDo</span></Navbar.Brand>
        {/* burgerbutton */}
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
            <Nav>
              <Link to='/todos' className='nav-link'>Todos</Link>
              <Link to='/categories' className='nav-link'>Categories</Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
