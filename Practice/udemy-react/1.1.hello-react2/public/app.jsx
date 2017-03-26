var Greeter = React.createClass({
    render: function() {
        return(
            <div>
                <h1>Hello React</h1>
                <p>This is a paragraph tag, added from the assignment into the component!</p>
            </div>
        );
    }
});

ReactDOM.render(
    <Greeter />,
    document.getElementById("app")
);