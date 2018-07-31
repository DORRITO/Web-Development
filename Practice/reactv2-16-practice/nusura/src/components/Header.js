import React, { Component } from "react";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <div>
        About Products & Services SimulationDeck Case Studies News Contact
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
              >
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
              <NavItem eventKey={2} href="#">
                Producs & Services
              </NavItem>
              <NavItem eventKey={3} href="#">
                SimulationDeck
              </NavItem>
              <NavItem eventKey={4} href="#">
                Link Right
              </NavItem>
              <NavItem eventKey={5} href="#">
                Link Right
              </NavItem>
              <NavItem eventKey={6} href="#">
                Link Right
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>;
        <header className="App-header" />
      </div>
    );
  }
}

export default Header;
