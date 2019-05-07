import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Logo from "./Logo";
import LogoWrite from "./LogoWrite";
import RegisterModal from "./auth/RegisterModal";
import LoginModal from "./auth/LoginModal";
import Logout from "./auth/Logout";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

export class AppNavBar extends Component {
  state = {
    isOpen: false,
    temperature: 100
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  render() {



    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <NavItem>
          <span className="navbar-text mr-3">
            <strong> {user ? `Welcome ${user.name}` : ""} </strong>
          </span>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
      </Fragment>
    );

    const guestLink = (
      <Fragment>
        <NavItem>
          <RegisterModal />
        </NavItem>
        <NavItem>
          <LoginModal />
        </NavItem>
      </Fragment>
    );

    return (
      <div>
        <Navbar id="navbar" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">
              <Logo />
            </NavbarBrand>
            <NavbarBrand href="/">
              <LogoWrite />
            </NavbarBrand>

            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink onClick={this.toggle} href="#">
                    {this.props.temp} °
                  </NavLink>
                </NavItem>
                {isAuthenticated ? authLinks : guestLink}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(AppNavBar);
