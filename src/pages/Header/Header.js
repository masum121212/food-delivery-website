import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Header.css'
const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top"   collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand><h2><i class="fas fa-utensils text-success"> Food Panda</i></h2></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <NavLink to="/home"><button className="btn btn-outline-success text-light">Home</button></NavLink>
                <NavLink to="/service"><button className="btn btn-outline-success text-light">Service</button></NavLink>
                <NavLink to="/order"><button className="btn btn-outline-success text-light">Order</button></NavLink>
                <NavLink to="/inventory"><button className="btn btn-outline-success text-light">inventory</button></NavLink>
                <NavLink to="/contact"><button className="btn btn-outline-success text-light">Contact</button></NavLink>
                <NavLink to="/about"><button className="btn btn-outline-success text-light">About</button></NavLink>
                {
                    user.email ?
                    <button onClick={logOut} className="btn btn-outline-success text-light">Logout</button>
                    :
                    <NavLink to="/login"><button className="btn btn-outline-success text-light">Login</button></NavLink>}
                        <Navbar.Text>
                            Signed in as: {
                    user.email &&
                    <span className="text-light"> <img className="rounded-circle" src={user.photoURL} alt="" /> </span>}
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Nav className="me-auto">
            
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;