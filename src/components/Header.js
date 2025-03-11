import React, {useContext, useState} from 'react';
import {Badge, Button, Container, Form, Nav, Navbar} from "react-bootstrap";
import logo from '../data/logo.png';
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Store from "../pages/Store";
import Cart from "./Cart";
import {CartContext} from "../context/CartContext";
import CartButton from "./CartButton";

const Header = () => {
    const [search, setSearch] = useState('');
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }
    const cartToggle = () => {
        setIsCartOpen(!isCartOpen)
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary custom_navbar" sticky="top" >
                <Container >
                    <Navbar.Brand
                        style={{color: "#414033"}}
                        href="/">
                        <img src={logo}
                             className="App-logo"
                            width="60"
                            height="60"
                             alt="logo"/>
                        Charm&Bewitch
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                            <Nav.Link to="/gallery" as={NavLink}>Gallery</Nav.Link>
                            <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                            <Nav.Link to="/design.services" as={NavLink}>Free design services</Nav.Link>
                            <Nav.Link to="/new" as={NavLink}>New!</Nav.Link>
                        </Nav>

                        <Form inline='true'
                              className='d-flex justify-content-center'
                        //
                        >
                            <Form.Control
                            type='text'
                            placeholder='search for item...'
                            className='me-1'
                            onChange={handleSearch}

                            />
                            <div>

                            <CartButton cartToggle={cartToggle}
                                        // quantity={quantity}
                                        />

                            </div>

                        </Form>

                    </Navbar.Collapse>
                    <Cart />
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/store" element={<Store/>}/>
            </Routes>
        </>
    );
};

export default Header;
