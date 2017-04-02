var React = require('react');
var {NavLink} = require('react-router-dom');

var Nav = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Nav</h2>
                <NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</NavLink>
                <NavLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink>
                <NavLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
            </div>
        );
    }
});

module.exports = Nav;