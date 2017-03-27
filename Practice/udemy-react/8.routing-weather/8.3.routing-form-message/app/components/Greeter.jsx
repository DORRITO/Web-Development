var React = require("react");
var GreeterMessage = require("./GreeterMessage.jsx");
var GreeterForm = require("./GreeterForm.jsx");

var Greeter = React.createClass({
    //default property used if none are passed
    getDefaultProps: function() {
        return {
            name: "React",
            message: "this is the default message"
        };
    },
    
    //gets the state
    getInitialState: function() {
        return {
            name: this.props.name,
            message: this.props.message
        }
    },
    
    //when the user clicks a button.  e is the event object
    handleNewData: function(updates) {
        this.setState(updates);
    },
    
    render: function() {
        //pulling name property out of render
        var name = this.state.name;
        var message = this.state.message;
        
        return(
            <div>
                <GreeterMessage name={name} message={message} />               
                <GreeterForm onNewData={this.handleNewData} />
            </div>
        );
    }
});

module.exports = Greeter;