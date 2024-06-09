import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from './logo.png';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Catalog from '../Pages/Catalog';
import Blog from '../Pages/Blog';
import Contacts from '../Pages/Contacts';




export default class Header extends Component {
    render () {
        return (
            <>
            <Navbar  collapseOnSelect expand='md' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href='/' >
                        <img
                            src={logo}
                            height="30px"
                            width="30px"
                            className='d-inline-block align-top'
                            alt='Logo'
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='mr-auto'>
                            <Nav.Link href='/'> Главная </Nav.Link>
                            <Nav.Link href='/catalog'> Каталог</Nav.Link>
                            <Nav.Link href='/blog'>  </Nav.Link>
                            <Nav.Link href='/contacts'>  </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route exact path='/catalog' element={<Catalog/>} />
                    <Route exact path='/blog' element={<Blog/>} />
                    <Route exact path='/contacts' element={<Contacts/>} />
                </Routes>
            </Router>
            </>
        )
    }
}