var React = require('react');
var Nav = require('Nav');

//{props.children}

var Main = (props) => {
    return (
        <div>
        <Nav />
        <div className='row'>
            <div div className="column small-centered medium-6 large-4">
                {props.children}
            </div>
        </div> 
        </div>
    );
}

module.exports = Main;