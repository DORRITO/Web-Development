var GreeterMessage = React.createClass({
    render: function() {
        var name = this.props.name;
        var message = this.props.message;
        
        return (
            <div>
                <h1>Hello {name}</h1>
                <p>{message}</p>
            </div>
        );
    }
});

var GreeterForm = React.createClass({
    
    onFormSubmit: function(e) {
        e.preventDefault();
        
        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;
        
        if (name.length > 0) {
            this.refs.name.value = '';
            updates.name = name;
        }
        
        if (message.length > 0) {
            this.refs.message.value = '';
            updates.message = message;
        }
        
        this.props.onNewData(updates);
    },
    
    render: function() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input type="text" ref="name" placeholder="Enter name" />
                    </div>
                    <div>
                        <textarea ref="message" placeholder="Enter message" ></textarea>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
});


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

var fName = "chip";
var message ="message from the property";

ReactDOM.render(
    //name property passed in here, if no properties, default from above is used
    <Greeter name={fName} message={message}/>,
    document.getElementById("app")
);