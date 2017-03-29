var React = require('react');
var {NavLink} = require('react-router-dom');

var Examples = () => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <NavLink to='/?location=Yuma'>Yuma, AZ</NavLink>
                </li>
                <li>
                    <NavLink to='/?location=Phoenix'>Phoenix, AZ</NavLink>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;