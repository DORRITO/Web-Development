var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is a weather app built on react!</p>
            <p>
                Here are some of the tools I used:
            </p>
            <ul>
                <li>
                    <a href="http://facebook.github.io/react" target="_blank">React</a> - Framework used
                </li>
                <li>
                    <a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - Used open weather map to search for weather data
                </li>
            </ul>
        </div>
    )
};

module.exports = About;