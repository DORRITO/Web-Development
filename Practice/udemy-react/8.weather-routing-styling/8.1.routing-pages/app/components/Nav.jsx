var React = require('react');
var {Link} = require('react-router-dom');

var Nav = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Nav</h2>
                <Link to="/">Get Weather</Link>
                <Link to="/about">About</Link>
                <Link to="/examples">Examples</Link>
            </div>
        );
    }
});

module.exports = Nav;