import React, { Component } from "react";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar className="Navbar" inverse collapseOnSelect staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="https://nusura.com" target="_blank">
                <img
                  src={
                    "https://nusura.com/wp-content/uploads/2018/06/n_rev_small3.png"
                  }
                  className="App-logo"
                  alt="logo"
                />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav />
            <Nav pullRight>
              <NavDropdown
                eventKey={1}
                title="About"
                id="basic-nav-dropdown"
                className="Theme"
              >
                <MenuItem href="https://nusura.com/mission/" target="_blank" className="Theme" eventKey={1.1}>Our Mission</MenuItem>
                <MenuItem href="https://nusura.com/approach/" target="_blank" eventKey={1.2}>Our Approach</MenuItem>
                <MenuItem href="https://nusura.com/sectors/" target="_blank" eventKey={1.3}>Sectors We Serve</MenuItem>
                <MenuItem href="https://nusura.com/team/" target="_blank" eventKey={1.3}>Our Team</MenuItem>
              </NavDropdown>
              <NavItem eventKey={2} href="#">
                Producs & Services
              </NavItem>
              <NavItem eventKey={3} target="_blank" href="https://nusura.com/simulationdeck/">
                SimulationDeck
              </NavItem>
              <NavItem eventKey={4} href="#">
                Case Studies
              </NavItem>
              <NavItem eventKey={5} href="#">
                News
              </NavItem>
              <NavItem eventKey={6} href="#">
                Contact
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
