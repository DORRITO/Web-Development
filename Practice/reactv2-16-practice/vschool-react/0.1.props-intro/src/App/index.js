import React, { Component } from "react";
import Nav from "./Nav";

function App(props) {
    let links = [{
        href: "/home",
        name: "Home"
    }, {
        href: "/about",
        name: "About"
    },
    {
        href: "/contact",
        name: "Contact"
    }];
    return (
        <div>
            <Nav
                links={links}
                parentStyle={{ backgroundColor: "yellow" }}
                childStyle={{ color: "fuchsia" }}>
            </Nav>
            <Nav
                links={links}
                parentStyle={{ backgroundColor: "blue" }}
                childStyle={{ color: "yellow" }}>
            </Nav>
        </div>
    )
}

export default App;