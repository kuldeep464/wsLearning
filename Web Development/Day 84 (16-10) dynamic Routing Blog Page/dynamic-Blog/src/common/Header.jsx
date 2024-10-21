import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Container fluid>
                <Container className=' position-relative'>
                    <Row className=''>
                        <Col lg={3}>
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/company-profile/ec33214d-e643-4f45-bbb8-50ee61b830ec-1673703981.webp" className='headerimg position-absolute top-0 start-0' alt="" />
                        </Col>
                        <Col lg={9} className='d-flex justify-content-end align-items-center'>
                            <Navbar expand="lg" className="">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="d-flex justify-content-end align-items-center">
                                        <Nav className='p-3'>
                                            <Link to={'/'} className='nav-link'>Home</Link>
                                        </Nav>
                                        <Nav className='p-3'>About Us</Nav>
                                        <Nav className='p-3'>Projects</Nav>
                                        <Nav className='p-3'>
                                            <Link to={'/Media-And-Events'} className='nav-link'>Media And Events</Link>
                                        </Nav>
                                        <Nav className='p-3'>
                                            <Link to={'/Blog'} className='nav-link'>Blogs</Link>
                                        </Nav>
                                        <Nav className='p-3'>
                                            <Link to={'/Contact-us'} className='nav-link'>Contact Us</Link>
                                        </Nav>
                                        <Nav className='px-2'>
                                            <button className='p-1'>
                                                ENQUIRE
                                            </button>
                                        </Nav>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </header>
    )
}
