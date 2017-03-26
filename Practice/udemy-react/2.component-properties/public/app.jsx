var Greeter = React.createClass({
    //default property used if none are passed
    getDefaultProps: function() {
        return {
            name: "React",
            message: "this is the default message"
        };
    },
    
    render: function() {
        //pulling name property out of render
        var name = this.props.name;
        var message = this.props.message;
        return(
            <div>
                <h1>Hello {name}</h1>
                <p>{message}</p>
            </div>
        );
    }
});

var fName = "chip";
var message ="message from the property";

ReactDOM.render(
    //name property passed in here, if no properties, default from above is used
    <Greeter name={fName} message={message}/>,
    document.getElementById("app")
);