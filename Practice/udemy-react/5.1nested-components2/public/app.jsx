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
        
        var name = this.refs.name.value;
        
        if (name.length > 0){
            this.refs.name.value = '';
            this.props.onNewName(name);
        }
    },
    
    render: function() {
        return (
            <div>
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="name"/>
                <button>Set Name</button>
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
            name: this.props.name
        }
    },
    
    //when the user clicks a button.  e is the event object
    handleNewName: function(name) {
        this.setState({
           name: name 
        });
    },
    
    render: function() {
        //pulling name property out of render
        var name = this.state.name;
        var message = this.props.message;
        
        return(
            <div>
                <GreeterMessage name={name} message={message} />               
                <GreeterForm onNewName={this.handleNewName} />
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