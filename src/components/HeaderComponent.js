import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, NavLink, Row} from 'reactstrap';
import {Link} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isNavOpen: false,
            // isModalOpen: false
        };
        // this.toggleNav = this.toggleNav.bind(this);
        // this.toggleModal = this.toggleModal.bind(this);
        // this.handleLogin = this.handleLogin.bind(this);
    }

   
    
    render() {
        return(
            <React.Fragment>
                <Navbar dark className="text-white " color="primary" >
                    {/* fix shadow */}
                    <div className="container shadow-lg">
                        {/* <NavbarToggler onClick={this.toggleNav}/>
                        
                        
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink to="/home">
                                        <span className="fa fa-home  text-white"></span> Home
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info "></span> About Us
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list "></span> Menu
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card "></span> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in"> Login</span>
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse> */}
                        {/* removed button, use nav link for span tags */}
                        {/* <Nav navbar >
                            <NavItem >
                                <Button className="btn btn-outline-light">
                                    <span className="fa fa-bars"></span>
                                </Button>
                            </NavItem>
                        </Nav> */}
                        <div className="row col-1">
                            <Nav navbar >
                                <NavItem >
                                    
                                    <span className="fa fa-bars "></span>
                                    
                                </NavItem>
                            </Nav>
                        </div>
                        
                        <div className="row col-9">
                            <Nav navbar className="col-9">
                                <NavItem className="h6 ">
                                    
                                    <Link className="text-white text-decoration-none all-links" to="/home">NY Times Most Popular</Link>
                                    
                                    
                                </NavItem>
                            </Nav>
                        </div>
                        <div className="row col-1">
                            <Nav navbar >
                                <NavItem >
                                    
                                    <span className="fa fa-search "></span>
                                    
                                </NavItem>
                            </Nav>
                        </div>
                        
                        <div className="row col-1">
                            <Nav navbar >
                                <NavItem >
                                    
                                    <span className="fa fa-ellipsis-v "></span>
                                    
                                </NavItem>
                            </Nav>
                        </div>
                        
                    </div>
                </Navbar>
                
                
                
            </React.Fragment>
        );
    }
}

export default Header;